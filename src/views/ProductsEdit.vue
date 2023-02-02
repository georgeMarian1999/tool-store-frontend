<template>
  <b-container style="margin:0; padding: 0; max-width: 100%">
    <PageIntro title="All products"/>
     <b-row class="all-products">
        <ProductEditList/>
     </b-row>
  </b-container>
</template>

<script>
import PageIntro from "@/components/common/PageIntro.vue";
import ProductEditList from "@/components/products-edit/ProductEditList.vue";

export default {
  name: "ProductsEdit",
  components: {ProductEditList, PageIntro}
}
</script>

<style scoped>

</style>