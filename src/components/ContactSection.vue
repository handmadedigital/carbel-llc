<script>
  export default {
    name: "ContactSection"
  }
</script>

<template>
  <div class="contact-section-wrapper">
    <div class="contact-section">
      <div class="contact-form-wrapper">
        <h2 class="contact-title">Contact Us</h2>
        <p class="contact-tagline">
          Send us a message
        </p>
        <form class="contact-form">
          <input class="input-style" type="text" name="name" placeholder="Name">
          <input class="input-style" type="email" name="email" placeholder="Email">
          <textarea class="textarea-style" name="name" placeholder="Message"></textarea>
          <button class="btn" type="button" name="button">Contact Us</button>
        </form>
      </div>
      <div class="contact-info-wrapper">
        <div class="contact-info">
          <p class="contact-item">
            <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact@Carbel-WD.com
          </p>
          <p class="contact-item">
            <i class="fa fa-phone" aria-hidden="true"></i> +1 (305) 000-0000
          </p>
          <p class="contact-item">
            <i class="fa fa-globe" aria-hidden="true"></i> Carbel LLC South Florida
            <br/>
            <span>
              23 NW 82nd Ave.
              <br/>
              Doral, FL 33122
            </span>
          </p>
        </div>
        <button class="btn" type="button" name="button">Show me the map</button>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

$tablet-lg: 1000px;
$tablet-md: 800px;
$mobile-lg: 640px;


.contact-section-wrapper {
  padding-top: 100px;
  padding-bottom: 100px;

  .contact-section {
    max-width: 1200px;

    margin-left: auto;
    margin-right: auto;

    display: flex;

    @media screen and (max-width: $tablet-md) {
      flex-direction: column;
    }

    .contact-info-wrapper {
      flex: 50%;

      @media screen and (max-width: $tablet-md) {
        margin-left: 100px;
      }

      @media screen and (max-width: $mobile-lg) {
        margin-left: 40px;
      }

      .contact-info {
        padding: 90px 0;

        @media screen and (max-width: $tablet-md) {
          padding: 0;
        }

        .contact-item {
          font-weight: bold;

          padding-left: 30px;

          margin-top: 30px;
          margin-bottom: 30px;

          span {
            font-weight: 300;
          }

          .fa {
            margin-left: -30px;
            margin-right: 12px;
            color: #00a34d;
          }
        }
      }
      .btn {
        background-color: #00a34d;
        width: 120px;
        margin-top: 37px;
        margin-right: 100px;
        float: right;

        @media screen and (max-width: $mobile-lg) {
          margin-right: 40px;
        }
      }
    }

    .contact-form-wrapper {
      flex: 50%;
      margin-left: 100px;
      margin-right: 100px;

      @media screen and (max-width: $mobile-lg) {
        margin-left: 40px;
        margin-right: 40px;
      }

      .contact-title {
        text-align: center;
        font-size: 38px;
        color: #6d6d6d;
        letter-spacing: 20px;
        margin-bottom: 10px;
        margin-top: 0;

        @media screen and (max-width: $mobile-lg) {
          letter-spacing: 0;
        }
      }

      .contact-tagline {
        text-align: center;
        margin-bottom: 30px;
      }

      .contact-form {
        display: flex;
        flex-direction: column;

        .btn {
          background-color: #00a34d;
          width: 120px;
          margin-top: 10px;
          align-self: flex-end;
        }
      }
    }

  }
}

</style>
