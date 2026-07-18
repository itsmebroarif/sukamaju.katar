<template>
  <div class="tentang-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <span class="section-label blue" v-reveal>{{ t('tentang.pageLabel') }}</span>
        <h1 class="page-title" v-reveal>{{ t('tentang.pageTitle') }}</h1>
        <p class="page-subtitle" v-reveal>{{ t('tentang.pageSubtitle') }}</p>
      </div>
    </section>

    <!-- Sejarah -->
    <section class="section">
      <div class="container">
        <div class="story-grid">
          <div class="story-content" v-reveal>
            <h2>{{ t('tentang.sejarah.title') }}</h2>
            <p>{{ t('tentang.sejarah.p1') }}</p>
            <p>{{ t('tentang.sejarah.p2') }}</p>
            <p>{{ t('tentang.sejarah.p3') }}</p>
          </div>
          <div class="story-visual" v-reveal>
            <div class="story-card">
              <div class="story-year">2026</div>
              <div class="story-detail">
                <h4>Tahun Berdiri</h4>
                <p>Kelurahan Cilodong, Kecamatan Sukamaju</p>
              </div>
            </div>
            <div class="story-card">
              <div class="story-motto">Together We Grow, Together We Inspire.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visi Misi -->
    <section class="section" style="background: var(--bg-card);">
      <div class="container">
        <h2 class="section-title" v-reveal>{{ t('tentang.visiTitle') }}</h2>
        <p class="section-subtitle" v-reveal>Panduan dan arah organisasi dalam mewujudkan pemuda yang aktif, kreatif, dan berdaya guna.</p>
        <div class="visi-misi-grid">
          <div class="visi-card card" v-reveal>
            <div class="vm-icon" style="background: rgba(234, 179, 8, 0.12); color: var(--secondary-dark);">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3>{{ t('tentang.visiTitle') }}</h3>
            <p>{{ t('tentang.visiText') }}</p>
          </div>
          <div class="misi-card card reveal-delay-2" v-reveal>
            <div class="vm-icon" style="background: rgba(220, 38, 38, 0.1); color: var(--primary);">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>{{ t('tentang.misiTitle') }}</h3>
            <ol class="misi-list">
              <li>{{ t('tentang.misi[0]') }}</li>
              <li>{{ t('tentang.misi[1]') }}</li>
              <li>{{ t('tentang.misi[2]') }}</li>
              <li>{{ t('tentang.misi[3]') }}</li>
              <li>{{ t('tentang.misi[4]') }}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Download SK -->
    <section class="section">
      <div class="container">
        <div class="sk-card card" v-reveal>
          <div class="sk-content">
            <div class="sk-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div>
              <h3>{{ t('tentang.skTitle') }}</h3>
              <p>{{ t('tentang.skDesc') }}</p>
            </div>
          </div>
          <a :href="skUrl" download class="btn btn-primary" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {{ t('tentang.skBtn') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Fokus Kegiatan -->
    <section class="section" style="background: var(--bg-card);">
      <div class="container">
        <h2 class="section-title" v-reveal>{{ t('tentang.fokusTitle') }}</h2>
        <p class="section-subtitle" v-reveal>Berbagai bidang kegiatan yang menjadi prioritas Sukamaju Hub dalam mengembangkan potensi pemuda.</p>
        <div class="focus-grid">
          <div v-for="(focus, i) in fokusKegiatan" :key="i" class="focus-card card" v-reveal :class="'reveal-delay-' + (i + 1)">
            <div class="focus-icon" :style="{ background: focus.bgColor }">
              <span v-html="focus.icon"></span>
            </div>
            <h4>{{ focus.title }}</h4>
            <p>{{ focus.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const skUrl = process.env.BASE_URL + 'SK_Katar_Super.pdf'

const fokusKegiatan = [
  { title: 'Kegiatan Sosial', desc: 'Program bakti sosial, santunan, donor darah, dan kepedulian terhadap warga yang membutuhkan.', bgColor: 'rgba(220, 38, 38, 0.1)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { title: 'Pendidikan', desc: 'Pelatihan keterampilan, literasi digital, workshop, dan program peningkatan kapasitas pemuda.', bgColor: 'rgba(37, 99, 235, 0.1)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
  { title: 'Olahraga', desc: 'Turnamen dan kegiatan olahraga bersama untuk menjaga kesehatan dan membangun kebersamaan.', bgColor: 'rgba(22, 163, 74, 0.1)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>' },
  { title: 'Seni Budaya', desc: 'Pelestarian dan pengembangan seni budaya lokal melalui pentas seni dan festival.', bgColor: 'rgba(234, 179, 8, 0.12)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EAB308" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>' },
  { title: 'Kewirausahaan', desc: 'Pengembangan UMKM, pelatihan kewirausahaan, dan pemberdayaan ekonomi pemuda.', bgColor: 'rgba(147, 51, 234, 0.1)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333EA" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>' },
  { title: 'Transformasi Digital', desc: 'Pemanfaatan teknologi untuk pelayanan, komunikasi, dan pengembangan organisasi.', bgColor: 'rgba(20, 184, 166, 0.1)', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' }
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

.story-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

.story-content h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.story-content p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 16px;
}

.story-visual {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.story-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-light);
}

.story-year {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.story-detail h4 {
  margin-top: 8px;
  margin-bottom: 4px;
}

.story-detail p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.story-motto {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  font-style: italic;
}

.visi-misi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.visi-card, .misi-card {
  padding: 40px;
}

.vm-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.visi-card h3, .misi-card h3 {
  font-size: 1.4rem;
  margin-bottom: 16px;
}

.visi-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.misi-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  counter-reset: misi;
}

.misi-list li {
  counter-increment: misi;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.misi-list li::before {
  content: counter(misi);
  width: 28px;
  height: 28px;
  border-radius: var(--radius-full);
  background: rgba(220, 38, 38, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.sk-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 40px;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.03), rgba(234, 179, 8, 0.03));
}

.sk-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.sk-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-lg);
  background: rgba(15, 157, 88, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sk-content h3 {
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.sk-content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 480px;
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.focus-card {
  padding: 32px;
  text-align: center;
}

.focus-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.focus-card h4 {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.focus-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title { font-size: 1.8rem; }
  .story-grid { grid-template-columns: 1fr; }
  .visi-misi-grid { grid-template-columns: 1fr; }
  .sk-card { flex-direction: column; text-align: center; gap: 20px; }
  .sk-content { flex-direction: column; }
  .focus-grid { grid-template-columns: 1fr; }
}
</style>
