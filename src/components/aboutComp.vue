<template>
    <div>
      <h1>About Me</h1>
      <p v-if="aboutMe">{{ aboutMe }}</p>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      aboutMe() {
        return this.$store.state.aboutMe
      }
    },
    mounted() {
        this.$store.dispatch('fetchPortfolio')
    }
  }
  </script>