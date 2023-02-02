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
import axios from "axios";

export default {
  name: "ProductsEdit",
  components: {ProductEditList, PageIntro},

  mounted() {
    let testDeadLockURL1 = "http://localhost:8080/product/test-deadlock/2/3";
    let testDeadLockURL2 = "http://localhost:8080/product/test-deadlock/3/2";


    axios.put(testDeadLockURL1);
    axios.put(testDeadLockURL2);
  }
}
</script>

<style scoped>

</style>