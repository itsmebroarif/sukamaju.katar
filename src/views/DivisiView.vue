<template>
  <div class="divisi-page">
    <section class="page-header">
      <div class="container">
        <span class="section-label blue" v-reveal>{{ t('divisi.pageLabel') }}</span>
        <h1 class="page-title" v-reveal>{{ t('divisi.pageTitle') }}</h1>
        <p class="page-subtitle" v-reveal>{{ t('divisi.pageSubtitle') }}</p>
      </div>
    </section>

    <!-- Pembina -->
    <section class="section">
      <div class="container">
        <h2 class="section-title" v-reveal>{{ t('divisi.pembinaTitle') }}</h2>
        <p class="section-subtitle" v-reveal>{{ t('divisi.pembinaSubtitle') }}</p>
        <div class="pembina-grid">
          <div v-for="(group, i) in pembinaGroups" :key="i" class="pembina-card card" v-reveal :class="'reveal-delay-' + (i + 1)">
            <h3 class="pembina-title">{{ group.division }}</h3>
            <div class="pembina-members">
              <div v-for="(member, j) in group.members" :key="j" class="pembina-member">
                <div class="pembina-avatar" :style="{ background: pembinaColors[i] }">
                  {{ getInitials(member.name) }}
                </div>
                <div class="pembina-info">
                  <span class="pembina-name">{{ member.name }}</span>
                  <span class="pembina-role">{{ member.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pengurus Harian -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title" v-reveal>{{ t('divisi.pengurusTitle') }}</h2>
        <p class="section-subtitle" v-reveal>{{ t('divisi.pengurusSubtitle') }}</p>
        <div class="pengurus-grid">
          <div v-for="(member, i) in pengurusHarian" :key="i" class="pengurus-card card" v-reveal :class="'reveal-delay-' + (i + 1)">
            <div class="pengurus-avatar" :style="{ background: pengurusColors[i] }">
              {{ getInitials(member.name) }}
            </div>
            <h3>{{ member.name }}</h3>
            <span class="pengurus-role" :style="{ color: roleColors[i] }">{{ member.role }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Divisi / Bidang -->
    <section class="section">
      <div class="container">
        <h2 class="section-title" v-reveal>{{ t('divisi.bidangTitle') }}</h2>
        <p class="section-subtitle" v-reveal>{{ t('divisi.bidangSubtitle') }}</p>
        <div class="bidang-grid">
          <div v-for="(divisi, i) in data.divisions" :key="i" class="bidang-card card" v-reveal :class="'reveal-delay-' + ((i % 3) + 1)">
            <div class="bidang-header">
              <div class="bidang-icon" :style="{ background: bidangColors[i % bidangColors.length] }">
                <span>{{ i + 1 }}</span>
              </div>
              <div class="bidang-meta">
                <h3>{{ shortenBidang(divisi.name) }}</h3>
                <span class="bidang-count">{{ divisi.members.length }} Anggota</span>
              </div>
            </div>
            <div class="bidang-members">
              <div v-for="(member, j) in divisi.members" :key="j" class="bidang-member">
                <span class="member-name">{{ member.name }}</span>
                <span class="member-role">{{ member.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MPKT -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title" v-reveal>{{ data.advisory_board.name }}</h2>
        <p class="section-subtitle" v-reveal>{{ t('divisi.mpktSubtitle') }}</p>
        <div class="mpkt-grid">
          <div v-for="(member, i) in data.advisory_board.members" :key="i" class="mpkt-card card" v-reveal :class="'reveal-delay-' + ((i % 3) + 1)">
            <div class="mpkt-avatar">
              {{ getInitials(member.name) }}
            </div>
            <h4>{{ member.name }}</h4>
            <span class="mpkt-role">{{ member.role }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Prestasi -->
    <section class="section">
      <div class="container">
        <h2 class="section-title" v-reveal>{{ t('divisi.prestasiTitle') }}</h2>
        <p class="section-subtitle" v-reveal>{{ t('divisi.prestasiSubtitle') }}</p>
        <div class="timeline">
          <div v-for="(item, i) in prestasi" :key="i" class="timeline-item" v-reveal :class="'reveal-delay-' + (i + 1)">
            <div class="timeline-dot" :style="{ background: item.color }"></div>
            <div class="timeline-content card">
              <span class="timeline-year">{{ item.year }}</span>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
              <span class="timeline-level">{{ item.level }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import divisionData from '@/data/division.json'

const { t } = useI18n()

const data = divisionData

const pembinaColors = ['linear-gradient(135deg, #DC2626, #B91C1C)', 'linear-gradient(135deg, #2563EB, #1D4ED8)']
const pengurusColors = [
  'linear-gradient(135deg, #F59E0B, #D97706)',
  'linear-gradient(135deg, #10B981, #059669)',
  'linear-gradient(135deg, #3B82F6, #2563EB)',
  'linear-gradient(135deg, #8B5CF6, #7C3AED)',
  'linear-gradient(135deg, #EF4444, #DC2626)',
  'linear-gradient(135deg, #EC4899, #DB2777)'
]
const roleColors = ['#D97706', '#059669', '#2563EB', '#7C3AED', '#DC2626', '#DB2777']
const bidangColors = [
  'rgba(220, 38, 38, 0.1)',
  'rgba(37, 99, 235, 0.1)',
  'rgba(16, 185, 129, 0.1)',
  'rgba(245, 158, 11, 0.1)',
  'rgba(139, 92, 246, 0.1)',
  'rgba(236, 72, 153, 0.1)',
  'rgba(6, 182, 212, 0.1)',
  'rgba(249, 115, 22, 0.1)'
]
const prestasi = [
  { year: '2026', title: 'Pembentukan & Pelantikan Pengurus', desc: 'Pembentukan resmi dan pelantikan pengurus pertama karang taruna.', level: 'Kelurahan', color: 'var(--secondary)' },
  { year: '2026', title: 'Festival Pemuda Sukamaju Perdana', desc: 'Penyelenggaraan festival tahunan pertama dengan partisipasi aktif masyarakat.', level: 'Kelurahan', color: 'var(--primary)' }
]

const pembinaGroups = data.leadership.filter(l => l.division !== 'Pengurus Harian')
const pengurusHarian = data.leadership.find(l => l.division === 'Pengurus Harian')?.members || []

function getInitials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function shortenBidang(name) {
  const prefix = 'Bidang '
  if (name.startsWith(prefix)) return name.slice(prefix.length)
  return name
}
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

.section-alt {
  background: var(--bg-card);
}

/* Pembina */
.pembina-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.pembina-card {
  padding: 28px;
}

.pembina-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-light);
}

.pembina-members {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.pembina-member {
  display: flex;
  align-items: center;
  gap: 14px;
}

.pembina-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.pembina-info {
  display: flex;
  flex-direction: column;
}

.pembina-name {
  font-weight: 600;
  font-size: 0.95rem;
}

.pembina-role {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Pengurus Harian */
.pengurus-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.pengurus-card {
  padding: 32px 24px;
  text-align: center;
}

.pengurus-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0 auto 14px;
}

.pengurus-card h3 {
  font-size: 1.05rem;
  margin-bottom: 4px;
}

.pengurus-role {
  font-size: 0.85rem;
  font-weight: 600;
}

/* Bidang */
.bidang-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.bidang-card {
  padding: 24px;
  grid-column: span 2;
}

.bidang-card:nth-child(n+7) {
  grid-column: span 3;
}

.bidang-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-light);
}

.bidang-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  color: var(--text-primary);
  flex-shrink: 0;
}

.bidang-meta h3 {
  font-size: 1rem;
  margin-bottom: 2px;
}

.bidang-count {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.bidang-members {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bidang-member {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--bg-main);
  border-radius: var(--radius);
}

.member-name {
  font-size: 0.9rem;
  font-weight: 500;
}

.member-role {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* MPKT */
.mpkt-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.mpkt-card {
  padding: 24px;
  text-align: center;
}

.mpkt-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--bg-main);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0 auto 12px;
}

.mpkt-card h4 {
  font-size: 0.95rem;
  margin-bottom: 2px;
}

.mpkt-role {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Timeline */
.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-dot {
  position: absolute;
  left: -33px;
  top: 28px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid var(--bg-main);
}

.timeline-content {
  padding: 24px;
}

.timeline-year {
  display: inline-block;
  padding: 3px 12px;
  border-radius: var(--radius-full);
  background: rgba(15, 157, 88, 0.1);
  color: var(--secondary);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.timeline-content h4 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.timeline-content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 8px;
}

.timeline-level {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 768px) {
  .page-title { font-size: 1.75rem; }
  .pembina-grid { grid-template-columns: 1fr; }
  .pengurus-grid { grid-template-columns: repeat(2, 1fr); }
  .bidang-grid { grid-template-columns: 1fr; }
  .bidang-card { grid-column: span 1; }
  .bidang-card:nth-child(n+7) { grid-column: span 1; }
  .mpkt-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .page-title { font-size: 1.45rem; }
  .pengurus-grid { grid-template-columns: 1fr; }
  .mpkt-grid { grid-template-columns: 1fr; }
}
</style>
