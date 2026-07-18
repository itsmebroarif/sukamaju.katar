<template>
  <div class="galeri-page">
    <section class="page-header">
      <div class="container">
        <span class="section-label yellow" v-reveal>{{ t('galeri.pageLabel') }}</span>
        <h1 class="page-title" v-reveal>{{ t('galeri.pageTitle') }}</h1>
        <p class="page-subtitle" v-reveal>{{ t('galeri.pageSubtitle') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filter-tabs" v-reveal>
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="filter-tab"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >{{ tab.label }}</button>
        </div>

        <div class="gallery-grid">
          <div
            v-for="(item, i) in filteredGallery"
            :key="i"
            class="gallery-item"
            v-reveal
            :class="item.size"
            @click="openLightbox(i)"
          >
            <div class="gallery-placeholder" :style="{ background: item.bg }">
              <div class="gallery-icon">
                <span v-html="item.icon"></span>
              </div>
            </div>
            <div class="gallery-overlay">
              <h4>{{ item.title }}</h4>
              <p>{{ item.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <transition name="modal">
      <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <button class="lightbox-nav prev" @click="prevImage">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="lightbox-content">
          <div class="lightbox-placeholder" :style="{ background: currentImage.bg }">
            <div class="gallery-icon large">
              <span v-html="currentImage.icon"></span>
            </div>
          </div>
          <div class="lightbox-info">
            <h3>{{ currentImage.title }}</h3>
            <p>{{ currentImage.category }}</p>
          </div>
        </div>
        <button class="lightbox-nav next" @click="nextImage">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { t } = useI18n()

const activeTab = ref('all')
const lightboxOpen = ref(false)
const currentIndex = ref(0)

const tabs = [
  { id: 'all', label: t('galeri.filter.all') },
  { id: 'sosial', label: t('galeri.filter.sosial') },
  { id: 'olahraga', label: t('galeri.filter.olahraga') },
  { id: 'pelatihan', label: 'Pelatihan' },
  { id: 'festival', label: 'Festival' },
  { id: 'organisasi', label: 'Organisasi' }
]

const gallery = [
  { title: 'Gotong Royong', category: 'sosial', bg: 'linear-gradient(135deg, #0F9D58, #34A853)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>', size: 'large' },
  { title: 'Bakti Sosial', category: 'sosial', bg: 'linear-gradient(135deg, #E53935, #EF5350)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { title: 'Turnamen Futsal', category: 'olahraga', bg: 'linear-gradient(135deg, #42A5F5, #64B5F6)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>' },
  { title: 'Pelatihan Desain', category: 'pelatihan', bg: 'linear-gradient(135deg, #7B1FA2, #AB47BC)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', size: 'large' },
  { title: 'Festival Pemuda', category: 'festival', bg: 'linear-gradient(135deg, #F4B400, #FFD54F)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
  { title: 'Musyawarah', category: 'organisasi', bg: 'linear-gradient(135deg, #1F2937, #374151)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { title: 'Donor Darah', category: 'sosial', bg: 'linear-gradient(135deg, #C62828, #E53935)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { title: 'Bazar UMKM', category: 'festival', bg: 'linear-gradient(135deg, #E65100, #FB8C00)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>' },
  { title: 'Lomba Kemerdekaan', category: 'olahraga', bg: 'linear-gradient(135deg, #00695C, #26A69A)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><path d="M6 9l6 6 6-6"/></svg>', size: 'large' },
  { title: 'Pelatihan Content Creator', category: 'pelatihan', bg: 'linear-gradient(135deg, #283593, #5C6BC0)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>' },
  { title: 'Dokumentasi UMKM', category: 'organisasi', bg: 'linear-gradient(135deg, #4E342E, #795548)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' },
  { title: 'Volly Ball', category: 'olahraga', bg: 'linear-gradient(135deg, #0277BD, #4FC3F7)', icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>' }
]

const filteredGallery = computed(() => {
  if (activeTab.value === 'all') return gallery
  return gallery.filter(item => item.category === activeTab.value)
})

const currentImage = computed(() => {
  return filteredGallery.value[currentIndex.value] || gallery[0]
})

function openLightbox(index) {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % filteredGallery.value.length
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + filteredGallery.value.length) % filteredGallery.value.length
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

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 10px 24px;
  border-radius: var(--radius-full);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9rem;
  border: 1px solid var(--border);
  transition: var(--transition-fast);
}

.filter-tab:hover {
  border-color: var(--secondary);
  color: var(--secondary);
}

.filter-tab.active {
  background: var(--secondary);
  color: #fff;
  border-color: var(--secondary);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;
  transition: var(--transition);
}

.gallery-item:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-lg);
}

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-icon {
  opacity: 0.8;
}

.gallery-icon.large svg {
  width: 64px;
  height: 64px;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px 20px 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: #fff;
  transform: translateY(100%);
  transition: var(--transition);
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h4 {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 4px;
}

.gallery-overlay p {
  font-size: 0.8rem;
  opacity: 0.8;
  text-transform: capitalize;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-nav.prev { left: 24px; }
.lightbox-nav.next { right: 24px; }

.lightbox-content {
  max-width: 700px;
  width: 90%;
}

.lightbox-placeholder {
  border-radius: var(--radius-lg);
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-info {
  text-align: center;
  margin-top: 20px;
  color: #fff;
}

.lightbox-info h3 {
  color: #fff;
  margin-bottom: 6px;
}

.lightbox-info p {
  opacity: 0.7;
  text-transform: capitalize;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .page-title { font-size: 1.8rem; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-item.large { grid-column: span 2; grid-row: span 1; }
}
</style>
