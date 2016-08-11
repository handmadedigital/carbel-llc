<script>
  import ContactSection from './ContactSection.vue';

  export default {
    name: "Contact",

    components: {
      ContactSection
    },

    ready: function() {
      var styles = [
        // we will add the style rules here.
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#a6ca37"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        }

      ];
      var options = {
      mapTypeControlOptions: {
          mapTypeIds: ['Styled']
      },
          center: {lat: 25.7967225, lng: -80.3332961},
          zoom: 14,
          disableDefaultUI: true,
          mapTypeId: 'Styled',
          scrollwheel: false
      };
      var div = document.getElementById('customMap');
      var map = new google.maps.Map(div, options);
      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
      var marker = new google.maps.Marker({
        position: {lat: 25.7967225, lng: -80.3332961},
        map: map,
        title: 'Carbel LLC'
      });
      map.mapTypes.set('Styled', styledMapType);
    }
  }
</script>

<template>
  <div class="page-header-wrapper contact-bg">
    <div class="header-content-wrapper ">
      <h1 class="content-title center">Contact Us Today</h1>
      <p class="content-text center">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div class="contact-boxes-wrapper">
      <div class="contact-box">
        <p class="box-title">
          Email
        </p>
        <p class="box-text">
          Contact@carbel-wd.com
        </p>
      </div>
      <div class="contact-box">
        <p class="box-title">
          Address
        </p>
        <p class="box-text">
          1515 N University Dr.
          <br/>
          Weston, FL. 33327
        </p>
      </div>
      <div class="contact-box">
        <p class="box-title">
          Phone
        </p>
        <p class="box-text">
          (954) 000-0000
          <br/>
          (954) 000-0000
        </p>
      </div>
    </div>
  </div>
  <div class="floating-section-wrapper">
    <div class="floating-section">
      <h2 class="section-title center">
        Need a Quote Today?
      </h2>
      <form class="contact-form ">
        <div class="flex-row form-inputs">
          <div class="half-column">
            <input class="input-style" type="text" name="name" placeholder="Name">
            <input class="input-style" type="text" name="company" placeholder="Company Name">
            <input class="input-style" type="text" name="email" placeholder="Email">
            <input class="input-style" type="text" name="phone" placeholder="Phone">
          </div>
          <div class="half-column">
            <input class="input-style" type="text" name="type" placeholder="Type of Company">
            <input class="input-style" type="text" name="subject" placeholder="Subject">
            <textarea class="textarea-style" name="name" placeholder="Message"></textarea>
          </div>
        </div>
        <div class="flex-row">
          <div class="half-column">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </div>
          <div class="half-column">
            <button class="btn lg contact-btn" type="button" name="button">Contact Us</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div id="customMap">

  </div>
</template>

<style lang="sass">

$desktop-sm: 1200px;
$tablet-lg: 1000px;
$tablet-md: 800px;
$mobile-lg: 640px;


.page-header-wrapper {
    padding: 100px 20px;
    border-bottom: solid 12px #efefef;

    &.contact-bg {
      background: url("/imgs/contact-bg-green.jpg");
      background-position: center;
      background-size: cover;
      color: #fff;
    }

    &.green-bg {
      background: rgba(0, 164, 77, 0.8);
      color: #fff;
      position: relative;

      &:after {
        background: url("/imgs/warehouse-img.jpg");
        z-index: 99;
        position: absolute;
        content: "";
        opacity: 0.5;
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
      margin-top: 0;
      margin-bottom: 40px;
    }

    .content-text {
      width: 100%;
      max-width: 600px;
      font-weight: 100;
    }
}
.contact-boxes-wrapper {
  display: flex;
  justify-content: space-around;

  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;

  .contact-box {
    .box-text {
      font-weight: 100;
    }
  }
}

 .contact-form {
   .form-inputs {
     padding-bottom: 80px;
   }

   .contact-btn {
     @media screen and (max-width: $mobile-lg) {
       margin-top: 20px;
       width: 100%;
     }
   }
 }

 .input-style, .textarea-style {
    width: calc(100% - 20px);
 }

 .textarea-style {
    min-height: 78px;
 }

 #customMap {
   height: 600px;
 }

</style>
