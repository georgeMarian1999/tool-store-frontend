<template>
 <b-container>
   <b-row>
     <b-col md="5" class="cart-list-col">
       <h4>Product</h4>
     </b-col>
     <b-col md="3" class="cart-list-col">
       <h4>Quantity</h4>
     </b-col>
     <b-col md="2" class="cart-list-col">
       <h4>Total</h4>
     </b-col>
     <b-col md="1">

     </b-col>
   </b-row>
   <b-row >
      <b-col class="separator full-width">

      </b-col>
   </b-row>
   <CartListRow
       v-on:deleteProduct="deleteProduct"
       v-on:changeQuantity="changeQuantityProduct"
       v-for="product in cart"
       :key="product.id"
       :product="product"
       :change-quantity="changeQuantityProduct"
   />
   <b-row >
     <b-col class="separator full-width">

     </b-col>
   </b-row>
   <b-row class="cart-list-row">
     <b-col @click="continueShopping" md="4" class="rectangle-button cart-list-button">
        CONTINUE SHOPPING
     </b-col>
     <b-col md="4">

     </b-col>
     <b-col @click="clearCart" md="4" class="rectangle-button cart-list-button">
        CLEAR CART
     </b-col>
   </b-row>

 </b-container>
</template>

<script>
import CartListRow from "@/components/cart/CartListRow";
export default {
  name: "CartList",
  components: {CartListRow},
  props: ['cart', 'changeQuantityProduct', 'deleteProduct', 'clearCart', 'continueShopping'],
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .cart-list-col {
    padding: 15px;
    text-align: left;
  }
  .cart-list-row {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .cart-list-button {

  }
</style>