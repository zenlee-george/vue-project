<template>
    <div class="container d-flex justify-content-center align-items-center">
      <video autoplay loop muted playsinline class="video-background" id="bgVideo">
        <source src="https://videos.pexels.com/video-files/2297636/2297636-sd_640_360_30fps.mp4" type="video/mp4">
        Your browser does not support the video tag.
        
      </video>
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col d-flex justify-content-center">
          <div class="home-image">
            <img src="https://zenlee-george.github.io/hostedimages/zenleegeorge.jpg" alt="Zen George" loading="lazy">
          </div>
  
        </div>
        <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="content">
            <h1 class="text">Zen Lee George</h1>
            <h3 v-if="title" class="title">
              <span>{{ title }}</span>
            </h3>
            <Spinner v-else />
          </div>
          
        </div>
  
      </div>
  
    </div>
  
  </template>
  
  <script>
  import Spinner from '@/components/Spinner.vue'
  import { computed, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'HomeSection',
    components: {
      Spinner
    },
    setup() {
      const store = useStore()
      const jobTitle = computed(() => store.state.jobTitle)
      const title = ref('')
      const cnt = ref(0)
  
      function repeat() {
        try {
          if (cnt.value == jobTitle.value?.length) cnt.value = 0
          title.value = jobTitle.value?.at(cnt.value)?.title
          setTimeout(repeat, 1700)
          cnt.value++
        } catch (e) {
          // Handle error
        }
      }
  
      onMounted(() => {
        store.dispatch('getJobTitle')
        repeat()
      })
  
      return {
        title
      }
    }
  }
  
  
  </script>
  
  <style scoped>
  
  .video-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      transform: translateZ(-1px) scale(2);
  }
  
  #home {
      position: relative;
      
      min-height: 100vh;
      transform-style: preserve-3d;
      
  }
  
  #home::before {
      width: 100%;
      height: 100%;
      background-size: cover;
      
  }
  
  .row {
    width: 70%;
  }
  
  #home .content {
      position: absolute;
      text-align: center;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50vw;
  }
  
  
  #home .text {
      font-family: "Orbitron", monospace;
      font-optical-sizing: auto;
      font-style: normal;
      font-size: 4rem;
      text-shadow: 2px 2px 4px orangered, 5px 5px 70px rgba(255, 255, 255, 0.7);
      
  }
  
  #home .title {
      font-family: "JetBrains Mono", monospace;
      font-optical-sizing: auto;
      font-style: normal;
      font-size: 2rem;
      text-shadow: 2px 2px 2px orangered, 5px 5px 70px rgba(255, 255, 255, 0.7);
  }
  
  @keyframes easeIn {
      from {
        opacity: 0;
      }
    
      to {
        opacity: 1;
      }
    }
  
  
  
  #home .home-image img {
      width: 450px;
      height: auto;
      padding: 0px;
      opacity: 0.85;
      animation: easeIn 1s ease-out forwards;
      border-radius: 0px 20px;
  }
  
  
  
  .home-image {
      position: relative;
      width: 455px;
      height: 455px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      background: #000;
      box-sizing: border-box;
      z-index: 1;
      border-radius: 0px 20px;
  }
  
  .home-image::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: #fff;
      z-index: 0;
      border-radius: 0px 20px;
  }
  
  .home-image::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: #fff;
      z-index: -2;
      filter: blur(40px);
      border-radius: 0px 20px;
  
  }
  
  
  
  .home-image .profile img {
      max-width: 100%;
      transition: 0.5s;
      overflow: hidden;
  }
  
  .home-image::before,
  .home-image::after {
      background: linear-gradient(235deg, #000, #050505, orangered) !important;
  }
  
  
  @media (max-width: 475px) {
    
    #home .home-image img {
      width: 250px !important;
      height: 250px !important;
      
      padding: 0px;
      opacity: 0.85;
  }
  
  
  .home-image {
      position: relative;
      width: 252px !important;
      height: 252px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      background: #000;
      box-sizing: border-box;
      z-index: 1;
  }
  
  .content {
    width: 100%;
  }
  
  .row {
    width: 100%;
  }
  
  #home .text {
      font-size: 2rem !important;
      padding-top: 5rem;
      width: 100%;
      width: 80vw;
  }
  
  #home .title {
      font-size: 1.3rem !important;
      padding-top: 1rem;
      width: 80vw;
  }
  
  }
  
  @media (max-width: 800px) {
  
  
    #home .home-image img {
      width: 400px;
      height: 400px;
      padding: 0px;
      opacity: 0.85;
  }
  
  
  .home-image {
      position: relative;
      width: 402px;
      height: 402px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      background: #000;
      box-sizing: border-box;
      z-index: 1;
  }
  
  .content {
    width: 100%;
  }
  
  .row {
    width: 100%;
  }
  
  #home .text {
      font-size: 3rem;
      padding-top: 5rem;
      width: 100%;
      width: 80vw;
  }
  
  #home .title {
      font-size: 1.5rem;
      padding-top: 1rem;
      width: 80vw;
  }
  }
  
  </style>
  
  