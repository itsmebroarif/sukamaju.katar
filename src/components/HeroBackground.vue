<template>
  <canvas ref="canvas" class="hero-canvas"></canvas>
</template>

<script>
export default {
  name: 'HeroBackground',
  data() {
    return {
      animationId: null,
      nodes: [],
      particles: [],
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      isDark: false
    }
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas
      if (!canvas) return

      this.isDark = document.documentElement.getAttribute('data-theme') === 'dark'

      const ctx = canvas.getContext('2d')
      this.resize()

      const isMobile = this.width < 768
      const nodeCount = isMobile ? 8 : 18
      const particleCount = isMobile ? 60 : 200

      this.nodes = this.createNodes(nodeCount)
      this.particles = this.createParticles(particleCount)

      window.addEventListener('resize', this.resize)
      this.animate(ctx)
    },
    resize() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const rect = canvas.parentElement.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      this.width = rect.width
      this.height = rect.height
      canvas.width = this.width * dpr
      canvas.height = this.height * dpr
      canvas.style.width = this.width + 'px'
      canvas.style.height = this.height + 'px'
      canvas.getContext('2d').scale(dpr, dpr)
    },
    createNodes(count) {
      const nodes = []
      const baseOpacity = this.isDark ? 0.15 : 0.2
      const opacityRange = this.isDark ? 0.25 : 0.4
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1.5,
          opacity: Math.random() * opacityRange + baseOpacity
        })
      }
      return nodes
    },
    createParticles(count) {
      const particles = []
      const baseOpacity = this.isDark ? 0.05 : 0.1
      const opacityRange = this.isDark ? 0.15 : 0.3
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.15 - 0.1,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * opacityRange + baseOpacity
        })
      }
      return particles
    },
    getGridColor() {
      return this.isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.035)'
    },
    getNodeColor(opacity) {
      return this.isDark ? `rgba(148, 163, 184, ${opacity})` : `rgba(255, 255, 255, ${opacity})`
    },
    getParticleColor(opacity) {
      return this.isDark ? `rgba(148, 163, 184, ${opacity})` : `rgba(255, 255, 255, ${opacity})`
    },
    getConnectionColor(alpha) {
      return this.isDark ? `rgba(234, 179, 8, ${alpha})` : `rgba(234, 179, 8, ${alpha})`
    },
    getGlowColors() {
      if (this.isDark) {
        return {
          primary: ['rgba(234, 179, 8, 0.04)', 'rgba(234, 179, 8, 0.015)', 'rgba(234, 179, 8, 0)'],
          secondary: ['rgba(220, 38, 38, 0.03)', 'rgba(220, 38, 38, 0.01)', 'rgba(220, 38, 38, 0)']
        }
      }
      return {
        primary: ['rgba(234, 179, 8, 0.08)', 'rgba(234, 179, 8, 0.03)', 'rgba(234, 179, 8, 0)'],
        secondary: ['rgba(220, 38, 38, 0.06)', 'rgba(220, 38, 38, 0.02)', 'rgba(220, 38, 38, 0)']
      }
    },
    drawGrid(ctx) {
      const spacing = 60
      ctx.strokeStyle = this.getGridColor()
      ctx.lineWidth = 0.5

      for (let x = 0; x <= this.width; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, this.height)
        ctx.stroke()
      }
      for (let y = 0; y <= this.height; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(this.width, y)
        ctx.stroke()
      }
    },
    drawNodes(ctx) {
      const connectionDistance = 180

      for (let i = 0; i < this.nodes.length; i++) {
        const a = this.nodes[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > this.width) a.vx *= -1
        if (a.y < 0 || a.y > this.height) a.vy *= -1

        for (let j = i + 1; j < this.nodes.length; j++) {
          const b = this.nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15
            ctx.strokeStyle = this.getConnectionColor(alpha)
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        ctx.fillStyle = this.getNodeColor(a.opacity)
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    },
    drawParticles(ctx) {
      for (const p of this.particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = this.width
        if (p.x > this.width) p.x = 0
        if (p.y < 0) p.y = this.height
        if (p.y > this.height) p.y = 0

        ctx.fillStyle = this.getParticleColor(p.opacity)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    },
    drawGlow(ctx) {
      const cx = this.width * 0.7
      const cy = this.height * 0.3
      const r = Math.min(this.width, this.height) * 0.4

      const glow = this.getGlowColors()
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
      grad.addColorStop(0, glow.primary[0])
      grad.addColorStop(0.5, glow.primary[1])
      grad.addColorStop(1, glow.primary[2])
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, this.width, this.height)

      const cx2 = this.width * 0.2
      const cy2 = this.height * 0.7
      const r2 = Math.min(this.width, this.height) * 0.35

      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2)
      grad2.addColorStop(0, glow.secondary[0])
      grad2.addColorStop(0.5, glow.secondary[1])
      grad2.addColorStop(1, glow.secondary[2])
      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, this.width, this.height)
    },
    animate(ctx) {
      ctx.clearRect(0, 0, this.width, this.height)

      this.drawGrid(ctx)
      this.drawGlow(ctx)
      this.drawParticles(ctx)
      this.drawNodes(ctx)

      this.animationId = requestAnimationFrame(() => this.animate(ctx))
    },
    handleThemeChange() {
      const newIsDark = document.documentElement.getAttribute('data-theme') === 'dark'
      if (newIsDark !== this.isDark) {
        this.isDark = newIsDark
        this.nodes = this.createNodes(this.nodes.length)
        this.particles = this.createParticles(this.particles.length)
      }
    }
  },
  mounted() {
    this.init()
    window.addEventListener('storage', this.handleThemeChange)
    const observer = new MutationObserver(this.handleThemeChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    this._themeObserver = observer
  },
  unmounted() {
    if (this.animationId) cancelAnimationFrame(this.animationId)
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('storage', this.handleThemeChange)
    if (this._themeObserver) this._themeObserver.disconnect()
  }
}
</script>

<style scoped>
.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
