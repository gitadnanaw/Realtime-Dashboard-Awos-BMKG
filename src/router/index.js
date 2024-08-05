import { createRouter, createWebHistory } from 'vue-router'
import RealtimeView from '../components/pages/RealtimeView.vue'
import MapsView from '../components/pages/MapsView.vue'
import Login from '../components/layouts/FormLog.vue'
import DashBoard from '../components/layouts/DashBoard.vue'
import ExportView from '../components/pages/ExportView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: (to, from, next) => {
      localStorage.removeItem('auth');
      next({ name: 'login' });
    }
  },
  {
    path: '/',
    name: 'dashboard',
    redirect: '/realtime',
    component: DashBoard,
    children: [
      {
        path: 'realtime',
        name: 'realtime',
        component: RealtimeView
      },
      {
        path: 'maps',
        name: 'maps',
        component: MapsView
      },
      {
        path: 'export',
        name: 'export',
        component: ExportView
      },
      
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((toRoute, fromRoute, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('auth'));
  if (toRoute.name !== "login" && !isAuthenticated) {
    next({ name: "login" });
  } else if (toRoute.name === "login" && isAuthenticated) {
    next({ name: "realtime" });
  } else {
    next();
  }
});

export default router
