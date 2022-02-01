<template>
  <div>
    <PageIntro title="SHOP" />
    <ShopList
        v-on:search="searchBy"
        v-on:filter="filterByCategory"
        :loading="loading" :products="filteredProducts" :categories="categories" />
  </div>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
import ShopList from "@/components/shop/ShopList";
import axios from 'axios';
export default {
  name: "Shop",
  components: {ShopList, PageIntro},
  data: function () {
    return {
      categories: [],
      products: [],
      filteredProducts: [],
      loading: false,
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      let categoriesURL = 'http://localhost:8080/category/all';
      let productsURL = 'http://localhost:8080/product/all';

      const requestCategories = axios.get(categoriesURL);
      const requestProducts = axios.get(productsURL);

      axios.all([requestCategories, requestProducts]).then(axios.spread((...responses) => {
        const responseCategories = responses[0]
        const responseProducts = responses[1]
        this.categories = responseCategories.data;
        this.categories.unshift({
          id:0,
          name: 'All',
        });
        this.products = responseProducts.data;
        this.filteredProducts = responseProducts.data;
        this.loading = false;
        // use/access the results
      })).catch(errors => {
        // react on errors.
        this.loading = false;
      })
    },
    filterByCategory(categoryId) {
      if(categoryId === 0 ){
        this.filteredProducts = this.products;
        return;
      }
      this.filteredProducts = [];
      for(let i = 0; i < this.products.length; i++) {
        if (this.products[i].category.id === categoryId) {
          console.log(this.products[i]);
          this.filteredProducts.push(this.products[i]);
        }
      }
      console.log(this.filteredProducts);
    },
    searchBy(text) {
      if(text === '') {
        this.filteredProducts = this.products;
        return;
      }
      this.filteredProducts = [];
      for(let i = 0; i < this.products.length; i++) {
        if (this.products[i].name.contains(text) || this.products[i].description.contains(text) ) {
          this.filteredProducts.push(this.products[i]);
        }
      }
    },
  }
}
</script>

<style scoped>

</style>