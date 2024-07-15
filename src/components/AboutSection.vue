<template>
  <div class="container">
    <div class="row pt-5" v-for="info in about" :key="info.name">
      <div class="col">
        <div class="info">
          <h2 class="about-heading headings">{{ info.name }}</h2>
          <p class="par">{{ info.text }}</p>
        </div>
      </div>
    </div>
    <div class="hobbies pt-5">
      <Card
        v-for="(hobby, index) in hobbies"
        :key="index"
        styleType="about-style">
        <template #img>
          <img :src="hobby.image" alt="hobby" loading="lazy">
        </template>
        <template #content>
          <h5>{{ hobby.name }}</h5>
          <p>{{ hobby.text }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: "AboutSection",
  components: {
    Card
  },
  computed: { 
    about() {
      return this.$store.state.aboutMe
    },
    hobbies() {
      return this.$store.state.hobbies
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe'),
    this.$store.dispatch('getHobbies')
  }
 
}
</script>
  
  <style>
 /* cards */

@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');



.about-heading {
  color: #ff005e;
  text-shadow: 2px 2px 4px #000, 5px 5px 70px rgba(251, 255, 0);
}

.hobbies {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
}

.box .imgBx img {
    max-width: 100%;
    opacity: 0.4;
    transition: 0.5s;
    overflow: hidden;
}

.box:hover .imgBx img {
    opacity: 1;
}

@media (max-width: 475px) {

    .headings {
        font-size: 2rem;
    }

}



  </style>