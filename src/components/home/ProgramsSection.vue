<template>
  <section class="section programs-section">
    <div class="container">
      <div style="text-align: center;" v-reveal>
        <span class="section-label red">{{ t('programs.label') }}</span>
      </div>
      <h2 class="section-title" v-reveal>{{ t('programs.title') }}</h2>
      <p class="section-subtitle" v-reveal>{{ t('programs.subtitle') }}</p>
      <div class="programs-grid">
        <div v-for="(program, i) in programs" :key="i" class="program-card card card-hover" v-reveal :class="'reveal-delay-' + (i + 1)">
          <div class="program-icon" :style="{ background: program.bg }">
            <span v-html="program.icon"></span>
          </div>
          <h3>{{ program.title }}</h3>
          <p>{{ program.description }}</p>
          <div class="program-meta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {{ program.schedule }}
          </div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 40px;" v-reveal>
        <router-link to="/kegiatan" class="btn btn-outline">
          {{ t('programs.cta') }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'ProgramsSection',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      programs: [
        { title: 'Jumat Bersih', description: 'Gotong royong membersihkan lingkungan, fasilitas umum, taman, dan tempat ibadah bersama masyarakat.', schedule: 'Minggu pertama setiap bulan', bg: 'rgba(220,38,38,0.08)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>' },
        { title: 'Sukamaju Berbagi', description: 'Bakti sosial berupa santunan, pembagian sembako, donor darah, dan bantuan kepada warga yang membutuhkan.', schedule: 'Menyesuaikan agenda sosial', bg: 'rgba(234,179,8,0.1)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EAB308" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
        { title: 'Pelatihan Pemuda Digital', description: 'Pelatihan desain grafis, pemrograman, literasi digital, content creator, dan kewirausahaan berbasis teknologi.', schedule: 'Setiap Triwulan', bg: 'rgba(37,99,235,0.08)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
        { title: 'Festival Pemuda Sukamaju', description: 'Festival tahunan dengan lomba olahraga, pentas seni, bazar UMKM, dan hiburan masyarakat.', schedule: 'Setiap Tahun', bg: 'rgba(22,163,74,0.08)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' }
      ]
    }
  }
}
</script>

<style scoped>
.programs-section {
  background: var(--bg-card);
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.program-card {
  padding: 32px;
}

.program-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.program-card h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.program-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 14px;
  font-size: 0.92rem;
}

.program-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 768px) {
  .programs-grid { grid-template-columns: 1fr; }
}
</style>
