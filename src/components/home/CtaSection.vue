<template>
  <section class="cta-section">
    <div class="cta-bg"></div>
    <div class="container cta-content">
      <h2 v-reveal>{{ t('cta.title') }}</h2>
      <p v-reveal>{{ t('cta.description') }}</p>
      <div class="cta-btns" v-reveal>
        <router-link to="/daftar" class="btn btn-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
          {{ t('cta.join') }}
        </router-link>
        <router-link to="/galeri" class="btn btn-ghost">{{ t('cta.viewAll') }}</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'CtaSection',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 88px 0;
  text-align: center;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(150deg, #B91C1C, #DC2626, #EAB308);
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-content h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}

.cta-content p {
  font-size: 1rem;
  color: rgba(255,255,255,0.82);
  max-width: 500px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

.cta-btns {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cta-content h2 { font-size: 1.75rem; }
}

@media (max-width: 480px) {
  .cta-content h2 { font-size: 1.45rem; }
}
</style>
