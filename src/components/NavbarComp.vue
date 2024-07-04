<template>
  <div>
    <div :class="['nav-container', { 'show-menu': showMenu }]">
      <div :class="['nav', { 'show-menu': showMenu }]">
        <a href="#home" :class="{ active: activeSection === 'home' }" @click="navigate('home')">Home</a>
      </div>
      <div :class="['nav', { 'show-menu': showMenu }]">
        <a href="#about" @click="navigate('about')">About Me</a>
      </div>
      <div :class="['nav', { 'show-menu': showMenu }]">
        <a href="#work" @click="navigate('work')">Education & Experience</a>
      </div>
      <div :class="['nav', { 'show-menu': showMenu }]">
        <a href="#projects" @click="navigate('projects')">Projects</a>
      </div>
      <div :class="['nav', { 'show-menu': showMenu }]">
        <a href="#testimonials" @click="navigate('testimonials')">Testimonials</a>
      </div>
      <div :class="['nav', { 'show-menu': showMenu }]">
        <a href="#contact" @click="navigate('contact')">Contact</a>
      </div>
    </div>
    <button @click="toggleMenu" :class="['navbutton', { 'show-menu': showMenu }]">
      <span class="bar bar-top" :class="{ move: showMenu }"></span>
      <span class="bar bar-middle" :class="{ move: showMenu }"></span>
      <span class="bar bar-bottom" :class="{ move: showMenu }"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'home',
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    navigate(section) {
      this.activeSection = section;
      this.showMenu = false;
    }
  }
};
</script>

<style scoped>
.nav-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  left: -100vw;
  background: rgba(0, 0, 0, 0.5);
  transition: 1s ease;
}

.nav {
  height: calc(100vh / 6);
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav a {
  font-size: clamp(30px, 5vw, 50px);
  margin-right: 35px;
  font-weight: 200;
  text-decoration: none;
  color: #eeeeee;
  display: inline-block;
  position: relative;
}
.nav a::after {
  content: "";
  display: block;
  bottom: 50%;
  width: 0;
  height: 1px;
  background: #eeeeee;
  position: absolute;
  transition: 0.3s linear;
}

.nav a:hover::after {
  width: 100%;
}

.nav:nth-of-type(1) {
  background: #181818;
  transform: translateX(-100vw);
  transition: 1s 0.1s ease;
}
.nav:nth-of-type(2) {
  background: #1f1f1f;
  transform: translateX(-100vw);
  transition: 1s 0.2s ease;
}
.nav:nth-of-type(3) {
  background: #262626;
  transform: translateX(-100vw);
  transition: 1s 0.3s ease;
}
.nav:nth-of-type(4) {
  background: #2b2b2b;
  transform: translateX(-100vw);
  transition: 1s 0.4s ease;
}
.nav:nth-of-type(5) {
  background: #2e2e2e;
  transform: translateX(-100vw);
  transition: 1s 0.5s ease;
}
.nav:nth-of-type(6) {
  background: #333333;
  transform: translateX(-100vw);
  transition: 1s 0.6s ease;
}

.nav:nth-of-type(1).show-menu {
  transform: translateX(0);
  transition: 1s 0.2s ease;
}
.nav:nth-of-type(2).show-menu {
  transform: translateX(0);
  transition: 1s 0.4s ease;
}
.nav:nth-of-type(3).show-menu {
  transform: translateX(0);
  transition: 1s 0.6s ease;
}
.nav:nth-of-type(4).show-menu {
  transform: translateX(0);
  transition: 1s 0.8s ease;
}
.nav:nth-of-type(5).show-menu {
  transform: translateX(0);
  transition: 1s 1s ease;
}
.nav:nth-of-type(6).show-menu {
  transform: translateX(0);
  transition: 1s 1.2s ease;
}
.nav-container.show-menu {
  left: 0;
  transition: 1s ease;
}
.navbutton {
  background: rgba(0, 0, 0, 0.5);
  mix-blend-mode: difference;
  position: fixed;
  z-index: 9999;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s ease;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 28px;
  width: 40px;
}

.navbutton.show-menu {
  opacity: 0;
  z-index: -1;
}

.bar {
  background: white;
  mix-blend-mode: difference;
  height: 1px;
}

.bar-top {
  width: 25px;
}

.bar-top.move {
  animation: barMove 0.8s linear infinite;
}

.bar-middle {
  width: 20px;
}

.bar-middle.move {
  animation: barMove 0.8s 0.1s ease infinite;
}

.bar-bottom {
  width: 15px;
}

.bar-bottom.move {
  animation: barMove 0.8s 0.2s linear infinite;
}

@keyframes barMove {
  from {
    width: 25px;
  }
  to {
    width: 10px;
  }
}
</style>
