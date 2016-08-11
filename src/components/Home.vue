<script>
  import ContactSection from './ContactSection.vue';

  export default {
    name: "Home",

    components: {
      ContactSection
    }
  }
</script>

<template>
  <div class="main-banner-wrapper">
    <div class="main-banner-info-wrapper">
      <div class="main-banner-info">
        <div class="banner-title">
          High-Value Secured
          Logistics and Distribution
        </div>
        <div class="banner-desc">
          Available warehouse services include <b>24-hour video monitoring, gated storage facilities, and armed guards after hours.</b>
        </div>
        <div class="banner-button">
          <button class="btn lg outline">Learn More</button>
        </div>
      </div>
      <div class="angled-bg-wrapper">
        <svg id="angledBg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 977 900">
          <style>
            .st0{fill:#A2D034;}
          </style>
          <path class="st0" d="M420.6 900H0V0h977z"/>
        </svg>
      </div>
    </div>
    <div class="bg-img-wrapper">
      <img class="bg-img" src="/imgs/warehouse-img-long.jpg" alt="warehouse" />
    </div>
  </div>
  <div class="about-section-wrapper">
    <div class="about-section">
      <div class="call-now-cta-wrapper">
        <div class="call-now-cta">
          <h4 class="cta-title">Contact Us Today!</h4>
          <a class="cta-phone" href="tel:9540000000">(954) 319-0000</a>
        </div>
      </div>
      <h2 class="about-title">
        About Us
      </h2>
      <p class="about-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
      <div class="about-btn">
        <button class="btn lg"> Learn More</button>
      </div>
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
        <button class="btn lg outline">Take a Tour</button>
      </div>
    </div>
  </div>
  <div class="services-section-wrapper">
    <div class="services-title-wrapper">
      <div class="circles-wrapper">
        <div class="small-circle circle-1"></div>
        <div class="small-circle circle-2"></div>
        <div class="small-circle circle-3"></div>
      </div>
      <h2 class="services-title">
        Services
      </h2>
      <div class="services-section">

        <div class="service-section-wrapper">
          <div class="service-content left-section">
            <h3 class="content-title">
              WMS – Storage, Distribution, and Processing
            </h3>
            <p class="content-text">
              At Carbel we offer distribution, storage and warehousing needs for businesses everywhere. As a state-of-the-art warehousing facility, we offer our customers convenience, flexibility, and cost-effective service.
            </p>
            <button class="btn" type="button" name="button">See More</button>
          </div>
          <div class="service-img-wrapper right-section">
            <img class="service-img" src="/imgs/storage.jpg" alt="" />
          </div>
          <div class="service-circle-indicator"></div>
        </div>

        <div class="service-section-wrapper">
          <div class="service-img-wrapper left-section">
            <img class="service-img" src="/imgs/transload.jpg" alt="" />
          </div>
          <div class="service-content right-section">
            <h3 class="content-title">
              Crossdock / Transload
            </h3>
            <p class="content-text">
              Improve the speed of your supply chain with Carbel Cross-Dock and Transload services. We specialize in providing quick and efficient Cross-Docking and Transloading services. Whether  you need inbound or outbound transportation modes, we can quickly unload, check and reship your products.
            </p>
            <button class="btn" type="button" name="button">See More</button>
          </div>
          <div class="service-circle-indicator"></div>
        </div>

        <div class="service-section-wrapper">
          <div class="service-content left-section">
            <h3 class="content-title">
              Supply Chain Management / PO Management
            </h3>
            <p class="content-text">
              When you outsource your logistics needs to a world-class company like Carbel, you gain an expert partner with a deep understanding of the complexities of supply chain management. We are seasoned professionals who take care of all aspects of the supply chain.
            </p>
            <button class="btn" type="button" name="button">See More</button>
          </div>
          <div class="service-img-wrapper right-section">
            <img class="service-img" src="/imgs/po-management.jpg" alt="" />
          </div>
          <div class="service-circle-indicator"></div>
        </div>

        <div class="service-section-wrapper">
          <div class="service-img-wrapper left-section">
            <img class="service-img" src="/imgs/inventory.jpg" alt="" />
          </div>
          <div class="service-content right-section">
            <h3 class="content-title">
              Inventory Control /Vendor Inventory Management

            </h3>
            <p class="content-text">
              Carbel offers specialized Vendor Inventory Management services, giving our international clients unparalleled flexibility to invest in US markets with minimal capital expenditure. We provide secure warehouse storage for your product and serve as an extension of your company to manage your inventory.
            </p>
            <button class="btn" type="button" name="button">See More</button>
          </div>
          <div class="service-circle-indicator"></div>
        </div>

        <div class="service-section-wrapper">
          <div class="service-content left-section">
            <h3 class="content-title">
              High-Value Secured Logistics and Distribution
            </h3>
            <p class="content-text">
              Clients with high-value merchandise, such as pharmaceuticals, designer apparel, electronics, and technology products, often have special concerns about the security risks associated with their cargo. Crime rings have long focused on the supply chain as a low-risk means of intercepting merchandise.
            </p>
            <button class="btn" type="button" name="button">See More</button>
          </div>
          <div class="service-img-wrapper right-section">
            <img class="service-img" src="/imgs/pick-pack.jpg" alt="" />
          </div>
          <div class="service-circle-indicator"></div>
        </div>

        <div class="services-timeline"></div>

      </div>
    </div>
  </div>
  <contact-section></contact-section>

</template>

<style lang="sass">
$desktop-sm: 1200px;
$tablet-lg: 1000px;
$tablet-md: 800px;
$mobile-lg: 640px;

 .main-banner-wrapper {
   height: calc(100vh - 100px);
   position: relative;
   overflow: hidden;
   margin-top: 100px;

   @media screen and (max-width: $tablet-lg) {
     background-color: rgba(162, 208, 52, 0.9);
   }

   .main-banner-info-wrapper {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      height: 100%;
      width: 60%;

      @media screen and (max-width: $tablet-lg) {
        width: 100%;
        text-align: center;
        align-items: flex-start;
        padding-top: 60px;
      }


      font-family: 'Source Sans Pro', sans-serif;
      color: #fff;


      .main-banner-info {
        width: 100%;
        max-width: 460px;
        margin-left: 20px;
        margin-right: 300px;

        @media screen and (max-width: $tablet-lg) {
          margin-left: auto;
          margin-right: auto;
          padding-left: 40px;
          padding-right: 40px;
        }

        .banner-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 40px;

        }
        .banner-desc {
          font-size: 18px;
          font-weight: 300;
          margin-bottom: 40px;
        }
        .banner-button {
          font-weight: 600;
        }
      }

      .angled-bg-wrapper {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        height: 100%;
        width: 300%;

        @media screen and (max-width: $tablet-lg) {
          opacity: 0;
        }

        #angledBg {
          width: 100%;
          opacity: 0.96;
        }
      }

   }
   .bg-img-wrapper {
    position: absolute;
    z-index: -2;
    left: 0;
    top: -160px;
    right: 0;
    bottom: 0;


     .bg-img {
       height: 100%;
       float: right;
     }
   }
 }
 .about-section-wrapper {
   display: flex;
   justify-content: center;

    .call-now-cta-wrapper {
      position: absolute;
      text-align: center;
      width: 100%;
      left: 0;
      top: -100px;

      .call-now-cta {
        .cta-title {
          font-size: 32px;
          color: #fff;
          margin-top: 0;
          margin-bottom: 6px;
        }
        .cta-phone {
          font-size: 22px;
          font-weight: bold;
          color: #a8cf3c;
          text-decoration: none;

          @media screen and (max-width: $tablet-lg) {
            color: #fff;
          }
        }
      }
    }

   .about-section {
     box-shadow: 0px 0px 107px -4px rgba(0, 0, 0, 0.61);
     background: #fff;

     max-width: 60%;
     position: relative;

     padding-top: 7%;
     padding-right: 7%;
     padding-bottom: 7%;
     padding-left: 7%;

     margin-top: -5%;
     margin-bottom: 140px;

    .about-title {
      font-size: 48px;
      color: #2baa46;

      margin-top: 0;

      @media screen and (max-width: $mobile-lg) {
        font-size: 32px;
        text-align: center;
      }
    }

    .about-desc {
      font-size: 18px;
      color: #6f6f6f;

      padding-left: 8%;

      @media screen and (max-width: $mobile-lg) {
        font-size: 16px;
        padding-left: 0;
      }
    }

    .about-btn {
      margin-top: 5%;
      float: right;

      @media screen and (max-width: $mobile-lg) {
        float: none;
        text-align: center;
      }

      .btn {
        background-color: #2baa46;
        font-size: 18px;
      }
    }
   }
 }
 .video-background-wrapper {
   background: rgba(2, 162, 36, 0.7);
   position: relative;
   overflow: hidden;
   border-top: 12px solid #efefef;
   border-bottom: 12px solid #efefef;

    .video-background {
      z-index: -3;
      position: absolute;
      opacity: 0.9;

      @media screen and (max-width: $mobile-lg) {
        margin-left: -35%;
        width: 170%;
      }
    }

    .video-section-content {
      margin-top: 220px;
      margin-bottom: 220px;
      text-align: center;
      color: #fff;

      @media screen and (max-width: $desktop-sm) {
        margin-top: 100px;
        margin-bottom: 100px;
      }

      @media screen and (max-width: $tablet-md) {
        margin-top: 60px;
        margin-bottom: 60px;
      }

      .content-title {
        text-transform: uppercase;
        font-size: 48px;
        font-weight: 300;

        @media screen and (max-width: $tablet-md) {
          font-size: 32px;
        }
      }
      .content-desc {
        max-width: 480px;
        margin-bottom: 40px;
        margin-right: auto;
        margin-left: auto;

      }
      .content-btn {
        .btn {
          font-size: 18px;
        }
      }
    }
 }
 .services-section-wrapper {
   padding-top: 60px;
   padding-bottom: 100px;
   background-color: #f4f4f4;

   .services-title-wrapper {

     .circles-wrapper {
       .small-circle {
         border-radius: 100%;
         background: #9dcd28;
         height: 20px;
         width: 20px;

         margin-top: 20px;
         margin-bottom: 20px;
         margin-right: auto;
         margin-left: auto;
       }

       .circle-1 {
         background-color: #e4ea9c;
       }

       .circle-2 {
         background-color: #9dcd28;
       }

       .circle-3 {
         background-color: #00a450;
       }
     }

     .services-title {
       margin-top: 80px;

       color: #656565;
       text-align: center;
       text-transform: uppercase;
       letter-spacing: 20px;
     }

    .services-section {
      position: relative;

      .services-timeline {
        width: 1px;
        background: #dcdcdc;
        position: absolute;
        height: 93%;
        top: 0;
        left: 50%;
        margin-left: -0.5px;

        @media screen and (max-width: $tablet-lg) {
          left: 44%;
        }

        @media screen and (max-width: $tablet-md) {
          left: 32%;
        }

        @media screen and (max-width: $mobile-lg) {
          display: none;
        }
      }

      .service-section-wrapper {
        position: relative;
        display: flex;

        max-width: 1200px;

        margin-left: auto;
        margin-right: auto;
        margin-top: 160px;
        margin-bottom: 160px;


        &:nth-last-child(2) {
          margin-bottom: 0px;
        }

        &:first-child {
          margin-top: 80px;
        }



        @media screen and (max-width: $mobile-lg) {
          flex-direction: column;
          text-align: center;
          margin-top: 100px;
          margin-bottom: 100px;
        }

        .service-circle-indicator {
          width: 20px;
          height: 20px;
          background: #2baa46;
          border-radius: 100%;
          left: 50%;
          top: 50%;
          z-index: 99;
          margin-top: -10px;
          margin-left: -10px;
          position: absolute;

          @media screen and (max-width: $tablet-lg) {
            left: 44%;
          }

          @media screen and (max-width: $tablet-md) {
            left: 32%;
            top: 18%;
          }

          @media screen and (max-width: $mobile-lg) {
            display: none;
          }
        }

        .right-section, .left-section {
          padding-right: 100px;
          padding-left: 100px;

          @media screen and (max-width: $tablet-lg) {
            padding-right: 60px;
            padding-left: 60px;
          }
        }

        .service-img-wrapper {
          display: flex;
          flex: 50%;
          align-items: center;

          @media screen and (max-width: $tablet-lg) {
            flex: 44%;
            order: 1;
          }

          @media screen and (max-width: $tablet-md) {
            flex: 20%;
            align-items: flex-start;
          }



          &.right-section {
            justify-content: flex-start;

            @media screen and (max-width: $tablet-md) {
              justify-content: flex-end;
            }

            @media screen and (max-width: $mobile-lg) {
              justify-content: center;
            }
          }
          &.left-section {
            justify-content: flex-end;

            @media screen and (max-width: $tablet-md) {
              justify-content: flex-end;
            }

            @media screen and (max-width: $mobile-lg) {
              justify-content: center;
            }
          }


          .service-img {
            border-radius: 100%;
            border: solid 40px #fff;
            width: 70%;
            height: 70%;

            @media screen and (max-width: $tablet-md) {
              border: solid 20px #fff;
              width: 80%;
            }

            @media screen and (max-width: $mobile-lg) {
              width: 60%;
              margin-bottom: 10px;
            }
          }
        }

        .service-content {
          display: flex;
          flex: 50%;
          flex-direction: column;
          justify-content: center;

          @media screen and (max-width: $tablet-lg) {
            flex: 62.5%;
            order: 2;
          }

          @media screen and (max-width: $tablet-md) {
            margin-top: 18px;
          }

          .content-title {
            color: #2baa46;
            margin-bottom: 50px;

            @media screen and (max-width: $mobile-lg) {
              margin-bottom: 20px;
            }
          }

          .content-text {
            margin-bottom: 60px;
          }

          .btn {
            background-color: #2baa46;
            width: 180px;
            font-size: 18px;

            @media screen and (max-width: $mobile-lg) {
              margin:0 auto;
            }
          }
        }
      }
    }
   }
 }

</style>
