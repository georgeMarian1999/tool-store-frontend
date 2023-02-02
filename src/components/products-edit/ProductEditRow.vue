<template>
  <b-row class="cart-list-row border">
    <b-col >
      <b-img @click="goToProduct" width="80" height="80" style="cursor: pointer" class="border" :src="product.image"></b-img>
    </b-col>

    <b-col class="cart-list-col" >
      <b-row>{{product.name}}</b-row>
      <b-row><b>${{actualPrice}}</b></b-row>
    </b-col>


    <b-col class="cart-list-col cart-list-middle-col" >
      {{product.stock}}
    </b-col>

    <b-col class="cart-list-x-col" >
      <b-icon @click="deleteProduct" icon="x-circle-fill" class="cart-list-x clickable"></b-icon>
    </b-col>
    <b-col class="cart-list-x-col" >
      <button @click="editProduct" class="btn btn-primary">Edit</button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ProductEditRow",
  props: ['product'],
  methods: {
    deleteProduct() {
      this.$emit('deleteProduct', this.product.id);
    },
    goToProduct() {
      this.$router.push('/product/'+this.product.id);
    },
    editProduct() {
      this.$emit('editProduct', this.product.id);
    }
  },
  computed: {
    actualPrice() {
      return this.product.price - (this.product.price * this.product.sale)/100;
    }
  }
}
</script>

<style scoped>

</style>