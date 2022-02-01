<template>
  <b-overlay :show="loading" rounded="sm" class="shop-list">
    <div class="shop-list-filter">
      <div class="shop-list-filter-search">
        <b-input-group>
          <b-form-input v-model="search" placeholder="Search"></b-form-input>
          <b-input-group-text>
            <b-icon @click="searchBy" style="color: #42b983; cursor: pointer"  icon="search" />
          </b-input-group-text>
        </b-input-group>
      </div>
      <div class="shop-list-filter-categories">
        <h4><b>Categories</b></h4>
        <div @click="filterProducts(category.id)"  class="category" v-for="category in categories">{{category.name}}</div>
      </div>
    </div>
    <div class="shop-list-items">
      <b-pagination
          v-model="currentPage"
          @change="onPageChange"
          :per-page="perPage"
          :total-rows="products.length"
      ></b-pagination>
      <ProductList :products="crtPageItems"/>
    </div>
  </b-overlay>
</template>

<script>
import ProductList from "@/components/common/ProductList";
export default {
  name: "ShopList",
  components: {ProductList},
  props : ['categories', 'products', 'loading'],
  data:  function () {
    return {
      currentPage: 1,
      crtPageItems: this.products,
      perPage: 8,
      search: '',
    }
  },
  methods: {
    createPager(page_size, page_number) {
      let itemsToPaginate = this.products;
      this.crtPageItems = itemsToPaginate.slice(
          page_number * page_size,
          (page_number + 1) * page_size,
      )

    },
    filterProducts(id) {
      this.$emit('filter', id);
    },
    searchBy() {
      this.$emit('search', this.search);
    },
    getNumberOfPages(listLength) {
      let pages = listLength / 8.0;
      if (pages % 1 !== 0) {
        return Math.trunc(pages) + 1;
      }
      else return Math.trunc(pages);
    },
    onPageChange(page) {
      this.createPager(this.perPage, page - 1);
    }
  },
  mounted() {
    this.createPager(this.perPage, 0);
  },
  watch: {
    currentPage: function(oldPage, newPage) {
      console.log("Old page was:", oldPage);
      console.log("New page iw:", newPage);
    },
    loading: function(newVal,oldVal) {
      this.createPager(this.perPage, 0);
    },
    products: function (newVal, oldVal) {
      this.createPager(this.perPage, 0);
    }
  }

}
</script>

<style scoped lang="scss">
  .shop-list {
    display: flex;
    width: 100%;
    padding-left: 150px;
    padding-top: 50px;
    height: 100vh;
  }
  .shop-list-filter {
    display: flex;
    margin-top: 15px;

    text-align: left;
    height: 400px;
    width: 25%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
  .shop-list-items {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    height: 100%;
    width: 100%;
  }
  .shop-list-filter-categories {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 45%;
    justify-content: space-evenly;
  }
  .shop-list-search {
    width: 100%;
    border: 0.5px solid gray;
  }
  .input-button {
    color: #42b983;
    background: white;
    border: 1px solid gray;
  }
  .category {
    cursor: pointer;
  }
</style>