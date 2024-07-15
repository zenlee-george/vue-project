<template>
    <div class="container">
        <div class="row pt-5">
            <h2 class="project-heading headings">Projects</h2>
            <p class="subtext pt-5">Have a look at some of my projects...</p>
        </div>
        <div class="row d-flex justify-content-center">
                <Card v-for="project in projects " :key="project.name"  styleType="projects-style">
                    <template #img>
                            <img :src= project.image alt="project" loading="lazy">
                    </template>
                    <template #content>
                        <h5>{{ project.name }}</h5>
                        <p>{{ project.description }}</p>
                        <span>
                            <a :href= project.github target="_blank">
                                <i class="fa-brands fa-github fa-2xl"></i>
                            </a>
                            <a :href= project.vercel target="_blank">
                               <img src="https://raw.githubusercontent.com/caleb-okkers/vueportfolio/16b6a8e7e2fce2e455bce1cacb5b5e84dd6e413f/src/assets/vercel-logo-svgrepo-com.svg" alt="vercel" loading="lazy">
                            </a>
                        </span>
                    </template>
        
                </Card>
        </div>
    </div>
</template>
<script>
import Card from './Card.vue'

export default {
    name: "ProjectsSection",
    components: {
        Card
    },
    computed: {
        projects() {
          return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('getProjects')
    }
}
</script>
<style scoped>

    span img {
      width: 30px;
      border-radius: 50%;
    }

    span a i {
        color: #fff;
    }

    .card-div {
        width: 30%;
    }

    .box:hover {
        height: 400px !important;
    }

    /* cards */

@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');


.project-heading {
  color: #772aff;
  text-shadow: 2px 2px 4px #000, 5px 5px 70px #2196F3;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
}

.card-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 380px;
}

.box {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    background: #000;
    transition: 0.5s;
}


.box .imgBx {
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

.box::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;

}

.box::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(40px);

}


.box::before,
.box::after {
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}

.box:nth-child(2):before,
.box:nth-child(2):after {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
}

.box:nth-child(3):before,
.box:nth-child(3):after {
    background: linear-gradient(235deg, #772aff, #010615, #2196F3);
}

.box .content {
    bottom: 0;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 90px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    text-align: center;
    flex-direction: column;
    opacity: 0;
    transition: 0.5s;
    margin-top: 10px !important;
    padding-bottom: 10px;
}

.box:hover .content {
    opacity: 1;
    padding: 10px;
}

.box .content h5 {
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1px;
}

.box .content p {
    font-size: 14px;
    color: #fff;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 2px;
}

.box .content {
    font-size: 14px;
    color: #fff;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 2px;
}

.container {
    width: 100%;
}



</style>