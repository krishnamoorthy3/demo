<template>
  <div>
    <NavBar/>
    <MiddleComponent/>
    <section-content/>
    <section-three/>
    <price-plan/>
    <team-sec/>
    <latest-news/>
    <contact-us/>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import MiddleComponent from './components/MiddleCompo.vue';
import FooterBar from './components/FooterBar.vue';
import HeaderSection from '@/views/HeaderSection.vue';
import SectionContent from '@/views/SectionContent.vue';
import SectionThree from '@/views/SectionThree.vue';
import SectionFour from '@/views/SectionFour.vue';
import PricePlan from '@/views/PricePlan.vue';
import TeamSec from '@/views/TeamSec.vue';
import LatestNews from '@/views/LatestNews.vue';
import ContactUs from '@/views/ContactUs.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    MiddleComponent,
    FooterBar,
    HeaderSection,
    SectionContent,
    SectionThree,
    SectionFour,
    PricePlan,
    TeamSec,
    LatestNews,
    ContactUs,
  },
};
</script>

<style>
/* Add your global styles here */
</style>
