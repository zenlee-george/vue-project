<template>
    <div class="footer">
      <p class="copyright">Designed and developed by Zen Lee George &copy; {{ cYear }}. All rights reserved.</p>
      <div class="profiles">
        <a href="https://github.com/zenlee-george" target="_blank"
          ><i class="fab fa-github fa-s"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/zen-george-674a91317/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in fa-s"></i
        ></a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear()
      }
    }
  }
  </script>

  <style scoped>
  .footer {
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 10px 60px 10px 5.5%;
  color: #eeeeee;
  background: #111;
  font-family: "inter", sans-serif;
  font-weight: 200;
}
.copyright {
  padding-left: 10px;
  font-size: clamp(10px, 5vw, 14px);
  flex: 1;
  text-align: left;
}
.profiles {
  display: flex;
}
.profiles i {
  margin-left: 20px;
}

/* Media Queries */
@media (max-width: 480px) {
  .footer {
    padding: 10px 10px 10px 10px; 
  }
  .copyright {
    font-size: clamp(6px, 2vw, 10px); 
  }
}

</style>