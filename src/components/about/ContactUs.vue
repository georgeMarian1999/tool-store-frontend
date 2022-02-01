<template>
  <div class="contact-us">
    <div class="contact-us-text">
      <h5 class="contact-us-text-subtitle">Welcome to the Hardware Store</h5>
      <h3><b>WE PROVIDE PRODUCTS</b> FOR MULTIPLE CUSTOMERS IN VARIOUS INDUSTRIES AND SEGMENTS</h3>
      <p style="margin: 0; text-transform: none">Our team is engaged and online 24/7 providing support for you and your company. The phone line is free to use for customer support about orders and any difficulties </p>
      <div class="rectangle-button about-page-contact-us">Contact us</div>
    </div>
    <div class="contact-us-photo">

    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style scoped lang="scss">
  .contact-us {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 550px;
  }
  .contact-us-text {
    display: flex;
    text-align: left;
    flex-direction: column;
    text-transform: uppercase;
    background: white;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 25px;
    width: 40%;
    height: 400px;
  }
  .contact-us-photo {
    display: flex;
    background-image: url('../../assets/images/about-pic.jpg');
    background-repeat: no-repeat;
    width: 40%;
    height: 400px;
  }
  .about-page-contact-us {
    width: 30% !important;
    cursor: pointer;
    font-size: 15px;
    padding: 15px;
  }
  .contact-us-text-subtitle {
    color: #42b983;
  }
</style>