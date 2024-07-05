<template>
  <div class="container-fluid">
    <!-- <NavBar/> -->
    
      <section class="row" id="home">
        <LandingPageComp/>
      </section>
      <section class="row" id="about">
          <AboutComp :about="about" :hobbies="hobbies"/>
        
      </section>
      <section class="row" id="resume">
        <ResumeSection/>
      </section>
      <section class="row" id="skills">
        <SkillsSection/>
      </section>
      <section class="row" id="projects">
        <ProjectsSection/>
      </section>
      <section class="row" id="testimonials">
        <TestimonialsSection/>
      </section>
      <section class="row" id="contact">
        <ContactSection/>
      </section>
    
    <!-- <Footer/> -->
  </div>
</template>

<script>
import LandingPageComp from '@/components/LandingPageComp.vue';
import AboutComp from '@/components/AboutComp.vue'
// import ResumeSection from '@/components/ResumeSection.vue'
// import SkillsSection from '@/components/SkillsSection.vue'
// import ProjectsSection from '@/components/ProjectsSection.vue'
// import TestimonialsSection from '@/components/TestimonialsSection.vue'
// import ContactSection from '@/components/ContactSection.vue'

export default {
  
  components: {
    LandingPageComp,
    AboutComp,
    // ResumeSection,
    // SkillsSection,
    // ProjectsSection,
    // TestimonialsSection,
    // ContactSection
  }
}
</script>

<style>
</style>