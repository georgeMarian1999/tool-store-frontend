<template>
  <b-row>
    <b-col md="3">
       <h3>Order no: {{order.id}}</h3>
    </b-col>
    <b-col md="3">
      Total: ${{order.total}}
    </b-col>
    <b-col md="3">
      Status : {{order.orderStatus}}
    </b-col>
    <b-col md="3">
      <b-container>
        <b-row>
          <b-col
              @click="goToOrderDetails"
              style="padding: 10px !important;"
              class="rectangle-button">
            details
          </b-col>
        </b-row>
        <b-row v-if="mode === 'user' && order.orderStatus === 'PROCESSING'" class="margin-30">
          <b-overlay :show="loading">
            <b-col
                @click="cancelOrder"
                style="padding: 10px !important;"
                class="rectangle-button red-button">
              cancel order
            </b-col>
          </b-overlay>

        </b-row>
        <b-row v-if="mode === 'admin' && order.orderStatus === 'PROCESSING'"  class="margin-30">
          <b-overlay style="width: 100%" :show="loading">
            <b-col
                @click="shipOrder"
                style="padding: 10px !important;"
                class="rectangle-button">
              ship order
            </b-col>
          </b-overlay>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
import makeToast from "@/utils/toasts";

export default {
  name: "OrderRow",
  props: ['order', 'mode'],
  data: function() {
    return {
     loading:  false,
    }
  },
  computed: {
    orderTotal() {
      return this.order.toFixed(2);
    }
  },
  methods: {
    goToOrderDetails() {
      let orderRoute = '/order/' + this.order.id;
      this.$router.push(orderRoute);
    },
    cancelOrder() {
      this.loading = true;
      const cancelOrderURL = 'http://localhost:8080/order/cancelOrder/' + this.order.id;

      const cancelOrderRequest = axios.put(cancelOrderURL);

      cancelOrderRequest
        .then((response) => {
          this.loading = false;
          console.log(response);
          this.order.orderStatus = 'CANCELED';
        })
        .catch((err) => {
          this.loading = false;
          makeToast(this, 'danger', 'Error canceling order');
        })
    },
    shipOrder() {
      this.loading = true;
      const cancelOrderURL = 'http://localhost:8080/order/shipOrder/' + this.order.id;

      const cancelOrderRequest = axios.put(cancelOrderURL);

      cancelOrderRequest
          .then((response) => {
            this.loading = false;
            console.log(response);
            this.order.orderStatus = 'DELIVERED';
          })
          .catch((err) => {
            this.loading = false;
            makeToast(this, 'danger', 'Error canceling order');
          })
    }
  }
}
</script>

<style scoped lang="scss">

</style>