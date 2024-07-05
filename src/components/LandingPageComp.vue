<template>
    <div
      class="section home luxy-el"
      data-speed-y="5"
      data-offset="-50"
      id="home"
    >
      <p class="home-social" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <a
          href="https://www.linkedin.com/in/zen-george-674a91317/"
          target="_blank"
        >Linkedin</a>
        <a href="https://github.com/zenlee-george" target="_blank">Github</a>
      </p>
      <p class="name" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        Portfolio of <br />
        Zen Lee <br />
        George
      </p>
      <p data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        Aspiring <br />
        Fullstack Developer
</p>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    name: 'HomeSection',
    mounted() {
      AOS.init({
        duration: 1200, 
        once: false, 
      });
    },
   
  };
  </script>
  
  <style scoped>
  .section.home {
    background: #111;
    background-attachment: fixed;
    color: #eeeeee;
    letter-spacing: 2px;
    font-size: 15px;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  
  .home-social {
  position: absolute;
  top: 10px;
  right: 60px;
}
a {
  color: #eeeeee;
}
.home-social a {
  text-decoration: none;
  color: #eeeeee;
  margin-left: 20px;
  display: inline-block;
  position: relative;
  font-family: "inter", sans-serif;
  font-weight: 200;
}
.home-social a::after {
  content: "";
  display: block;
  width: 0;
  height: 1px;
  bottom: 50%;
  position: absolute;
  background-color: #eeeeee;
  transition: 0.2s linear;
}
.home-social a:hover::after {
  width: 100%;
}
  
.name {
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: left;

  font-family: "inter", sans-serif;
  font-weight: 200;
}

.home p:last-of-type {
  display: inline-block;
  position: absolute;
  bottom: 10px;
  left: 10px;
  text-align: left;
  font-size: clamp(31px, 5vw, 90px);
  font-weight: bold;
}

  </style>