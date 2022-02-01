<template>
  <div class="product-details">
    <div class="product-details-image-wrapper">
      <img class="product-details-image" :src="product.image" alt="Product">
    </div>
    <div class="product-details-text">
      <div class="product-details-text-header">
        <h6 class="subtitle">{{product.category.name}}</h6>
        <h2>{{product.name}}</h2>
        <div class="product-details-price">
          <h5 :class="isSaleClass">${{product.price}}</h5>
          <h4 v-if="product.sale" class="subtitle">{{afterSalePrice}}</h4>
        </div>
        <div class="product-details-separator separator"></div>
      </div>
      <div class="product-details-actions">
        <ProductQuantity :increase-quantity="plusQuantity" :decrese-quantity="minusQuantity" :quantity="quantity"/>
        <div class="product-add-cart" @click="addToCart">Add to cart</div>
        <div class="product-rating">
            <b-icon v-for="number in stars" :key="number" class="fill-star"  icon="star-fill" font-scale="1.5"/>
            <b-icon v-for="n in remainingStars" :key="n" class="star" icon="star-fill" font-scale="1.5"/>
        </div>
      </div>
      <div class="product-details-description">
        <p>{{product.description}}</p>
        <div class="separator"></div>
        <h5>Category: <b>{{product.category.name}}</b></h5>
        <h5>In stock: <b>{{product.stock}}</b></h5>
      </div>
    </div>
  </div>
</template>

<script>
import ProductQuantity from "@/components/common/ProductQuantity";
export default {
  name: "ProductDetails",
  components: {ProductQuantity},
  props: ['product','stars'],
  data: function() {
    return {
      quantity: 1,
    }
  },
  computed: {
    remainingStars() {
      return 5 - this.stars;
    },
    afterSalePrice() {
      let discount = (this.product.sale * this.product.price) / 100;
      let newPrice = this.product.price - discount;
      return "$" + newPrice;
    },
    isSaleClass() {
      return this.product.sale !== 0 ?  'cut-text' : 'subtitle';
    },

  },
  mounted() {

  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast('Items added to cart successfully!', {
        title: 'Success!',
        variant: variant,
        solid: true,
        autoHideDelay: 5000,
        appendToast: true,
      })
    },
    addToCart() {
      this.makeToast('success');
      let product = {
        id: this.product.id,
        image: this.product.image,
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock,
        quantity: this.quantity,
        sale: this.product.sale
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
    minusQuantity() {
      let quantity = this.quantity;
      if (quantity-- > 1)
        this.quantity--;
    },
    plusQuantity() {
      let quantity = this.quantity;
      if (quantity++ < this.product.stock) {
        this.quantity++;
      }
    }
  },
}
</script>

<style scoped lang="scss">
  .product-details {
    width: 100%;
    display: flex;
    height: 700px;
    justify-content: center;
    align-items: center;
  }
  .product-details-image-wrapper {
    height: 70%;
    width: 30%;
  }
  .product-details-text {
    display: flex;
    padding-top: 105px;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    height: 100%;
    width: 45%;
  }
  .product-details-text-header {
    display: flex;
    text-transform: uppercase;
    height: 30%;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: space-evenly;
  }
  .product-details-image {
    width: 100%;
    max-height: 100%;
    height: auto;
  }
  .product-details-separator {
    width: 100%;
  }
  .product-details-actions {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .product-add-cart {
    width: 25%;
    cursor: pointer;
    background: #42b983;
    color: white;
    display: flex;
    padding: 5px 10px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  .product-details-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 40%;
    width: 100%;
  }
  .product-details-description p, {
    margin-top: 20px;
  }
</style>