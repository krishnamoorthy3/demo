import { createRouter, createWebHistory } from 'vue-router';
import HeaderSection from '@/views/HeaderSection.vue';
import SectionContent from '@/views/SectionContent.vue';
import SectionThree from '@/views/SectionThree.vue';
import SectionFour from '@/views/SectionFour.vue';
import PricePlan from '@/views/PricePlan.vue';
import TeamSec from '@/views/TeamSec.vue';
import LatestNews from '@/views/LatestNews.vue';
import ContactUs from '@/views/ContactUs.vue';

const routes = [
  { path: '/', name: 'Home', component: HeaderSection },
  { path: '/sectioncontent', name: 'ABOUT', component: SectionContent },
  { path: '/sectionthree', name: 'Portfolio', component: SectionThree },
  { path: '/sectionfour', name: 'SERVICES', component: SectionFour },
  { path: '/priceplan', name: 'PRICING', component: PricePlan },
  { path: '/teamsec', name: 'TEAMS', component: TeamSec },
  { path: '/latestnews', name: 'BLOG', component: LatestNews },
  { path: '/contactus', name: 'CONTACT', component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
