<template>
  <section class="section about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-left" v-reveal>
          <span class="section-label yellow">{{ t('about.label') }}</span>
          <h2 class="about-title">{{ t('about.title') }}</h2>
          <p class="about-text">
            {{ t('about.description1') }}
          </p>
          <p class="about-text">
            {{ t('about.description2') }}
          </p>
          <div class="about-checks">
            <div class="check-item">
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>{{ t('about.checks.social') }}</span>
            </div>
            <div class="check-item">
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>{{ t('about.checks.entrepreneurship') }}</span>
            </div>
            <div class="check-item">
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>{{ t('about.checks.digital') }}</span>
            </div>
          </div>
          <router-link to="/tentang" class="btn btn-primary" style="margin-top: 28px;">
            {{ t('about.cta') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </router-link>
        </div>
        <div class="about-right reveal-delay-2" v-reveal>
          <div class="about-cards">
            <div class="mini-card mc-1">
              <div class="mc-icon" style="background: rgba(220,38,38,0.08); color: var(--primary);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              </div>
              <div><strong>50+</strong><span>{{ t('about.stats.members') }}</span></div>
            </div>
            <div class="mini-card mc-2">
              <div class="mc-icon" style="background: rgba(234,179,8,0.1); color: var(--secondary-dark);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div><strong>20+</strong><span>{{ t('about.stats.programs') }}</span></div>
            </div>
            <div class="mini-card mc-3">
              <div class="mc-icon" style="background: rgba(37,99,235,0.08); color: var(--accent);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <div><strong>15+</strong><span>{{ t('about.stats.collaborations') }}</span></div>
            </div>
            <div class="mini-card mc-4">
              <div class="mc-icon" style="background: rgba(22,163,74,0.08); color: var(--success);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div><strong>500+</strong><span>{{ t('about.stats.hours') }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'AboutSection',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.about-title {
  font-size: 2rem;
  margin: 14px 0;
  letter-spacing: -0.02em;
}

.about-text {
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.about-checks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 0.92rem;
}

.check-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(220,38,38,0.08);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.about-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.mini-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.mini-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-1px);
}

.mc-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mini-card strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
}

.mini-card span {
  font-size: 0.78rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-right { order: -1; }
  .about-cards { grid-template-columns: 1fr 1fr; gap: 10px; }
}

@media (max-width: 480px) {
  .about-cards { grid-template-columns: 1fr; }
}
</style>
