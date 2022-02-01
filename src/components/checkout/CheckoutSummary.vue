<template>
  <b-container class="checkout-summary">
    <b-row>
      <b-col style="text-align: left">
        <h5>Your order</h5>
      </b-col>
    </b-row>

    <RowSeparator class="separator-space"/>

    <b-row class="checkout-product-row border-bottom" v-for="product in cart" :key="product.id">
      <b-col>{{product.name}}</b-col>
      <b-col class="checkout-product-right-col">
        {{product.quantity}} x ${{calcPrice(product)}}
      </b-col>
    </b-row>

    <RowSeparator class="separator-space"/>

    <b-row class="checkout-product-row">
      <b-col>
        Subtotal
      </b-col>
      <b-col class="checkout-product-right-col">
        ${{subtotal.toFixed(2)}}
      </b-col>
    </b-row>
    <b-row class="checkout-product-row">
      <b-col>
        Shipping
      </b-col>
      <b-col v-if="shipping !== 0" class="checkout-product-right-col">
        ${{shipping.toFixed(2)}}
      </b-col>
      <b-col v-else class="checkout-product-right-col">
        <b>FREE!</b>
      </b-col>
    </b-row>
    <b-row class="checkout-product-row">
      <b-col>
        Taxes
      </b-col>
      <b-col class="checkout-product-right-col">
        ${{taxes.toFixed(2)}}
      </b-col>
    </b-row>

    <RowSeparator class="separator-space"/>

    <b-row class="checkout-product-row">
      <b-col>
        <b>Total</b>
      </b-col>
      <b-col class="checkout-product-right-col">
        <h5 class="checkout-summary-total">${{total.toFixed(2)}}</h5>
      </b-col>
    </b-row>

    <b-row class="checkout-product-row">
      <b-col
          @click="placeOrder"
          style="width: 70%"
          :class="disabledClass"
          class="rectangle-button">PLACE ORDER</b-col>
    </b-row>


  </b-container>
</template>

<script>
import RowSeparator from "@/components/common/RowSeparator";
export default {
  name: "CheckoutSummary",
  components: {RowSeparator},
  props: ['disabledPlaceOrder'],
  data: function() {
    return {
      cart: [],
    }
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if(this.cart.length === 0) {
      this.$router.push('/cart');
    }
  },
  methods: {
    calcPrice(product) {
        return product.price - (product.price * product.sale)/100;
    },
    placeOrder() {
      this.$emit('place');
    }
  },
  computed: {
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
    disabledClass() {
      return this.disabledPlaceOrder ? 'gray-button' : '';
    }

  }
}
</script>

<style scoped lang="scss">
  .checkout-summary {
    background: #f0f2f5;
    height: 100%;
    padding: 40px;
    h5 {
      text-transform: uppercase;
    }
  }

  .checkout-product-row {
    font-size: 15px;
    margin-top:20px;
    text-align: left;
  }
  .checkout-product-right-col {
    text-align: right;
  }
  .separator-space {
    margin-top: 40px;
    margin-bottom: 30px;
  }
  .checkout-summary-total {
    color: #42b983;
  }
</style>