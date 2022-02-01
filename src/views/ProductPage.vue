<template>
  <b-overlay :show="loading" class="product-page margin-60-bottom">
    <PageIntro title="Product Details"/>
    <ProductDetails :stars="product.stars" :product="product"/>
    <ProductReviews :reviews="product.reviews"/>
  </b-overlay>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
import ProductDetails from "@/components/product/ProductDetails";
import ProductReviews from "@/components/product/ProductReviews";
import axios from "axios";
export default {
  name: "ProductPage",
  components: {ProductReviews, ProductDetails, PageIntro},
  props: ['id'],
  data: function() {
    return {
      product: {},
      loading: false,
    }
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.loading = true;

      const productURL = 'http://localhost:8080/product/viewProduct/'+ this.$route.params.id;

      const requestProduct = axios.get(productURL);

      requestProduct.then((response) =>{
        this.loading = false;
        this.product = response.data;
      }).catch((err)=>{
        console.log(err);
      })
    }
  },
  computed: {
  },
}
</script>

<style scoped lang="scss">
  .product-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    height: 100%;
  }
</style>