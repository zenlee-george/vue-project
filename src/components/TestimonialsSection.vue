<template>
    <div class="container">
        <div class="row pt-5">
            <h2 class="test-heading headings">Testimonials</h2>
            <p class="subtext pt-5">What people have to say...</p>
        </div>
        <div class="row d-flex justify-content-center">
                <Card v-for="test in testimonials " :key="test.name" styleType="test-style">
                    <template #img>
                        <img :src= test.image alt="colleague" loading="lazy">
                    </template>
                    <template #content>
                        <h5>{{ test.name }}</h5>
                        <small>{{ test.position }}</small>
                        <p class="pt-3">{{ test.message }}</p>
                    </template>
        
                </Card>
        </div>
    </div>
</template>
<script>
import Card from './Card.vue'

export default {
    name: "TestimonialsSection",
    components: {
        Card
    },
    computed: {
        testimonials() {
          return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('getTestimonials')
    }
}
</script>

<style scoped>

    /* cards */

@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

.container {
    width: 100% !important;
}

.test-heading {
  color: #89ff00;
  text-shadow: 2px 2px 4px #000, 5px 5px 70px #00bcd4;
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

.box:nth-child(1):hover,
.box:nth-child(2):hover,
.box:nth-child(3):hover {
    height: 520px;
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
    background: linear-gradient(235deg, #B8860B, #050505, #B8860B);
    
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


@media (max-width: 330px) {
    .box {
        height: 230px;
    }

    .box:hover {
        height: 330px;
    }

    .box .content h5 {
        font-size: 16px;
    }

    .box .content h5 span {
        font-size: 12px;
    }


}
</style>