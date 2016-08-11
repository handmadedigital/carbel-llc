<script>
  export default {
    name: "Navbar",

    data: function(){
      return {
        services: [],
        isOpen: true,
        mobileNav: false,
        isFixed: false,
        currentRoute: ''
      }
    },

    ready: function() {

      var self = this;

      //Here we are setting the current route variable
      this.currentRoute = this.$route.name;

      //Setting some variables for later use
      var navbar = document.getElementById("mainNavbar"),
          windowWidth = window.innerWidth;

      //Setting Responsive Header
      if (windowWidth < 1000) {
        self.mobileNav = true;
        navbar.className += ' mobile-header';
      }

      //Setting Sticky Header on scroll
      window.addEventListener('scroll', function(e){

        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            navbar = document.getElementById("mainNavbar");

        if (self.mobileNav == false) {
          if (distanceY > shrinkOn) {
             if (self.isFixed == false) {
               navbar.className += ' shrink';
               self.isFixed = true;
             }
          } else if ((' ' + navbar.className + ' ').indexOf(' ' + 'shrink' + ' ') > -1) {
             navbar.classList.remove("shrink");
             self.isFixed = false;
          }
        } else {
          if (distanceY > shrinkOn) {
             if (self.isFixed == false) {
               self.isFixed = true;
             }
          } else if ((' ' + navbar.className + ' ').indexOf(' ' + 'shrink' + ' ') > -1) {
             self.isFixed = false;
          }
        }
       });

      window.addEventListener('resize', function(){
         if (window.innerWidth < 1000) {
           if (self.mobileNav == false) {
             navbar.className += ' mobile-header';
             self.mobileNav = true;
           }
         } else if ((' ' + navbar.className + ' ').indexOf(' ' + 'mobile-header' + ' ') > -1) {
           navbar.classList.remove("mobile-header");
           self.mobileNav = false;
         }
      });

    },

    methods: {
      toggleMenu: function() {
        var self = this;

        if (this.isOpen == false) {
          self.isOpen = true;
        } else {
          self.isOpen = false;
        }
      }
    }
  }
</script>

<template>
  <div id="mainNavbar" class="navbar-wrapper" :class="{'home': this.$route.name === 'home'}">
    <div class="navbar-left">
      <a v-link="{name: 'home'}">
        <div class="logo-wrapper">
          <img class="logo-white" src="/imgs/logo-white.svg" alt="carbel logo" />
          <img class="logo" src="/imgs/logo.svg" alt="carbel logo" />
        </div>
      </a>
    </div>
    <div class="navbar-right">
      <div class="open-menu-btn" v-if="mobileNav" v-on:click="this.isOpen = true"><i class="fa fa-bars"></i></div>

      <ul v-if="!mobileNav" class="dropdown menu">
        <!--- <li class="menu-item"><a v-link="{name: 'about'}">About</a></li> --->
        <li class="menu-item"><a v-link="{name: 'warehouse'}">Warehouse</a></li>
        <li class="menu-item"><a v-link="{name: 'service'}">Services</a></li>
        <li class="menu-item"><a v-link="{name: 'contact'}">Contact</a></li>
      </ul>
    </div>
    <div class="green-bg-wrapper">
      <svg id="greenBg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800.5 100.2">
        <style>
          .st0{fill:#A2D034;}
        </style>
        <path class="st0" d="M0 100.2h800.5V0H62.6z"/>
      </svg>
    </div>
  </div>

</template>

<style lang="sass">

$desktop-sm: 1200px;
$tablet-lg: 1000px;
$tablet-md: 800px;
$mobile-lg: 640px;

.navbar-wrapper {
  display: flex;
  justify-content: space-between;

  height: 100px;
  width: 100%;

  border-bottom: solid 1px rgba(255, 255, 255, 0.3);

  position: fixed;
  top: 0;
  z-index: 9999;

  transition: all 0.6s;

  &.shrink {
    height: 80px;
    background: #fff;

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    .green-bg-wrapper {
      opacity: 0;
    }

    .logo-wrapper {
      .logo {
        display: block;
      }

      .logo-white {
        display: none;
      }
    }

    .menu {
      .menu-item {
        a {
          color: #333;
        }
      }
    }
  }

  &.home {
    background-color: #fff;
    border-bottom: 0px ;

    &.shrink {
      height: 80px;

      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

      .green-bg-wrapper {
        opacity: 0;
      }

      .menu {
        .menu-item {
          a {
            color: #333;
          }
        }
      }
    }

    .green-bg-wrapper {
      opacity: 1;

      @media screen and (max-width: $tablet-lg) {
        opacity: 0;
      }
    }

    .logo-wrapper {
      .logo {
        display: block;
      }

      .logo-white {
        display: none;
      }
    }
  }
  .navbar-right, .navbar-left {
    display: flex;
    align-items: center;
  }

  .open-menu-btn {
    padding: 0 30px;
    font-size: 22px;
    color: #009d44;
  }

  .logo-wrapper {
    padding-left: 40px;
    padding-right: 20px;

    .logo-white {
      display: block;
    }

    .logo {
      display: none;
    }

    img {
      width: 200px;
    }
  }

  .menu {
    display: flex;
    list-style: none;
    color: #fff;
    padding-right: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;

    .menu-item {
      padding-left: 20px;
      padding-right: 20px;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  .green-bg-wrapper {
    position: absolute;
    width: 40%;
    right: 0;
    height: 100px;
    z-index: -1;
    opacity: 0;
    transition: all 0.6s;

    #greenBg {
      height: 100%;
    }
  }
}
</style>
