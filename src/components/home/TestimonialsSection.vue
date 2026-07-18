<template>
  <section class="section testimonials-section">
    <div class="container">
      <div style="text-align: center;" v-reveal>
        <span class="section-label yellow">{{ t('testimonials.label') }}</span>
      </div>
      <h2 class="section-title" v-reveal>{{ t('testimonials.title') }}</h2>
      <p class="section-subtitle" v-reveal>{{ t('testimonials.subtitle') }}</p>
      <div class="testimonials-grid">
        <div v-for="(item, i) in testimonials" :key="i" class="testimonial-card card" v-reveal :class="'reveal-delay-' + (i + 1)">
          <svg class="quote-mark" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" opacity="0.08"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p class="testi-text">{{ item.text }}</p>
          <div class="testi-author">
            <div class="author-avatar" :style="{ background: item.bg }">{{ item.initials }}</div>
            <div>
              <strong>{{ item.name }}</strong>
              <span>{{ item.role }}</span>
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
  name: 'TestimonialsSection',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      testimonials: [
        { text: 'Kehadiran Sukamaju Hub memberikan energi baru bagi lingkungan. Pemuda menjadi lebih aktif, kreatif, dan mampu berkolaborasi dengan masyarakat.', name: 'Bapak Ahmad', role: 'Tokoh Masyarakat', initials: 'BA', bg: 'linear-gradient(135deg, #DC2626, #B91C1C)' },
        { text: 'Saya belajar banyak mengenai kepemimpinan, kerja sama tim, dan pengabdian kepada masyarakat. Sukamaju Hub menjadi tempat terbaik untuk berkembang.', name: 'Siti Rahma', role: 'Anggota Karang Taruna', initials: 'SR', bg: 'linear-gradient(135deg, #EAB308, #CA8A04)' }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.testimonial-card {
  padding: 32px;
  position: relative;
}

.quote-mark {
  color: var(--primary);
  margin-bottom: 14px;
}

.testi-text {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
}

.testi-author strong {
  display: block;
  font-size: 0.9rem;
}

.testi-author span {
  font-size: 0.78rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .testimonials-grid { grid-template-columns: 1fr; }
}
</style>
