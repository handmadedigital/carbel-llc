<script>
  import Navbar from './Navbar.vue'

  export default {
    name: "App",

    components: {
      Navbar
    }
  }
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="footer-half bottom-mobile">
        <div class="contact-info">
          <h3 class="contact-title">Carbel LLC South Florida</h3>

          <p class="contact-address">
            23 NW 82nd Ave.
            <br/>
            Doral, FL 33122
          </p>
          <p class="contact-phone">+1 (305) 000-0000</p>
          <div class="social-icons">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <p class="copyright">© COPYRIGHT 2010-16</p>
        </div>
      </div>
      <div class="footer-half">
        <div class="subscription-wrapper">
            <div class="subscription-form">
              <h4 class="subscription-title">Subscribe To Our Newsletter</h4>
              <input class="input-style" type="email" name="email" placeholder="Subscribe"> <button class="btn1" type="button" name="button">></button>
            </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style lang="sass">

$desktop-sm: 1200px;
$tablet-lg: 1000px;
$tablet-md: 800px;
$mobile-lg: 640px;

.footer-wrapper {
  background: url('/imgs/footer-bg.svg');
  background-size: cover;
  background-position: center;

  padding-top: 20px;

  border-top: solid 8px #e4e0e0;

  @media screen and (max-width: $mobile-lg) {
    background: #2aaa4a;
    text-align: center;
  }

  .footer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;

    @media screen and (max-width: $mobile-lg) {
      flex-direction: column;
    }

    .footer-half {
      flex: 50%;

      &.bottom-mobile {
        @media screen and (max-width: $mobile-lg) {
          order: 2;
        }
      }

      .contact-info {
        color: #fff;

        .social-icons {
          margin-top: 30px;
          margin-bottom: 30px;
          .fa {
            margin-right: 20px;
            font-size: 28px;
          }
        }

        .copyright {
          font-size: 14px;
        }
      }

      .subscription-wrapper {
        display: flex;
        align-items: center;
        height: 100%;
        padding-left: 100px;

        @media screen and (max-width: $mobile-lg) {
          padding-left: 0;
          padding-top: 60px;
        }

        .subscription-form {

          @media screen and (max-width: $mobile-lg) {
            margin: 0 auto;
          }

          .subscription-title {
            margin-top: 0;
            margin-bottom: 10px;
            color: #fff;
          }
          .btn1 {
            border: 0;
            padding-top: 10px;
            padding-right: 14px;
            padding-bottom: 10px;
            padding-left: 14px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: -4px;
            font-size: 16px;
            font-weight: 300;
            color: #fff;
            background: #2aaa4a;
          }
        }
      }
    }
  }
}
</style>
