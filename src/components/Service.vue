<script>
  import ContactSection from './ContactSection.vue';

  export default {
    name: "Service",

    components: {
      ContactSection
    },

    data: function() {
      return {
        bulletPoints: [
          {
            body: "Fully Staffed with Professionals"
          },
          {
            body: "Surveillance with over 120 Cameras & 24 hour security "
          },
          {
            body: "Central Alarm Security System"
          },
          {
            body: "Warehouse storage (Long and short term)"
          },
          {
            body: "Container packing and unloading services "
          },
          {
            body: "Fully Insured for optimum safety"
          },
          {
            body: "Order Fulfillment (distribution of products to stores and warehouses)"
          },
          {
            body: "Warehouse Management System (WMS)"
          }
        ],
        accordionItems: [
          {
            title: 'Order Fulfillment and Processing',
            body: 'Our system allows us to distribute as orders arrive, keeping stores well-stocked with your product, from electronics to clothing and just about any other consumer good. Tell us what you need, and we will automate your orders so you’re free to focus on the aspects of your business that need your attention. Here are Carbel we offer fully insured and secure warehousing.',
            isOpen: true,
            img: '/imgs/box-rack.svg'
          },
          {
            title: 'Storage and Packaging',
            body: 'Goods are stored in a secure, climate-controlled warehouse. We offer a variety of packaging services to meet your needs, including shrink wrapping, banding, bundling, pallet packs, and floor display kits. Also available is specialty packaging, such as custom-built fumigated pallets or crates. This ensures that wood packing materials are free of vermin and cleared for export to the numerous countries that require a fumigation certificate. Rest assured that your product is safe in our hands, even if it’s a fragile item like electronics. For items requiring additional security, we offer specialized, private storage options.',
            isOpen: false,
            img: '/imgs/storage-dolly.svg'
          },
          {
            title: 'Pick and Pack',
            body: 'We pick units and prepare orders by the quantity that works best for you, whether it’s by unit, carton, pallet, or any other measure that meets your needs. We gather individual items from master cartons and package them together to be shipped to the recipient.',
            isOpen: false,
            img: '/imgs/pick-pack.svg'
          }
        ]
      }
    },

    methods: {
      toggleAccordion: function(item) {
        var self = this;
        for (var i = 0; i < this.accordionItems.length; i++) {
          self.accordionItems[i].isOpen = false;
        }

        if (item.isOpen === false) {
          item.isOpen = true;
        } else if (item.isOpen === true) {
          item.isOpen = false;
        }
      }
    }
  }
</script>

<template>
  <div class="page-header-wrapper warehouse-bg">
    <div class="header-content-wrapper ">
      <h1 class="content-title center">Storage, Distribution, &amp; Processing</h1>
      <p class="content-text center">
        At Carbel we offer distribution, storage and warehousing needs for businesses everywhere. As a state-of-the-art warehousing facility, we offer our customers convenience, flexibility, and cost-effective service.
      </p>
      <div class="content-btn center header-btn">
        <button class="btn lg outline">Contact Us</button>
      </div>
    </div>
  </div>

  <div class="bullet-points-wrapper">
    <div class="bullet-points clearfix">
      <div v-for="bulletPoint in bulletPoints" class="list-item-wrapper">
        <div class="list-item">
          <i class="fa fa-check-square-o"></i><p>{{bulletPoint.body}}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="video-background-wrapper">
    <video class="video-background" width="100%" autoplay loop>
      <source src="/DJI_0003.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>

    <div class="video-section-content">
      <h2>
        Get Your <b>FREE</b> Consultation Today!
      </h2>
      <p class="content-desc">
        Contact us today to request a tour of our facilities, and receive your FREE consultation.
      </p>
      <div class="content-btn">
        <button class="btn lg outline">Get Started</button>
      </div>
    </div>
  </div>

  <div class="accordion-wrapper">
    <div class="accordion">
      <div v-for="item in accordionItems" v-if="item.isOpen" class="accordion-img-wrapper" transition="fade">
        <img class="accordion-img" :src="item.img" alt="" />
      </div>
      <div class="accordion-items-wrapper">
        <div v-for="item in accordionItems" class="accordion-item-wrapper" :class="{'isOpen': item.isOpen}">
          <div class="accordion-item">
            <h3 v-on:click="toggleAccordion(item)">
              <i v-if="!item.isOpen" class="fa fa-plus"></i>
              <i v-if="item.isOpen" class="fa fa-minus"></i>
              {{item.title}}
            </h3>
            <p v-if="item.isOpen" >
              {{item.body}}
            </p>
          </div>
        </div>
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
    font-size: 42px;
    margin-top: 60px;
    margin-bottom: 40px;
  }

  .content-text {
    width: 100%;
    max-width: 600px;
    font-weight: 100;
  }

  .header-btn {
    margin-top: 40px;
  }
}

.bullet-points-wrapper {
  padding-top: 80px;
  padding-bottom: 80px;

  .bullet-points {
    width: 100%;
    max-width: 1000px;

    margin: 0 auto;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .list-item-wrapper {
      width: 50%;

      @media screen and (max-width: $tablet-md) {
        width: 100%;
      }

      .list-item {
        font-size: 18px;
        font-weight: 200;

        display: flex;
        align-items: center;

        padding-left: 30px;
        padding-right: 30px;

        @media screen and (max-width: $tablet-md) {
          padding-left: 60px;
          padding-right: 60px;
        }

        .fa {
          margin-right: 20px;
          font-size: 28px;
          color: #00a34d;
          margin-top: 2px;
        }
      }
    }
  }
}

.cta-banner-wrapper {
  background: #00a34d;
  padding: 30px;

  .cta-banner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    .cta-text {
      font-size: 36px;
      font-weight: 300;
      color: #fff;
      margin: 0;

    }
  }
}

.accordion-wrapper {
  background-color: #f7f7f7;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: $tablet-md) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .accordion {
    width: 100%;
    max-width: 1200px;

    margin-left: auto;
    margin-right: auto;

    display: flex;

    .accordion-img-wrapper {
      width: 30%;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 20px;

      @media screen and (max-width: $tablet-md) {
        display: none;
      }

      .accordion-img {
        width: 80%;
      }
    }

    .accordion-items-wrapper {
      width: 70%;

      @media screen and (max-width: $tablet-md) {
        width: 100%;
      }

      .accordion-item-wrapper {
        border-bottom: solid 1px #dadada;
        transition: all .3s ease;

        &:last-child {
          border-bottom: solid 0px #dadada;
        }

        &.isOpen {
          .accordion-item {
            h3 {
              color: #00a34d;
              font-weight: bolder;
            }
          }
        }

        .accordion-item {
          .fa {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
