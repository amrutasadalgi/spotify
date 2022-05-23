<template>
<v-app>
  <NavBar />
  <HeroPart />
  <why-spoty/>
  <FreeSpoty/>
  <GotQue/>
  <LetsPlay/>
  <FooterSpot/>
</v-app>
  
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeroPart from "./components/HeroPart.vue";
import WhySpoty from './components/WhySpoty.vue';
import FreeSpoty from "./components/FreeSpoty.vue";
import GotQue from "./components/GotQue.vue";
import LetsPlay from "./components/LetsPlay.vue";
import FooterSpot from './components/FooterSpot.vue';



export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { NavBar, HeroPart, WhySpoty, FreeSpoty, GotQue, LetsPlay,FooterSpot},
};
</script>
