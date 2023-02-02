<template>
  <div class="account-service">
    <div class="green-background"></div>
    <div class="img-background"></div>
    <div class="account-text">
      <p class="account-text-title">We offer support, order history and persistent cart if you create an account with us! Register now</p>
      <router-link to="/login" class="rectangle-button account-text-register">
          Register now!
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountService"
}
</script>

<style scoped lang="scss">
  .account-service {
    width: 100%;
    position: relative;
    height: 500px;
    display: flex;
  }
  .green-background {
    background: #42b983;
    width: 50%;
    height: 500px;
  }
  .img-background {
    width: 50%;
    height: 500px;
    // background-image: url('../../assets/images/account.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .account-text {
    position: absolute;
    height: 350px;
    width: 700px;
    padding: 30px;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    flex-direction: column;
    top: 15%;
    left: 10%;
    background: white;
  }
  .account-text-title {
    font-size: 40px;
    margin: 0;
    font-family: "Open Sans", sans-serif;
  }
  .account-text-register {
    width: 200px !important;
  }
</style>