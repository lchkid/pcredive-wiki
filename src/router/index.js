import Vue from 'vue'
import VueRouter from 'vue-router'

const Character = () => import('@/views/character/Character')
const Equipment = () => import('@/views/equipment/Equipment')
const NormalMap = () => import('@/views/map/NormalMap')
const HardMap = () => import('@/views/map/HardMap')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/character'
  },
  {
    path: '/character',
    name: 'character',
    component: Character
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: Equipment
  },
  {
    path: '/normal',
    name: 'normal',
    component: NormalMap
  },
  {
    path: '/hard',
    name: 'hard',
    component: HardMap
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
