<template>
<NoiseFilter/>
     <NavBar/>
     <LandingPageComp/>
    <main>
      <router-view/>
      
    </main>
    <Footer/>
  
</template>



<script>
import NavBar from '@/components/NavbarComp.vue'
import NoiseFilter from '@/components/NoiseFilter.vue';
import LandingPageComp from './components/LandingPageComp.vue';
import Footer from '@/components/FooterComp.vue'

export default {
  
  components: {
    LandingPageComp,
    NavBar,
    NoiseFilter,
    Footer,
    
  }
}
</script>

<style src="./assets/css/styles.css">
</style>

