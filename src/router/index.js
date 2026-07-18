import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tentang',
    name: 'tentang',
    component: () => import('../views/TentangView.vue')
  },
  {
    path: '/kegiatan',
    name: 'kegiatan',
    component: () => import('../views/KegiatanView.vue')
  },
  {
    path: '/galeri',
    name: 'galeri',
    component: () => import('../views/GaleriView.vue')
  },
  {
    path: '/divisi',
    name: 'divisi',
    component: () => import('../views/DivisiView.vue')
  },
  {
    path: '/kontak',
    name: 'kontak',
    component: () => import('../views/KontakView.vue')
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: () => import('../views/DaftarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
