import { createRouter, createWebHistory } from 'vue-router';
import InsuranceView from '../views/insurance/insurance.vue'

const routes = [
  {
    path: '/insurance',
    name: 'Insurance',
    component: InsuranceView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
    console.log(to, from, next)
});

export default router;
