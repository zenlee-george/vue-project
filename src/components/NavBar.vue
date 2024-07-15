<template>
  <nav class="navbar">
   <ul class="navbar-nav">
     <li class="logo">
     <a href="#home" class="nav-link">
       <span class="link-text logo-text">Explore</span>
       <svg
         aria-hidden="true"
         focusable="false"
         data-prefix="fad"
         data-icon="angle-double-right"
         role="img"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 448 512"
         class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
       >
         <g class="fa-group">
           <path
             fill="currentColor"
             d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
             class="fa-secondary"
           ></path>
           <path
             fill="currentColor"
             d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
             class="fa-primary"
           ></path>
         </g>
       </svg>
     </a>
   </li>
     <li class="nav-item">
       <a href="#home" class="nav-link">
         <i class="fa-sharp fa-solid fa-house-chimney"></i>
         <span class="link-text">Home</span>
       </a>
     </li>
     <li class="nav-item">
       <a href="#about" class="nav-link">
         <i class="fa-sharp fa-solid fa-circle-info"></i>
         <span class="link-text">About</span>
       </a>
     </li>
     <li class="nav-item">
       <a href="#resume" class="nav-link">
         <i class="fa-sharp fa-solid fa-id-card"></i>
         <span class="link-text">Resume</span>
       </a>
     </li>
     <li class="nav-item">
       <a href="#skills" class="nav-link">
         <i class="fa-sharp fa-solid fa-horse-head"></i>
         <span class="link-text">Skills</span>
       </a>
     </li>
     <li class="nav-item">
       <a href="#projects" class="nav-link">
         <i class="fa fa-folder"></i>
         <span class="link-text">Projects</span>
       </a>
     </li>
     <li class="nav-item">
       <a href="#testimonials" class="nav-link">
         <i class="fa fa-user-circle"></i>
         <span class="link-text">Testimonials</span>
       </a>
     </li>
     <li class="nav-item">
       <a href="#contact" class="nav-link">
         <i class="fa-sharp fa-regular fa-paper-plane"></i>
         <span class="link-text">Contact</span>
       </a>
     </li>
   </ul>
  </nav>


</template>

<script>
export default {};
</script>


<style scoped>


.navbar {
width: 5rem;
height: 100vh;
position: fixed ;
background-color: #020202;
top: 0;
left: 0;
z-index: 11;
transition: width 200ms ease;
}

.navbar-nav {
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
}

.nav-item {
width: 100%;
}

.nav-item:last-child {
margin-top: auto;
}

.nav-link i {
/* min-width: 2rem; */
width: 2rem;
margin: 0 1.5rem;
color: #fff;
}

.nav-link i:hover {
color: orangered

}

.navbar:hover {
width: 16.5rem;
}

.navbar:hover .link-text {
display: block;
}

.navbar:hover .link-text:hover {
color: orangered
}

.nav-link:hover i,
.nav-link:hover .link-text {
color: orangered
}



.nav-link {
display: flex;
align-items: center;
height: 5rem;
color: var(--text-primary);
text-decoration: none;
/* filter: grayscale(100%) opacity(0.8); */
}



.nav-link {
color: #fff;
font-family: "JetBrains Mono", monospace;
font-optical-sizing: auto;
font-style: normal;
font-size: 1.3rem;
text-align: left;
/* margin-left: 2rem; */
display: flex;
align-items: center;
height: 5rem;

}

.link-text {
display: none;
/* margin-left: 1rem; */
color: #fff;
}

.logo {
font-weight: bold;
text-transform: uppercase;
text-align: center;
color: #fff;
background: #000;
font-size: 1.5rem;
letter-spacing: 0.3ch;
width: 50%;
}

.logo svg {
transform: rotate(0deg);
transition: 0.3s;
}

.logo-text
{
display: inline;
position: absolute;
left: -999px;
transition: 0.3s;
}

.navbar:hover .logo svg {
transform: rotate(-180deg);
color: rgb(21, 200, 200);
width: 35%;
}




.hometext {
font-size: 1.3rem;
font-family: "Orbitron", monospace;
font-optical-sizing: auto;
font-style: normal;
font-size: 2rem;
margin-left: 2rem;
}


@media only screen and (max-width: 600px) {
.navbar {
 bottom: 0;
 width: 100vw !important;
 height: 5rem;
 transition: height 200ms ease;
 margin: 0 auto;
 display: flex;
 justify-content: center;
}

.navbar:hover {
width: 100vw !important;
height: 5rem;
}

.logo {
 display: none;
}

.navbar-nav {
 flex-direction: row;
}

.nav-link {
 justify-content: center;
 flex-direction: column;

}

.link-text {
 font-size: 12px;
 display: none;
} 

.nav-link i {
 margin-left: 1.2rem; 
 margin-right: 1.2rem; 
 width: 1rem;
 
}

.navbar:hover .link-text {
display: none;
}

}

@media only screen and (max-width: 475px) {

.nav-link i {
 margin-left: 0.8rem; 
 margin-right: 0.8rem; 
 width: 1rem;
 
}
}
</style>

<!-- <template>

<nav class="navbar navbar-dark sticky-top custom-sticky">
 <div class="container-fluid">
   <a class="navbar-brand hometext" href="#home">CO.</a>
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
       <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
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
             <a class="nav-link" aria-current="page" href="#home"><i class="fa-sharp fa-solid fa-house-chimney"></i> Home</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#about"><i class="fa-sharp fa-solid fa-circle-info"></i> About</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#resume"><i class="fa-sharp fa-solid fa-id-card"></i> Resume</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#skills"><i class="fa-sharp fa-solid fa-horse-head"></i> Skills</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#projects"><i class="fa-solid fa-display"></i> Projects</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#testimonials"><i class="fa-solid fa-people-group"></i> Testimonials</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#contact"><i class="fa-sharp fa-regular fa-paper-plane"></i> Contact</a>
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
color: #fff;
font-family: "JetBrains Mono", monospace;
font-optical-sizing: auto;
font-style: normal;
font-size: 1.3rem;
text-align: left;
margin-left: 2rem;
margin-bottom: 1rem;
}

.navbar {
height: 10vh;
background: #000;
}

.offcanvas {
background: #000;
}

.hometext {
font-size: 1.3rem;
font-family: "Orbitron", monospace;
font-optical-sizing: auto;
font-style: normal;
font-size: 2rem;
margin-left: 2rem;
}

a:hover i,
a:hover {
color: rgb(21, 200, 200);
}

@media (max-width: 475px) {
.navbar {
 width: 100vw;
}

.container-fluid {
 width: 100%;
}

.nav-link {

font-size: 1rem;
margin-left: 1rem;
margin-bottom: 1rem;
}

.offcanvas {
max-width: 70vw;

}

.hometext {
font-size: 1.3rem;
margin-left: 1.3rem;
}

.ul {
width: 100%;
right: 0;
}

.navbar-toggler-icon {
width: 1em;
height: 1em;
}
}

.custom-sticky {
position: -webkit-sticky !important;
position: sticky !important;
top: 0 !important;
z-index: 11 !important; /* Ensures it appears above other elements */
}

</style>

-->