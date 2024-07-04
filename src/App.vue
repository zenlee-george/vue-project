<template>
<NoiseFilter/>
     <NavBar/>
    <main>
      <router-view/>
      
    </main>
    <Footer/>
  
</template>



<script>
import NavBar from '@/components/NavbarComp.vue'
import Footer from '@/components/FooterComp.vue'
import NoiseFilter from '@/components/NoiseFilter.vue';

export default {
  
  components: {
    NavBar,
    Footer,
    NoiseFilter,
  }
}
</script>

<style src="./assets/css/styles.css">
</style>

