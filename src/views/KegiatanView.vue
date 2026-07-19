<template>
  <div class="kegiatan-page">
    <section class="page-header">
      <div class="container">
        <span class="section-label red" v-reveal>{{ t('kegiatan.pageLabel') }}</span>
        <h1 class="page-title" v-reveal>{{ t('kegiatan.pageTitle') }}</h1>
        <p class="page-subtitle" v-reveal>{{ t('kegiatan.pageSubtitle') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="programs-list">
          <div v-for="(program, i) in programs" :key="i" class="program-item card" v-reveal :class="'reveal-delay-' + ((i % 4) + 1)">
            <div class="program-header">
              <div class="program-icon" :style="{ background: program.bgColor }">
                <span v-html="program.icon"></span>
              </div>
              <div>
                <h3>{{ program.title }}</h3>
                <div class="program-meta">
                  <span class="program-schedule">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {{ program.schedule }}
                  </span>
                  <span class="program-tag" :style="{ background: program.tagBg, color: program.tagColor }">{{ program.tag }}</span>
                </div>
              </div>
            </div>
            <p class="program-desc">{{ program.description }}</p>
            <div class="program-highlights">
              <div v-for="(highlight, j) in program.highlights" :key="j" class="highlight-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ highlight }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="section" style="background: var(--bg-card);">
      <div class="container">
        <h2 class="section-title" v-reveal>{{ t('kegiatan.upcomingTitle') }}</h2>
        <p class="section-subtitle" v-reveal>Agenda kegiatan yang akan datang dan dapat diikuti oleh seluruh anggota serta masyarakat.</p>
        <div class="events-grid">
          <div v-for="(event, i) in upcomingEvents" :key="i" class="event-card card" v-reveal :class="'reveal-delay-' + (i + 1)">
            <div class="event-date">
              <span class="event-day">{{ event.day }}</span>
              <span class="event-month">{{ event.month }}</span>
            </div>
            <div class="event-info">
              <h4>{{ event.title }}</h4>
              <p>{{ event.desc }}</p>
              <div class="event-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ event.location }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const programs = [
  {
    title: 'Jumat Bersih',
    description: 'Program gotong royong membersihkan lingkungan, fasilitas umum, taman, dan tempat ibadah bersama masyarakat. Kegiatan ini menjadi simbol kebersamaan dan kepedulian terhadap kebersihan lingkungan.',
    schedule: 'Minggu pertama setiap bulan',
    tag: ' Rutin',
    tagBg: 'rgba(220, 38, 38, 0.1)',
    tagColor: '#DC2626',
    bgColor: 'rgba(220, 38, 38, 0.1)',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>',
    highlights: ['Gotong royong bersama masyarakat', 'Pembersihan fasilitas umum', 'Perawatan taman dan ruang publik']
  },
  {
    title: 'Sukamaju Berbagi',
    description: 'Bakti sosial berupa santunan, pembagian sembako, donor darah, dan bantuan kepada warga yang membutuhkan. Menghadirkan kepedulian nyata bagi sesama.',
    schedule: 'Menyesuaikan agenda sosial',
    tag: 'Sosial',
    tagBg: 'rgba(234, 179, 8, 0.12)',
    tagColor: '#EAB308',
    bgColor: 'rgba(234, 179, 8, 0.12)',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EAB308" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    highlights: ['Santunan dan pembagian sembako', 'Donor darah', 'Bantuan warga kurang mampu']
  },
  {
    title: 'Pelatihan Pemuda Digital',
    description: 'Pelatihan desain grafis, pemrograman, literasi digital, content creator, dan kewirausahaan berbasis teknologi. Mempersiapkan pemuda menghadapi era digital.',
    schedule: 'Setiap Triwulan',
    tag: 'Pelatihan',
    tagBg: 'rgba(37, 99, 235, 0.1)',
    tagColor: '#2563EB',
    bgColor: 'rgba(37, 99, 235, 0.1)',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    highlights: ['Desain grafis & pemrograman', 'Literasi digital', 'Content creator & kewirausahaan']
  },
  {
    title: 'Festival Pemuda Sukamaju',
    description: 'Festival tahunan yang menghadirkan lomba olahraga, pentas seni, bazar UMKM, dan hiburan masyarakat. Puncak kegiatan tahunan Sukamaju Hub.',
    schedule: 'Setiap Tahun',
    tag: 'Tahunan',
    tagBg: 'rgba(22, 163, 74, 0.1)',
    tagColor: '#16A34A',
    bgColor: 'rgba(22, 163, 74, 0.1)',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4B400" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    highlights: ['Lomba olahraga', 'Pentas seni budaya', 'Bazar UMKM & hiburan']
  }
]
const upcomingEvents = [
  { day: '15', month: 'Agu', title: 'Jumat Bersih Agustus', desc: 'Gotong royong membersihkan lingkungan sekitarKelurahan Cilodong.', location: 'Kelurahan Cilodong' },
  { day: '20', month: 'Agu', title: 'Pelatihan Desain Grafis', desc: 'Workshop desain grafis menggunakan Canva untuk pemuda.', location: 'Aula Kelurahan' },
  { day: '17', month: 'Agu', title: 'Festival Kemerdekaan', desc: 'Lomba dan pentas seni dalam rangka HUT RI.', location: 'Lapangan Utama' }
]
</script>

<style scoped>
.page-header {
  padding: 120px 0 56px;
  text-align: center;
  background: var(--bg-main);
  border-bottom: 1px solid var(--border-light);
}

.page-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin: 14px 0;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

.programs-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.program-item {
  padding: 36px;
}

.program-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 16px;
}

.program-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.program-header h3 {
  font-size: 1.3rem;
  margin-bottom: 6px;
}

.program-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.program-schedule {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.program-tag {
  padding: 3px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
}

.program-desc {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 20px;
}

.program-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  background: var(--bg-main);
  padding: 8px 16px;
  border-radius: var(--radius-full);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.event-card {
  display: flex;
  gap: 20px;
  padding: 28px;
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--secondary), var(--accent));
  color: #fff;
  flex-shrink: 0;
}

.event-day {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}

.event-month {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.event-info h4 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.event-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 8px;
}

.event-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .page-title { font-size: 1.75rem; }
  .events-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .page-title { font-size: 1.45rem; }
}
</style>
