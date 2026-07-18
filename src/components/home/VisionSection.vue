<template>
  <section class="section vision-section">
    <div class="container">
      <div class="vision-grid">
        <div class="vision-card card" v-reveal>
          <div class="vi" style="background: rgba(234,179,8,0.1); color: var(--secondary-dark);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          </div>
          <h3>{{ t('vision.title') }}</h3>
          <p>{{ t('vision.text') }}</p>
        </div>
        <div class="vision-card card reveal-delay-2" v-reveal>
          <div class="vi" style="background: rgba(220,38,38,0.08); color: var(--primary);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <h3>{{ t('mission.title') }}</h3>
          <ul class="mission-list">
            <li v-for="(item, i) in missionItems" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const missionItems = computed(() => [
  t('mission.items.1'),
  t('mission.items.2'),
  t('mission.items.3'),
  t('mission.items.4'),
  t('mission.items.5')
])
</script>

<style scoped>
.vision-section {
  background: linear-gradient(180deg, var(--bg-main) 0%, rgba(234,179,8,0.03) 100%);
}

.vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.vision-card {
  padding: 36px;
}

.vi {
  width: 48px;
  height: 48px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.vision-card h3 {
  font-size: 1.25rem;
  margin-bottom: 14px;
}

.vision-card > p {
  color: var(--text-secondary);
  line-height: 1.75;
  font-size: 0.95rem;
}

.mission-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mission-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.92rem;
}

.mission-list li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  flex-shrink: 0;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .vision-grid { grid-template-columns: 1fr; }
}
</style>
