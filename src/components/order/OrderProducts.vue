<template>
  <b-container class="order-products">
    <b-row>
      <b-col style="text-align: left">
        <h5>Products from the order</h5>
      </b-col>
    </b-row>

    <RowSeparator class="separator-space"/>

    <b-row class="product-row border-bottom" v-for="product in products" :key="product.id">
      <b-col>{{product.name}}</b-col>
      <b-col class="right-text-col">
        {{product.quantity}} x ${{actualPrice(product)}}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RowSeparator from "@/components/common/RowSeparator";

export default {
  name: "OrderProducts",
  components: {RowSeparator},
  props: ['products'],
  computed: {},
  methods:{
    actualPrice(product) {
      return product.price - (product.price * product.sale)/100 ;
    }
  }
}
</script>

<style scoped lang="scss">
.separator-space {
  margin-top: 20px;
  margin-bottom: 30px;
}
.product-row {
  font-size: 20px;
  margin-top:20px;
  text-align: left;
}
.order-products {
  padding: 10px;
  margin-top: 60px;
}
</style>