<template>
  <div class="why-choose-us">
    <div class="why-choose-us-photos">
      <div class="why-choose-us-photos-wrapper">
        <div class="why-choose-us-photo why-choose-us-photo-1"></div>
        <div class="why-choose-us-photo why-choose-us-photo-2"></div>
      </div>
      <div class="why-choose-us-photo-wrapper">
        <div class="why-choose-us-photo why-choose-us-photo-3"></div>
      </div>
    </div>
    <div class="why-choose-us-text">
      <h5 class="subtitle">Hardware Store</h5>
      <h3><b>WHY CHOOSE US?</b> Top quality products!</h3>
      <div class="separator">

      </div>
      <p style="margin: 0; text-transform: none; text-align: left"> Our company offers a lot of benefits when shopping with us! Some of them are: </p>
      <ul style="text-align: left; text-transform: none;align-self: flex-start">
        <li>Money back when the customer is not satisfied with the products!</li>
        <li>Free returns!</li>
        <li>Free shipping on orders over 100$!</li>
        <li>Discount codes for and rewards for logged in users!</li>
      </ul>
      <router-link to="/shop" class="rectangle-button about-page-contact-us">Shop now!</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "WhyChooseUs"
}
</script>

<style scoped lang="scss">
  .why-choose-us {
    display: flex;
    height: 650px;
    justify-content: center;
    margin-top: 150px;
    background: #42b983;
  }
  .why-choose-us-text {
    display: flex;
    margin-top: -100px;
    text-align: right;
    flex-direction: column;
    text-transform: uppercase;
    background: white;
    justify-content: space-evenly;
    align-items: flex-end;
    padding: 25px;
    width: 35%;
    height: 500px;
  }
  .why-choose-us-photos {
    display: flex;
    margin-top: 100px;
    width: 35%;
    height: 500px;
  }
  .why-choose-us-photos-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    padding: 10px;
    justify-content: space-evenly;
    align-items: center;
  }
  .why-choose-us-photo-1 {
    background-image: url('../../assets/images/chooseus-camera-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .why-choose-us-photo-2 {
    background-image: url('../../assets/images/chooseus-2.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;

  }
  .why-choose-us-photo-3 {
    background-image: url('../../assets/images/chooseus-3.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100% !important;
  }
  .why-choose-us-photo {
    width: 100%;
    height: 45%;
  }
  .why-choose-us-photo-wrapper {
    display: flex;
    height: 100%;
    justify-content: space-evenly;

    width: 50%;
    padding: 25px 0px 25px 10px;
  }
</style>