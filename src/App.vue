<template>
  <div id="app" :data-theme="theme">
    <Navbar :theme="theme" @toggle-theme="toggleTheme" />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
    <BackToTop />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'
import gsap from 'gsap'

export default {
  name: 'App',
  components: { Navbar, FooterSection, BackToTop },
  data() {
    return {
      theme: localStorage.getItem('theme') || 'light'
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme)
    },
    beforeEnter(el) {
      gsap.set(el, { opacity: 0, y: 40 })
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: done
      })
    }
  },
  watch: {
    theme(val) {
      document.documentElement.setAttribute('data-theme', val)
    }
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', this.theme)
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: var(--navbar-height);
}
</style>
