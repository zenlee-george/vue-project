<template>
    <div class="card-div">
      <div :class="['box', cardStyle]">
        <div class="imgBx">
          <slot name="img"></slot>
        </div>
        <div :class="['content', cardStyle]">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardComp",
    props: {
      styleType: {
        type: String,
        default: 'default'
      }
  },
    computed: {
      cardStyle() {
        return this.styleType;
      }
      
    }
  }
  </script>
  
  
  <style scoped>
  
  /* cards */
  
  @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
  
  
  
  .card-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 380px;
      padding: 0 0 !important;
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
      height: 292px;
      padding: 8px;
      box-sizing: border-box;
      overflow: hidden;
  }
  
  .box .imgBx img {
      max-width: 100%;
      opacity: 0.5;
      transition: 0.5s;
      overflow: hidden !important;
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
      filter: blur(20px);
      
  }
  
      
      .box .content {
          /* position: ; */
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
          margin-top: 140px;
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
      /* padding-bottom: 10px;  not working */
  }
  
  .box .content {
      font-size: 14px;
      color: #fff;
      font-weight: 200;
      line-height: 20px;
      letter-spacing: 2px;
  }
  
  
  
  
  /* about */
  
  .box:hover.about-style {
      height: 550px !important;
  }
  
  .box.about-style::before,
  .box.about-style::after {
      background: linear-gradient(235deg, green, black, orangered) !important;
      
  }
  
  /* projects */
  .box:hover.projects-style {
      height: 450px !important;
  }
  
  .box .content.projects-style {
          margin-top: 250px !important;
      }
  
  .box.projects-style::before,
  .box.projects-style::after {
      background: linear-gradient(235deg, orangered, #010615, green) !important;
  }
  
  
  /* testimonials */
  .box:hover.test-style {
      height: 650px !important;
  }
  
  .box .content.test-style {
          margin-top: 40px !important;
      }
  
  .box.test-style::before,
  .box.test-style::after {
      background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
  }
  
  
  /* @media (max-width:400px) {
    
  } */
  
  @media (max-width: 330px) {
      .box {
          /* height: 230px; */
          width: 230px;
          height: 230px;
      }
  
      
      .box .content h2 {
          font-size: 16px;
      }
      
      .box .content h2 span {
          font-size: 12px;
      }
  
      .profileBox {
          height: 230px !important;
      }
  
      .profile {
          height: 230px;
      }
  
      /* about */
  
  .box:hover.about-style {
      height: 520px !important;
  }
  
  .box .content.about-style {
          margin-top: 30px !important;
      }
  
  /* projects */
  .box:hover.projects-style {
      height: 400px !important;
  }
  
  .box .content.projects-style {
          margin-top: 150px !important;
      }
  
  /* testimonials */
  .box:hover.test-style {
      height: 650px !important;
  }
  
  .box .content.test-style {
          margin-top: -110px !important;
          font-size: 12px;
      }
  
   
  
  }
  
  
  .card-enter {
    animation: fallIn 0.5s ease forwards;
  }
  
  @keyframes fallIn {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  </style>