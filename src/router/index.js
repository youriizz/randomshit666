import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Netflix from "@/components/Netflix/Netflix.vue";
import NotSimilar from "@/components/NotSimilar.vue";
import Similar from "@/components/Similar.vue";
import ILoveGaza from "@/components/ILoveGaza/ILoveGazaGallery.vue";
import InternationalThumbnail from "@/components/International/InternationalThumbnail.vue";
import International from "@/components/International/International.vue";
import Oval1 from '@/components/Oval/Oval1.vue';
import Oval2 from '@/components/Oval/Oval2.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/netflix",
      name: "netflix",
      component: Netflix,
    },
    {
      path: "/similar",
      name: "similar",
      component: Similar,
    },
    {
      path: "/notsimilar",
      name: "notsimilar",
      component: NotSimilar,
    },
    {
      path: "/ilovegaza",
      name: "ilovegaza",
      component: ILoveGaza,
    },
    {
      path: "/international",
      name: "international",
      component: International,
    },
    {
      path: "/oval",
      name: "oval",
      component: Oval1,
    },
    {
      path: "/oval2",
      name: "oval2",
      component: Oval2,
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
