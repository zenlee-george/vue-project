<template>
    <div class="container">
        <div class="row pt-5">
            <h2 class="skills-heading headings">Skills</h2>
            <p class="subtext pt-5">"This is my skill set"</p>
        </div>
        <div class="row d-flex justify-content-center pt-5">
            
            <div class="col-md-4 col-sm-12 mb-4 d-flex justify-content-center">
                <div class="tech skill-divs">
                    <h4 class="pb-4">Development Arsenal</h4>
                    <p>These are the technologies i am proficient in. With these in my aresenal, I'm able to build functional websites.</p>
                    <p v-for="tech in skills" :key="tech.name"><img :src=tech.icon alt="logo" loading="lazy" class="stack"> {{ tech.name }}</p>
                </div>
                <div class="line-container">
        <div class="line"></div>
    </div>

            </div>
            <div class="col-md-4 col-sm-12 mb-4 d-flex justify-content-center">
                <div class="line-container">
    </div>

                <div class="soft skill-divs">
                    <h4 class="pb-4">Soft Skills</h4>
                    <p>Techincal expertise can only take you so far so i have these "soft" skills. I continue to hone these skills daily.</p>
                    <p v-for="skill in softSkills" :key="skill.name">{{ skill.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SkillsSection",
    computed: {
        skills() {
            return this.$store.state.skills
        },
        designSkills() {
            return this.$store.state.designSkills
        },
        softSkills() {
            return this.$store.state.softSkills
        }
    },
    mounted() {
        this.$store.dispatch('getSkills'),
        this.$store.dispatch('getDesignSkills')
        this.$store.dispatch('getSoftSkills')
    }
}
</script>
<style scoped>

.subtext {
    text-align: center;
}

.stack {
    width: 40px;
    border: none;
    border-radius: 0;
}

.container {
    flex-wrap: wrap;
}

.skill-divs::before,
.skill-divs::after {
    background: linear-gradient(235deg, #ff0000, #050505, #ff6a00);
}

.skills-heading {
    color: orangered;
    text-shadow: 2px 2px 4px #000, 5px 5px 70px yellow;
}

    .row {
        width: 85%;
        margin: 0 auto;
    }
    
    img {
      width: 40px;
      border-radius: 50%;
      border: 2px solid #fff;
    }

     i {
  margin-right: 10px;
  font-size: 40px;
}

    p, h4 {
        text-align: left;
    }

    h4 {
    color: #fff;
    font-family: "JetBrains Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 1.5rem;
    }
    
    .soft {
        padding-left: 24px;
    }
        
    /* line */

    .line-container {
    position: relative;
    width: 8px;
    height: 100vh;
    overflow: hidden;
}

.line {
    position: absolute;
    top: 0;
    width: 100%;
    height: 80vh;
    background: linear-gradient(to bottom,orangered, green);
    animation: moveDown 3s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}

@keyframes moveDown {
    0%, 100% {
        top: 0;
    }
    50% {
        top: calc(100% - 8px); 
    }
}

@media (max-width: 475px) {
    .line-container {
        
        width: 4px;
    }

    .skill-divs {
        width: 100%;
    }

    .row.d-flex.justify-content-center .col-md-4 {
        margin-bottom: 20px; 
    }

    .design {
        padding-bottom: 3.5rem;
    }


}
</style>