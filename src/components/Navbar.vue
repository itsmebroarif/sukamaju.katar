<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, open: menuOpen }">
    <div class="container navbar-inner">
      <router-link to="/" class="navbar-brand" @click="menuOpen = false">
        <img src="/logo.png" :alt="t('nav.brandTag')" class="brand-logo" />
        <div class="brand-text">
          <span class="brand-name">{{ t('nav.brandName') }}</span>
          <span class="brand-tag">{{ t('nav.brandTag') }}</span>
        </div>
      </router-link>

      <div class="navbar-backdrop" :class="{ open: menuOpen }" @click="menuOpen = false"></div>
      <div class="navbar-links" :class="{ open: menuOpen }">
        <router-link to="/" class="nav-link" @click="menuOpen = false"
          >{{ t('nav.home') }}</router-link
        >
        <router-link to="/tentang" class="nav-link" @click="menuOpen = false"
          >{{ t('nav.about') }}</router-link
        >
        <router-link to="/kegiatan" class="nav-link" @click="menuOpen = false"
          >{{ t('nav.activities') }}</router-link
        >
        <router-link to="/galeri" class="nav-link" @click="menuOpen = false"
          >{{ t('nav.gallery') }}</router-link
        >
        <router-link to="/divisi" class="nav-link" @click="menuOpen = false"
          >{{ t('nav.divisions') }}</router-link
        >
        <router-link to="/kontak" class="nav-link" @click="menuOpen = false"
          >{{ t('nav.contact') }}</router-link
        >
        <router-link
          to="/daftar"
          class="btn btn-primary btn-nav"
          @click="menuOpen = false"
          >{{ t('nav.join') }}</router-link
        >
      </div>

      <div class="navbar-actions">
        <button class="lang-toggle" @click="toggleLang" :title="currentLocale === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'">
          {{ currentLocale === 'id' ? 'EN' : 'ID' }}
        </button>
        <button
          class="theme-toggle"
          @click="$emit('toggle-theme')"
          :title="theme === 'light' ? 'Mode Gelap' : 'Mode Terang'"
        >
          <svg
            v-if="theme === 'light'"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg
            v-else
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>
        <button
          class="hamburger"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const currentLocale = ref(locale.value)
const toggleLang = () => {
  currentLocale.value = currentLocale.value === 'id' ? 'en' : 'id'
  locale.value = currentLocale.value
}

defineProps({ theme: String })
defineEmits(['toggle-theme'])

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

watch(menuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  z-index: 1000;
  transition: var(--transition);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 var(--border-light);
}

[data-theme="dark"] .navbar.scrolled {
  background: rgba(15, 23, 42, 0.92);
  box-shadow: 0 1px 0 var(--border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.brand-logo {
  width: 38px;
  height: 38px;
  object-fit: contain;
  border-radius: 4px;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.brand-tag {
  font-size: 0.65rem;
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-link {
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--border-light);
}

.nav-link.router-link-exact-active {
  color: var(--primary);
  background: rgba(220, 38, 38, 0.06);
  font-weight: 600;
}

.btn-nav {
  padding: 9px 20px;
  font-size: 0.85rem;
  margin-left: 8px;
  border-radius: var(--radius-sm);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.navbar-backdrop {
  display: none;
}

.theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--text-secondary);
  transition: var(--transition-fast);
}

.theme-toggle:hover {
  color: var(--text-primary);
  background: var(--border-light);
}

.lang-toggle {
  width: auto;
  padding: 0 12px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--text-secondary);
  transition: var(--transition-fast);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.lang-toggle:hover {
  color: var(--text-primary);
  background: var(--border-light);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
}

.hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition-fast);
  margin: 0 auto;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 900px) {
  .navbar-backdrop {
    display: block;
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 998;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .navbar-backdrop.open {
    opacity: 1;
    visibility: visible;
  }

  .hamburger {
    display: flex;
  }

  .navbar-links {
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background: var(--bg-main);
    padding: 20px;
    gap: 4px;
    transform: translateX(100%);
    transition: var(--transition);
    z-index: 999;
    align-items: stretch;
    overflow-y: auto;
  }

  .navbar-links.open {
    transform: translateX(0);
  }

  .nav-link {
    padding: 14px 16px;
    font-size: 0.95rem;
    border-radius: var(--radius-sm);
  }

  .btn-nav {
    margin-left: 0;
    margin-top: 12px;
    justify-content: center;
    padding: 13px 20px;
  }

  .brand-name {
    font-size: 0.92rem;
  }

  .brand-tag {
    font-size: 0.58rem;
  }

  .brand-logo {
    width: 32px;
    height: 32px;
  }
}
</style>
