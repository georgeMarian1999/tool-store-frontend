<template>
  <b-container class="cart-subtotal">
    <b-row class="cart-subtotal-header">
      <b-col class="cart-subtotal-left-col">
        <h5>{{ title }}</h5>
      </b-col>
    </b-row>
    <b-row class="cart-subtotal-row">
      <b-col class="cart-subtotal-left-col">
        Subtotal
      </b-col>
      <b-col class="cart-subtotal-right-col">
        ${{ subtotal }}
      </b-col>
    </b-row >
    <b-row class="cart-subtotal-row">
      <b-col class="cart-subtotal-left-col">
        Shipping
      </b-col>
      <b-col v-if="shipping !== 0" class="cart-subtotal-right-col">
        ${{ shipping }}
      </b-col>
      <b-col v-else>
        <b-row class="cart-subtotal-right-col">
          <b-col>
            <b>FREE!</b>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row v-if="location === 'order'" class="cart-subtotal-row">
      <b-col class="cart-subtotal-left-col">
        Taxes
      </b-col>
      <b-col class="cart-subtotal-right-col">
        ${{ taxes }}
      </b-col>
    </b-row>
    <b-row class="cart-subtotal-row">
      <b-col class="cart-subtotal-left-col">
        Total
      </b-col>
      <b-col class="cart-subtotal-right-col">
        ${{ total }}
      </b-col>
    </b-row>
    <b-row v-if="location === 'cart' && !notLoggedIn" class="cart-subtotal-button">
      <b-col @click="goToCheckout" md="12" class="rectangle-button">
        PROCEED TO CHECKOUT
      </b-col>
    </b-row>

    <b-row v-if="notLoggedIn && location === 'cart'" class="cart-subtotal-button">
      <b-col md="12" class="rectangle-button gray-button">
        YOU MUST LOGIN BEFORE CHECKOUT
      </b-col>
    </b-row>


  </b-container>
</template>

<script>
export default {
  name: "Subtotal",
  props: ['subtotal', 'title', 'location', 'notLoggedIn'],
  computed: {
    total() {
      return this.subtotal + this.shipping + this.taxes;
    },
    shipping() {
      return (this.subtotal >= 100 || this.subtotal === 0) ? 0 : 15;
    },
    taxes() {
      return this.location === 'order' ? (this.subtotal * 19) / 100 : 0;
    }
  },
  methods: {
    goToCheckout(){
      this.$router.push('/checkout')
    }
  }
}
</script>

<style scoped lang="scss">
  .cart-subtotal {
    background: #f6f6f9;
    padding: 40px;
  }
  .cart-subtotal-left-col {
    text-align: left;
  }
  .cart-subtotal-row {
    margin-bottom: 10px;
  }
  .cart-subtotal-right-col {
    text-align: right;
  }
  .cart-subtotal-header {
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .cart-subtotal-button {
    margin-top: 20px;
  }
</style>