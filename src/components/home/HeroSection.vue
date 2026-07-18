<template>
  <section class="hero">
    <HeroBackground />
    <div class="hero-overlay"></div>
    <div class="container hero-container">
      <div class="hero-left">
        <div class="hero-badge-wrap" v-reveal>
          <span class="hero-badge">
            <img src="/logo.png" alt="" class="badge-logo">
            {{ t('hero.badge') }}
          </span>
        </div>
        <h1 v-reveal v-html="t('hero.title')"></h1>
        <p class="hero-desc" v-reveal>
          {{ t('hero.description') }}
        </p>
        <div class="hero-cta" v-reveal>
          <router-link to="/daftar" class="btn btn-primary-hero">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            {{ t('hero.cta.join') }}
          </router-link>
          <router-link to="/kegiatan" class="btn btn-outline-hero">
            {{ t('hero.cta.programs') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </router-link>
        </div>
        <div class="hero-stats" v-reveal>
          <div class="hero-stat" v-for="(stat, i) in heroStats" :key="i">
            <span class="hero-stat-num">{{ stat.value }}{{ stat.suffix }}</span>
            <span class="hero-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero-right" v-reveal>
        <div class="hero-visual">
          <div class="visual-card vc-1">
            <div class="vc-icon" style="background: rgba(220,38,38,0.1);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <div><strong>50+</strong><span>Anggota</span></div>
          </div>
          <div class="visual-card vc-2">
            <div class="vc-icon" style="background: rgba(34,197,94,0.1);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div><strong>20+</strong><span>Program</span></div>
          </div>
          <div class="visual-card vc-3">
            <div class="vc-icon" style="background: rgba(37,99,235,0.1);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <div><strong>15+</strong><span>Kolaborasi</span></div>
          </div>
          <div class="visual-card vc-4">
            <div class="vc-icon" style="background: rgba(234,179,8,0.1);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EAB308" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div><strong>500+</strong><span>Jam</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
import HeroBackground from '@/components/HeroBackground.vue'

export default {
  name: 'HeroSection',
  components: { HeroBackground },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      heroStats: [
        { value: 50, suffix: '+', label: 'Anggota' },
        { value: 20, suffix: '+', label: 'Program' },
        { value: 15, suffix: '+', label: 'Kolaborasi' },
        { value: 500, suffix: '+', label: 'Jam Pengabdian' }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  background: linear-gradient(160deg, #FAFAF9 0%, #F5F5F4 30%, #ECFDF5 60%, #EFF6FF 100%);
  overflow: hidden;
}

[data-theme="dark"] .hero {
  background: linear-gradient(160deg, #0F172A 0%, #111827 30%, #064E3B 60%, #1E3A5F 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%);
  pointer-events: none;
}

[data-theme="dark"] .hero-overlay {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%);
}

.hero-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 80px 24px;
}

.hero-left {
  max-width: 560px;
}

.hero-badge-wrap {
  margin-bottom: 24px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px 6px 6px;
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-xs);
}

.badge-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 50%;
}

.hero h1 {
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.text-accent {
  background: linear-gradient(135deg, #EAB308, #CA8A04);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 480px;
  margin-bottom: 32px;
  line-height: 1.75;
}

.hero-cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn-primary-hero {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #EAB308;
  color: #fff;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(234,179,8,0.3);
}

.btn-primary-hero:hover {
  background: #CA8A04;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(234,179,8,0.35);
}

.btn-outline-hero {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--border);
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.btn-outline-hero:hover {
  border-color: #EAB308;
  color: #CA8A04;
  background: rgba(234,179,8,0.04);
}

.hero-stats {
  display: flex;
  gap: 32px;
}

.hero-stat {
  display: flex;
  flex-direction: column;
}

.hero-stat-num {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.hero-stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
}

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-visual {
  position: relative;
  width: 380px;
  height: 380px;
}

.visual-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--bg-card);
  border-radius: 14px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  animation: float 6s ease-in-out infinite;
}

.visual-card strong {
  font-size: 1.15rem;
  font-weight: 800;
  display: block;
  color: var(--text-primary);
}

.visual-card span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.vc-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.vc-1 { top: 20px; left: 0; animation-delay: 0s; }
.vc-2 { top: 40px; right: 0; animation-delay: 1.5s; }
.vc-3 { bottom: 60px; left: 20px; animation-delay: 3s; }
.vc-4 { bottom: 20px; right: 20px; animation-delay: 4.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s ease-in-out infinite;
  color: var(--text-muted);
  opacity: 0.5;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 768px) {
  .hero { min-height: 78vh; }
  .hero h1 { font-size: 1.85rem; }
  .hero-desc { font-size: 0.95rem; }
  .hero-content { padding: 80px 20px 60px; }
  .hero-badge { font-size: 0.72rem; padding: 6px 14px; }
  .orb-1 { width: 350px; height: 350px; top: -120px; right: -100px; }
  .orb-2 { width: 250px; height: 250px; bottom: -80px; left: -80px; }
  .orb-3 { display: none; }
  .orb-4 { display: none; }
}
</style>
