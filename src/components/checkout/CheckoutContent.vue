<template>
  <b-container>
    <b-row class="checkout-content">
      <b-col md="8">
        <CheckoutForm :form="form"/>
      </b-col>
      <b-col md="4">
        <b-overlay :show="loading">
          <CheckoutSummary
              v-on:place="placeOrder"
              :disabled-place-order="disabledPlaceOrder"/>
        </b-overlay>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import axios from "axios";
export default {
  name: "CheckoutContent",
  components: {CheckoutSummary, CheckoutForm},
  data: function () {
    return {
      form: {
        phone: '',
        street: '',
        apartment: '',
        city: '',
        county: '',
        postcode: 0,
      },
      cart: JSON.parse(localStorage.getItem('cart')),
      loading: false,
    }
  },
  methods: {
    makeToast(variant = null,content) {
      this.$bvToast.toast(content, {
        variant: variant,
        solid: true,
        autoHideDelay: 3000,
      })
    },
    placeOrder() {
      this.loading = true;
      console.log("Placing order");
      const userID = JSON.parse(sessionStorage.getItem('crtUser')).id;
      const orderURL = 'http://localhost:8080/order/placeOrder/' + userID;
      const cart = JSON.parse(localStorage.getItem('cart'));
      console.log(cart.length);
      let order = {
        phone: this.form.phone,
        street: this.form.street,
        apartment: this.form.apartment,
        city: this.form.city,
        county: this.form.county,
        postcode: this.form.postcode,
        subtotal: this.subtotal,
        taxes: this.taxes,
        total: this.total,
        shipping: this.shipping,
        productOrderDTOList: []
      }
      for(let i = 0; i < cart.length; i++) {
        order.productOrderDTOList.push({
          id: cart[i].id,
          price: cart[i].price,
          quantity: cart[i].quantity,
        })
      }
      const orderRequest = axios.post(orderURL,order);

      orderRequest
        .then((response) => {
          this.loading = true;
          localStorage.removeItem('cart');
          localStorage.setItem('cart', JSON.stringify([]));
          this.$router.push('/confirmation')
        })
        .catch((error) => {
          this.loading = true;
          this.makeToast('danger', 'Error placing order');
        })
    }
  },
  computed: {
    disabledPlaceOrder() {
      return this.form.phone === '' || this.form.street === '' || this.form.apartment === '' || this.form.city === '' || this.form.county === '' || this.form.postcode === 0;
    },
    subtotal() {
      let subtotal = 0;
      for(let i = 0 ; i < this.cart.length; i++) {
        subtotal = subtotal + ((this.cart[i].price - (this.cart[i].price * this.cart[i].sale)/100) * this.cart[i].quantity);
      }

      return subtotal;
    },
    shipping() {
      return this.subtotal >= 100 ? 0 : 15;
    },
    taxes() {
      return (this.subtotal * 19) / 100;
    },
    total() {
      return this.subtotal + this.shipping + this.taxes;
    },
  }
}
</script>

<style scoped lang="scss">
  .checkout-content {
    margin-top: 60px;
    height: 100%;
    margin-bottom: 100px;
  }
</style>