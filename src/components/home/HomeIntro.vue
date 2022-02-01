<template>
  <div class="home-intro">
    <div class="home-intro-description">
      <h3>Best hardware store</h3>
      <h1>Our team will make sure all your needs are fulfilled</h1>

      <router-link class="rectangle-button" to="/about">Contact us</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIntro"
}
</script>

<style scoped lang="scss">
  .home-intro {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-image: url('../../assets/images/tools1.jpeg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  .home-intro-description {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    /* From https://css.glass */
    background: rgba(54, 52, 52, 0.54);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.8px);
    -webkit-backdrop-filter: blur(1.8px);
    border: 1px solid rgba(54, 52, 52, 0.3);

    width: 600px;
    height: 300px;
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 40px;
    padding-left: 40px;
  }
</style>