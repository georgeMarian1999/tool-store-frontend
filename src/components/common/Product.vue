<template>
  <div class="product">
      <router-link :to="routeToProduct">
        <img :src="product.image" height="170" width="170" alt="product-image">
      </router-link>
      <div class="product-price">
        <p :class="isSaleClass">{{actualPrice}}</p>
        <p v-if="product.sale" style="color: black">{{afterSalePrice}}</p>
        <ReviewStars :stars="product.stars" :font-scale="0.9"/>
      </div>
      <p>{{product.name}}</p>
    <div v-b-modal="modalId" @click="showModal" class="product-add-cart">Add to cart</div>

    <b-modal
        centered
        title="Add this product to cart"
        ok-disabled
        :visible="modal"
        cancel-disabled
        hide-footer
        :id="modalId" >
      <b-container>
        <b-row>
          <b-col md="4">
            <img :src="product.image" height="70" width="70" alt="product-image">
          </b-col>
          <b-col style="margin-top: 20px" md="4">
            <p>{{product.name}}</p>
          </b-col>
          <b-col style="margin-top: 10px" md="4">
            <ProductQuantity :increase-quantity="increaseQuantity" :decrese-quantity="decreaseQuantity" :quantity="quantity"/>
          </b-col>
        </b-row>
        <b-row class="margin-30">
          <b-col @click="hideModal" md="4" class="rectangle-button modal-button">
            Continue shopping
          </b-col>
          <b-col md="4">

          </b-col>
          <b-col @click="addProductToCart" md="4" class="rectangle-button modal-button">
            Add to cart
          </b-col>
        </b-row>
      </b-container>
    </b-modal>

    <div v-if="product.sale" class="product-sale">
      {{actualSale}}
    </div>
    <div v-if="product.newProduct" class="product-new">
      New!
    </div>
  </div>
</template>

<script>
import ReviewStars from "@/components/common/ReviewStars";
import ProductQuantity from "@/components/common/ProductQuantity";
export default {
  components: {ProductQuantity, ReviewStars},
  props: ['product'],
  name: "Product",
  data: function() {
    return {
      quantity: 1,
      modal: false,
    }
  },
  methods: {
    increaseQuantity() {
      if (this.quantity < this.product.stock) {
        this.quantity ++;
      }
    },
    decreaseQuantity() {
      if (this.quantity > 1)  {
        this.quantity --;
      }
    },
    hideModal() {
      this.modal = false;
      this.quantity = 1;
    },
    showModal() {
      this.modal = true;
    },
    addProductToCart() {
      this.modal = false;
      this.makeToast('success');
      let product = {
        id: this.product.id,
        image: this.product.image,
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock,
        quantity: this.quantity,
        sale: this.product.sale,
      }
      let that = this;
      let itemPresent = function(product) {
        return product.id === that.product.id;
      }
      let cart = JSON.parse(localStorage.getItem('cart'));
      let positionOfItemPresent = cart.findIndex(itemPresent);
      if (positionOfItemPresent !== -1) {
        cart[positionOfItemPresent].quantity = cart[positionOfItemPresent].quantity + this.quantity;
      }
      else {
        cart.push(product);
      }
      console.log(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    makeToast(variant = null) {
      this.$bvToast.toast('Items added to cart successfully!', {
        title: 'Success!',
        variant: variant,
        solid: true,
        autoHideDelay: 3000,
        appendToast: true,
      })
    },
  },
  computed: {
    actualPrice () {
      return "$" + this.product.price ;
    },
    afterSalePrice() {
      let discount = (this.product.sale * this.product.price) / 100;
      let newPrice = this.product.price - discount;
      return "$" + newPrice;
    },
    remainingStars () {
      return 5 - this.product.stars;
    },
    actualSale() {
      return '-' + this.product.sale + '%'
    },
    routeToProduct() {
      return '' + '/product/' + this.product.id;
    },
    isSaleClass() {
      return this.product.sale !== 0 ?  'cut-text' : 'black-text';
    },
    modalId() {
      return 'add-to-cart-modal-' + this.product.id;
    }
  }
}
</script>

<style scoped lang="scss">
  .product {
    display: flex;
    border: 1px solid white;
    position: relative;
    justify-content: space-evenly;
    width: 200px;
    margin-right: 10px;
    height: 300px;
    align-items: flex-start;
    flex-direction: column;
    padding: 15px;
    text-decoration: none;
  }
  .black-text {
    color: black;
  }
  .product:hover {
    border: 1px solid #42b983;
  }
  .fill-star {
    color: gold;
  }
  .star {
    color: gray;
  }
  .product-price {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .product-sale {
    position: absolute;
    top:30px;
    left:15px;
    font-size: 13px;
    background: red;
    border-radius: 50%;
    padding: 6px;
  }
  .product-new {
    position: absolute;
    top:30px;
    left:15px;
    font-size: 13px;
    background: red;
    border-radius: 50%;
    padding: 6px;
  }
  p {
    color: darkgrey;
    margin:0;
  }
  .product-add-cart {
    position: relative;
    text-align:center;
    background: #42b983;
    padding: 5px 10px;
    width: 100%;
    cursor: pointer;
  }
  .modal-button {
    font-size: 13px;
    padding: 8px;
  }
</style>