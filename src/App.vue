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
import NoiseFilter from '@/components/NoiseFilter.vue';
import Footer from '@/components/FooterComp.vue'

export default {
  
  components: {
    NavBar,
    NoiseFilter,
    Footer,
    
  }
}
</script>

<style src="./assets/css/styles.css">
</style>

