<template>
 <div class="nav-bar-wrapper">
    <b-navbar class="navbar">
      <b-navbar-brand class="navbar-brand">Hardware Store</b-navbar-brand>
      <b-navbar-nav class="navbar-nav">
        <b-nav-item
            to="/"
            :class="{'active-page' : ActivePage === ''}"
            class="navbar-item"
        >
         <p>HOME</p>
        </b-nav-item>
        <b-nav-item
            to="/about"
            :class="{'active-page' : ActivePage === 'about'}"
            class="navbar-item"
        >
          <p>ABOUT</p>
        </b-nav-item>
        <b-nav-item
            to="/shop"
            :class="{'active-page' : (ActivePage === 'shop' || ActivePage === 'product')}"
            class="navbar-item"
        >
          <p>SHOP</p>
        </b-nav-item>
        <b-nav-item
            to="/cart"
            :class="{'active-page' : ActivePage === 'cart'}"
            class="navbar-item"
        >
          <p>CART</p>
        </b-nav-item>
        <b-nav-item
            v-if="user !== null && user.role === 'user'"
            to="/orders"
            :class="{'active-page' : ActivePage === 'orders'}"
            class="navbar-item"
        >
          <p>MY ORDERS</p>
        </b-nav-item>

        <b-nav-item
            v-if="user !== null && user.role === 'admin'"
            to="/admin"
            :class="{'active-page' : ActivePage === 'orders' || ActivePage === 'admin'}"
            class="navbar-item"
        >
          <p>NEW ORDERS</p>
        </b-nav-item>
        <b-nav-item
            v-if="user === null"
            to="/login"
            :class="{'active-page' : ActivePage === 'login' || ActivePage === 'register'}"
            class="navbar-item"
        >
          <p>LOGIN</p>
        </b-nav-item>
        <b-nav-item
            @click="logout"
            class="navbar-item"
            v-if="user !== null"
        >
          <p>LOGOUT</p>
        </b-nav-item>
        <b-nav-item disabled class="navbar-phone">
          <p>0743 345 632</p>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
 </div>
</template>

<script>
export default {
  name: "HeaderNav",
  components: {},
  data : function () {
    return {
      ActivePage: this.$route.path.split("/")[1],
      user: null,
    }
  },
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem('crtUser'));
  },
  computed: {
  },
  watch:{
    $route (to, from){
      this.ActivePage = this.$route.path.split("/")[1];
      this.user = JSON.parse(sessionStorage.getItem('crtUser'));
    }
  },
  methods: {
    logout() {
      this.user = null;
      sessionStorage.removeItem('crtUser');
      this.$router.push('/');
    }
  },


}
</script>

<style scoped lang="scss">
  p {
    margin: 0;
  }
  .nav-bar-wrapper {
    position: sticky;
  }
  .navbar {
    padding: 10px;
  }
  .navbar-phone {
    font-size: 25px;
    padding-left: 10px;
    padding-right: 10px;
    background: #42b983;
  }
  .navbar-phone p {
    color: white;
  }
  .navbar-brand {
    margin-left: 10%;
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
  }
  .navbar-nav {
    display: flex;
    width: 100%;
    color: white !important;
    margin-right: 8%;
    align-items: center;
    font-family: "Open Sans", sans-serif;
    justify-content: flex-end;
    padding: 10px;
  }
  .navbar-item {
    margin-right: 15px;
  }
  .navbar-item p {
    color: black;
  }
  .navbar-item:not(.active-page):after {
    display:block;
    content: '';
    border-bottom: solid 3px #42b983;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  .navbar-item:not(.active-page):hover:after {
    transform: scale(1);
  }
  .active-page {
    border-bottom: solid 3px #42b983;
  }
</style>