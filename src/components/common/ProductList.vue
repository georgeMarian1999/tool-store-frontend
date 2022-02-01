<template>
  <b-overlay :show="loading" class="product-sale-list">
    <div v-if="listType" class="product-list-header">
      <h4>{{ listType }}</h4>
      <h1>Hardware Store</h1>
      <div class="product-sale-list-separator">

      </div>
      <router-link to="/shop" class="view-all-button">
        VIEW ALL
      </router-link>
    </div>
    <div class="list">
      <Product v-for="product in products"
               :key="product.id"
               :product="product"
      />
    </div>
  </b-overlay>
</template>

<script>
import Product from "@/components/common/Product";
export default {
  props: ['listType', 'products', 'loading'],
  name: "ProductList",
  components: {Product},
}
</script>

<style scoped lang="scss">
.product-sale-list {
  position: relative;
  height: 550px;
  width: 100%;
  padding: 50px;
}
.product-list-header {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  height: 180px;
  justify-content: space-evenly;
  padding: 15px;

}
.list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.product-sale-list-separator {
  width: 70px;
  background: #42b983;
  height: 2px;
}
.view-all-button {
  position: absolute;
  padding: 10px 30px;
  border: 1px solid #42b983;
  top: 15%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b983;
  right: 10%;
}
.view-all-button:hover {
  border: 1px solid white;
  background: #42b983;
  color: white;
}
</style>