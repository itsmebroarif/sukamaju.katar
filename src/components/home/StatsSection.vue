<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div v-for="(stat, i) in stats" :key="i" class="stat-item" v-reveal :class="'reveal-delay-' + (i + 1)">
          <div class="stat-icon" :style="{ background: stat.bg, color: stat.color }">
            <span v-html="stat.icon"></span>
          </div>
          <div class="stat-info">
            <div class="stat-number">{{ animatedStats[i] || 0 }}{{ stat.suffix }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'StatsSection',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      animatedStats: [0, 0, 0, 0],
      stats: [
        { value: 50, suffix: '+', label: 'Total Anggota', bg: 'rgba(220,38,38,0.08)', color: 'var(--primary)', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
        { value: 20, suffix: '+', label: 'Program Terlaksana', bg: 'rgba(234,179,8,0.1)', color: 'var(--secondary-dark)', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' },
        { value: 15, suffix: '+', label: 'Kolaborasi', bg: 'rgba(37,99,235,0.08)', color: 'var(--accent)', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>' },
        { value: 500, suffix: '+', label: 'Jam Pengabdian', bg: 'rgba(22,163,74,0.08)', color: 'var(--success)', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' }
      ]
    }
  },
  methods: {
    animateCounters() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.stats.forEach((stat, i) => {
              let current = 0
              const target = stat.value
              const increment = Math.ceil(target / 50)
              const timer = setInterval(() => {
                current += increment
                if (current >= target) { current = target; clearInterval(timer) }
                this.animatedStats[i] = current
              }, 30)
            })
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.3 })
      const el = document.querySelector('.stats-section')
      if (el) observer.observe(el)
    }
  },
  mounted() {
    this.animateCounters()
  }
}
</script>

<style scoped>
.stats-section {
  padding: 56px 0;
  margin-top: -32px;
  position: relative;
  z-index: 10;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.stat-item {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
  transition: var(--transition);
}

.stat-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .stat-item { padding: 18px; gap: 12px; }
  .stat-icon { width: 40px; height: 40px; }
  .stat-number { font-size: 1.25rem; }
}

@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr; gap: 10px; }
  .stat-item { padding: 14px; }
}
</style>
