<script>
  import ContactSection from './ContactSection.vue';

  export default {
    name: "Warehouse",

    components: {
      ContactSection
    },

    data: function() {
      return {
        activeCameras: [
          {
            top: '55.4%',
            left: '30.2%',
            styles: 'top: 55.4%; left: 30.2%;',
            img: 'http://theia.us.com/image/applications/Warehouse1.jpg'
          },
          {
            top: '62.7%',
            left: '18.2%',
            styles: 'top: 62.7%; left: 18.2%;',
            img: 'http://theia.us.com/image/applications/Warehouse1.jpg'
          },
          {
            top: '13%',
            left: '31%',
            styles: 'top: 13%; left: 31%;',
            img: 'http://theia.us.com/image/applications/Warehouse1.jpg'
          },
          {
            top: '13%',
            left: '31%',
            styles: 'top: 72%; left: 58%;',
            img: 'http://theia.us.com/image/applications/Warehouse1.jpg'
          },
          {
            top: '13%',
            left: '31%',
            styles: 'top: 8%; left: 5.6%;',
            img: 'http://theia.us.com/image/applications/Warehouse1.jpg'
          }
        ]
      }
    },

    methods: {
      showImg: function(activeCamera) {
        console.log(activeCamera);
      },
      hidePreview: function() {
        document.getElementById('hoverImagePreview').className = "camera-1";

        setTimeout(function(){
          document.getElementById('hoverImagePreview').className = "";
        }, 1000);
      }
    }
  }
</script>

<template>
  <div class="page-header-wrapper warehouse-bg">
    <div class="header-content-wrapper ">
      <h1 class="content-title center">Our Warehouse</h1>
      <p class="content-text center">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div class="stat-boxes-wrapper">
      <div class="stat-box">
        <p class="stat-number">
          120
        </p>
        <p class="stat-title">
          Total Surveillance Cameras
        </p>
      </div>
      <div class="stat-box">
        <p class="stat-number">
          150,000
        </p>
        <p class="stat-title">
          Square Feet
        </p>
      </div>
      <div class="stat-box">
        <p class="stat-number">
          24
        </p>
        <p class="stat-title">
          Hour Security
        </p>
      </div>
    </div>
  </div>
  <div class="floating-section-wrapper">
    <div class="floating-section video-section">
      <video class="video-background" width="100.1%" controls="true">
        <source src="/warehouse-intro.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>
  </div>
  <div class="video-background-wrapper">
    <video class="video-background" width="100%" autoplay loop>
      <source src="/DJI_0003.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

    <div class="video-section-content">
      <h2 class="content-title">
        carbel llc <b>headquarters</b>
      </h2>
      <p class="content-desc">
        Contact us today to request a tour of our facilities, and receive your FREE consultation.
      </p>
      <div class="content-btn">
        <button class="btn lg outline">Request a Tour</button>
      </div>
    </div>
  </div>
  <div class="interactive-map-wrapper">
    <h2 class="section-title">Over 120 Security Cameras!</h2>
    <p>
      <em>Hover over green cameras to see Image Preview</em>
    </p>
    <div class="interactive-map">

      <div class="active-cameras">
        <div v-for="activeCamera in activeCameras" class="active-camera-wrapper" :style="activeCamera.styles"  >
          <div class="active-camera">
            <div class="hover-img-preview">
              <img :src="activeCamera.img" />
            </div>
            <img   class="green-camera-icon"  src="/imgs/green-camera-icon.svg" />
          </div>
        </div>
      </div>
      <img id="svgMap" src="/imgs/warehouse-blueprint.svg" />
    </div>
  </div>
  <div class="image-gallery-divider">
    <img src="/imgs/warehouse-img-3.jpg" />
    <img src="/imgs/warehouse-img-1.jpg" />
    <img src="/imgs/warehouse-img-5.jpg" />
    <img src="/imgs/warehouse-img-2.jpg" />
    <img src="/imgs/warehouse-img-7.jpg" />
    <img src="/imgs/warehouse-img-6.jpg" />
  </div>

  <contact-section></contact-section>
</template>

<style lang="sass">

$desktop-sm: 1200px;
$tablet-lg: 1000px;
$tablet-md: 800px;
$mobile-lg: 640px;


.page-header-wrapper {
    padding: 100px 20px;


    &.warehouse-bg {
      background: url("/imgs/warehouse-bg-green.jpg");
      background-position: center;
      background-size: cover;
      color: #fff;
    }

    &.green-bg {
      color: #fff;
      position: relative;

      &:after {
        background: url("/imgs/warehouse-bg-green.jpg");
        z-index: 99;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }
    }

    .content-title {
      font-size: 60px;
      margin-top: 60px;
      margin-bottom: 40px;
    }

    .content-text {
      width: 100%;
      max-width: 600px;
      font-weight: 100;
    }
}
.stat-boxes-wrapper {
  display: flex;
  justify-content: space-between;

  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;

  .stat-box {
    text-align: center;
    width: 33%;

    .stat-number {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 48px;
      font-weight: 800;
    }
  }
}

.image-gallery-divider {
  background: #e7e7e7;
  display: flex;
  overflow-x: scroll;

  img {
    height: 140px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

.interactive-map-wrapper {
  padding-top: 80px;
  padding-bottom: 80px;

  position: relative;
  text-align: center;

  .section-title {
    font-size: 38px;
    color: #2baa46;

    margin-top: 0;
    margin-bottom: 10px;

    @media screen and (max-width: $mobile-lg) {
      font-size: 32px;
    }
  }

  .interactive-map {
    position: relative;
    max-width: 60%;
    margin: 0 auto;

    #hoverImagePreview {
      position: absolute;

      height: 200px;
      width: 200px;

      border: solid 6px #2aaa4a;
      border-radius: 100%;

      overflow: hidden;

      opacity: 0;

      transform: scale(0.4);
      transition: all 600ms;

      &.camera-1 {
        top: 38%;
        left: 32%;
      }

      &.visable {
        opacity: 1;
        transform: scale(1);
      }

      img {
        width: 400px;
      }
    }

    .active-cameras {
      position: absolute;
      width: 100%;
      height: 100%;

      .active-camera-wrapper {
        position: absolute;
        width: 3.4%;

        .hover-img-preview {
          position: absolute;
          width: 40px;
          height: 40px;
          overflow: hidden;
          border-radius: 100%;
          border: #2baa46 solid 2px;
          left: 50%;
          margin-left: -13px;
          opacity: 0;
          transition: all 0.6s;

          &:hover {
            opacity: 1;
            transform: scale(5);
            z-index: 999999;
          }

          img {
            height: 100%;
          }
        }

        .green-camera-icon {
          width: 100%;
        }
      }
    }

    #svgMap {
      width: 100%;
    }
  }
}


</style>
