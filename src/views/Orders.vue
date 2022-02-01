<template>
  <b-overlay :show="loading">
    <PageIntro title="order history"/>
    <b-container >
      <b-row class="order-history">
        <OrdersList :orders="orders" :title="'Your order history'" :mode="'user'"/>
        <UserDetails :user="user"/>
      </b-row>
    </b-container>
  </b-overlay>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
import OrdersList from "@/components/orders/OrdersList";
import UserDetails from "@/components/orders/UserDetails";
import axios from "axios";
import makeToast from "@/utils/toasts";
export default {
  name: "Orders",
  components: {UserDetails, OrdersList, PageIntro},
  data: function() {
    return {
      user: {
      },
      loading: false,
      orders: []
    }
  },
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem('crtUser'));
    if(this.user === null ) {
      this.$router.push('/');
    }
    this.getOrders();
  },
  methods: {
    getOrders() {
      this.loading = true;
      const ordersURL = 'http://localhost:8080/order/allByUserId/' + this.user.id;

      const ordersRequest = axios.get(ordersURL);

      ordersRequest
        .then((response) =>{
          this.loading = false
          console.log(response.data);
          this.orders = response.data;
        })
        .catch((err) => {
          this.loading = false
          makeToast('danger', 'Error getting the orders')
        })
    }
  }
}
</script>

<style scoped lang="scss">
  .order-history {
    margin-top: 60px;
  }
</style>