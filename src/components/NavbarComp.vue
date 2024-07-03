<template lang="html">
    <nav class="navbar navbar-dark sticky-top" style="background-color: #333;">
      <div class="container-fluid">
        <a class="navbar-brand hometext" href="#" style="color: #000;">ZL</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end nav"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" style="color: #000;"></h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#home" style="color: #000;">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" style="color: #000;">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#resume" style="color: #000;">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills" style="color: #000;">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects" style="color: #000;">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials" style="color: #000;">Testimonials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" style="color: #000;">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .nav-link {
    color: #000;
  }
  .nav-link:hover {
    color: #fff;
  }
  </style>