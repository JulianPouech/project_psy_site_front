import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import LoginView from '@/views/LoginView.vue'
import AccountView from '@/views/AccountView.vue'
import DashBoardView from '@/views/Admin/DashBoardView.vue'
import SginInView from '@/views/SginInView.vue'
import PatientsView from '@/views/Admin/PatientsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/sing-in',
      name: 'sing-in',
      component: SginInView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: DashBoardView,
    },
    {
      path: '/admin/patients',
      name: 'admin-patient',
      component: PatientsView
    }
  ],
})

export default router
