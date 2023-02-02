<template>
  <b-container>
    <b-row style="margin-top: 30px;">
      <b-col  class="cart-list-col">
        <h4>Image</h4>
      </b-col>
      <b-col  class="cart-list-col">
        <h4>Product</h4>
      </b-col>
      <b-col  class="cart-list-col">
        <h4>Stock</h4>
      </b-col>
      <b-col class="cart-list-col">
        <h4>Delete</h4>
      </b-col>
      <b-col class="cart-list-col">
        <h4>Edit</h4>
      </b-col>
    </b-row>
    <b-row >
      <b-col class="separator full-width">

      </b-col>
    </b-row>
    <ProductEditRow
        v-on:deleteProduct="deleteProduct"
        v-on:editProduct="showModal"
        v-for="product in products"
        :key="product.id"
        :product="product"

    />
    <b-row >
      <b-col class="separator full-width">

      </b-col>
    </b-row>
    <b-modal  ref="edit-modal" hide-footer :title="modalTitle">
      <div class="d-block text-center">
        <b-form-group
            id="input-group-1"
            label="Name:"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              v-model="currentEditProduct.name"
              type="email"
              placeholder="Enter email"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Description:" label-for="input-2">
          <b-form-input
              id="input-2"
              v-model="currentEditProduct.description"
              placeholder="Enter description"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Stock:" label-for="input-3">
          <b-form-input
              id="input-3"
              v-model="currentEditProduct.stock"
              required
              >
          </b-form-input>
        </b-form-group>
      </div>
      <b-button class="mt-3" variant="outline-primary" block @click="editProduct">Edit</b-button>

      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </b-modal>
  </b-container>


</template>

<script>
import ProductEditRow from "@/components/products-edit/ProductEditRow.vue";
import axios from "axios";

export default {
  name: "ProductEditList",
  components: {ProductEditRow},
  data: function () {
    return {
      products: [],
      loading: false,
      currentEditProductId: null,
      currentEditProduct: {
        name: "",
        description: "",
        stock: ""
      }
    }
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    modalTitle() {
      if(this.currentEditProduct) {
        return 'Please edit product\n' + this.currentEditProduct.name
      }

    }
  },
  methods: {
    deleteProduct(id) {
      let deleteURL = 'http://localhost:8080/product/' + id;

      axios.delete(deleteURL).then(() => {
        this.getProducts();
      });
    },

    editProduct() {
      const editProductURL  = 'http://localhost:8080/product/' + this.currentEditProduct.id;

      const data = this.currentEditProduct;

      axios.put(editProductURL, data).then(r => {
        this.hideModal();
        this.getProducts();
      });

    },

    getProducts() {
      let productsURL = 'http://localhost:8080/product/all';


      const requestProducts = axios.get(productsURL);

      axios.all([ requestProducts]).then(axios.spread((...responses) => {
        const responseProducts = responses[0]
        this.products = responseProducts.data;
        this.loading = false;
        // use/access the results
      })).catch(errors => {
        // react on errors.
        this.loading = false;
      })
    },
    hideModal() {
      this.$refs['edit-modal'].hide();
      this.currentEditProduct = {
        name: "",
        description: "",
        stock: ""
      };

    },
    showModal(id) {
      // this.currentEditProductId = id;
      this.getProduct(id);
      this.$refs['edit-modal'].show();
    },
    getProduct(id) {
      const getProductURL = 'http://localhost:8080/product/viewProduct/' + id;

      axios.get(getProductURL).then(response => {
        this.currentEditProduct = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>