<template>
  <b-row class="cart-list-row border">
    <b-col md="3">
      <b-img @click="goToProduct" width="80" height="80" style="cursor: pointer" class="border" :src="product.image"></b-img>
    </b-col>

    <b-col class="cart-list-col" md="2">
      <b-row>{{product.name}}</b-row>
      <b-row><b>${{actualPrice}}</b></b-row>
    </b-col>

    <b-col class="cart-list-col cart-list-middle-col" md="3">
      <b-container>
        <b-row>
          <b-col md="1">
            <i @click="decreaseQuantity" class="fas fa-minus clickable"></i>
          </b-col >
          <b-col md="1">
            {{product.quantity}}
          </b-col>
          <b-col md="1">
            <i @click="increaseQuantity" class="fas fa-plus clickable"></i>
          </b-col>
        </b-row>
      </b-container>

    </b-col>

    <b-col class="cart-list-col cart-list-middle-col" md="2">
      ${{actualPrice * product.quantity}}
    </b-col>

    <b-col class="cart-list-x-col" md="1">
      <b-icon @click="deleteProduct" icon="x-circle-fill" class="cart-list-x clickable"></b-icon>
    </b-col>
  </b-row>
</template>

<script>
import ProductQuantity from "@/components/common/ProductQuantity";
export default {
  name: "CartListRow",
  components: {ProductQuantity},
  props: ['product'],
  methods : {
    decreaseQuantity() {
      this.$emit('changeQuantity', this.product.id,this.product.quantity--);
    },
    increaseQuantity() {
      this.$emit('changeQuantity', this.product.id,this.product.quantity++);
    },
    deleteProduct() {
      this.$emit('deleteProduct', this.product.id);
    },
    goToProduct() {
      this.$router.push('/product/'+this.product.id);
    },
  },
  computed: {
    actualPrice() {
      return this.product.price - (this.product.price * this.product.sale)/100;
    }
  }

}
</script>

<style scoped lang="scss">
  .cart-list-row {
    margin-top: 20px;
    padding: 20px;
    text-align: left;
  }
  .cart-list-x-col {
    margin-top: 25px;
    text-align: right;
    font-size: 20px;
  }
  .cart-list-col{
    padding: 15px;
  }
  .cart-list-middle-col {
    margin-top: 15px;

  }
</style>