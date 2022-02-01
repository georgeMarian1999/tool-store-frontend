<template>
  <div class="home">
    <HomeIntro/>
    <Statistics/>
    <ProductList :loading="loading" :products="this.onSaleProducts" list-type="On sale products"/>
    <AccountService/>
    <ProductList :products="this.newProducts" list-type="New products"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeIntro from "@/components/home/HomeIntro";
import Statistics from "@/components/home/Statistics";
import AccountService from "@/components/home/AccountService";
import ProductList from "@/components/common/ProductList";
import axios from "axios";

export default {
  name: 'Home',
  components: {
    ProductList,
    AccountService,
    Statistics,
    HomeIntro,
    HelloWorld
  },
  data: function () {
    return {
      onSaleProducts: [
        {
          id:1,
          name: 'Camera',
          image: 'https://preview.colorlib.com/theme/locksmith/img/product/xproduct-1.jpg.pagespeed.ic.7oB0ETxrUy.webp',
          price:  55,
          stars:  3,
          sale: 15
        },
        {
          id:2,
          name: 'Camera',
          image: 'https://preview.colorlib.com/theme/locksmith/img/product/xproduct-1.jpg.pagespeed.ic.7oB0ETxrUy.webp',
          price:  55,
          stars:  4,
          sale: 15,
        },
        {
          id:3,
          name: 'Camera',
          image: 'https://preview.colorlib.com/theme/locksmith/img/product/xproduct-1.jpg.pagespeed.ic.7oB0ETxrUy.webp',
          price:  55,
          stars:  4,
          sale: 10,
        },
        {
          id:4,
          name: 'Camera',
          image: 'https://preview.colorlib.com/theme/locksmith/img/product/xproduct-1.jpg.pagespeed.ic.7oB0ETxrUy.webp',
          price:  55,
          stars:  4,
          sale: 20,
        },
      ],
      newProducts: [],
      loading: false,
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      const onSaleProductsURL = 'http://localhost:8080/product/allOnSale';
      const newProductsURL = 'http://localhost:8080/product/allNew';

      const requestOnSaleProducts = axios.get(onSaleProductsURL);
      const requestNewProducts = axios.get(newProductsURL);

      axios.all([requestOnSaleProducts, requestNewProducts]).then(axios.spread((...responses) => {
        const responseOnSaleProducts = responses[0]
        const responseNewProducts = responses[1]
        this.onSaleProducts = responseOnSaleProducts.data;
        this.newProducts = responseNewProducts.data;
        this.loading = false;
        // use/access the results
      })).catch(errors => {
        // react on errors.
        this.loading = false;
      })
    },
  }
}
</script>
