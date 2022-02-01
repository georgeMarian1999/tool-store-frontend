<template>
  <b-overlay :show="loading">
    <PageIntro :title="title"/>
    <b-container class="order-page">
      <b-row>
        <OrderDetails :order="order"/>
        <b-col md="4">
          <b-container>
            <b-row>
              <Subtotal location="order" title="Order total" :subtotal="this.order.subtotal" />
            </b-row>
            <b-row>
              <OrderProducts :products="order.productOrderDTOList"/>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </b-overlay>
</template>

<script>

import PageIntro from "@/components/common/PageIntro";
import OrderDetails from "@/components/order/OrderDetails";
import Subtotal from "@/components/common/Subtotal";
import OrderProducts from "@/components/order/OrderProducts";
import axios from "axios";
import makeToast from "@/utils/toasts";

export default {
  name: "Order",
  props: ['id'],
  components: {OrderProducts, Subtotal, OrderDetails, PageIntro},
  data: function() {
    return {
      order: {},
      loading: false,
    }
  },
  mounted() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      this.loading = true;
      let orderID = this.$route.params.id;
      const orderURL = 'http://localhost:8080/order/orderById/' + orderID;

      const orderRequest = axios.get(orderURL);

      orderRequest
        .then((response) => {
          this.loading = false;
          console.log(response.data);
          this.order = response.data;
        })
      .catch((err)=>{
        this.loading = false;
        makeToast(this,'danger', "Cannot get order");
      })
    }
  },
  computed: {
    title() {
      return 'Order no ' + this.$route.params.id;
    }
  }
}
</script>

<style scoped lang="scss">
  .order-page {
    margin-top: 60px;
  }
</style>