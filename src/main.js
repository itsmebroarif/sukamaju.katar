import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/global.css'
import gsap from 'gsap'
import i18n from './i18n'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)

app.directive('reveal', {
  mounted(el, binding) {
    const delay = binding.value || 0
    gsap.set(el, { opacity: 0, y: 30 })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.6, delay: delay * 0.1, ease: 'power2.out' })
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
  }
})

app.mount('#app')
