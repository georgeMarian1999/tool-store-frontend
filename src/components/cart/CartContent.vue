<template>
  <b-container class="cart">
    <b-row class="cart-content">
      <b-col v-if="cart.length > 0" md="8">
        <CartList
            :continue-shopping="continueShopping"
            :clear-cart="clearCart"
            :change-quantity-product="changeQuantityProduct"
            :delete-product="deleteProduct"
            :cart="cart" />
      </b-col>
      <b-col v-else md="8">
        <h2>Your cart is empty!</h2>
      </b-col>
      <b-col md="4">
        <Subtotal :title="'Cart total'" :location="location" :subtotal="subtotal" :not-logged-in="notLoggedIn"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CartList from "@/components/cart/CartList";
import Subtotal from "@/components/common/Subtotal";
export default {
  name: "CartContent",
  components: {Subtotal, CartList},
  data: function() {
    return {
      cart: [
        {
          id: 1,
          img: 'data:image/webp;base64,UklGRqQDAABXRUJQVlA4IJgDAAAQEgCdASpaAFoAPm02lEgkIyIhJXVaqIANiWkAHageUBmgG1L4XfUx9Zu2rneMjSX49PQzzi/Rv/b9wX9Tv+B0x3spfrMViXk5hmNg5jYmxqVHTyH0xPuAWtkDkDmz20u6MKarQ1l5pjXoQcKTWFQP6WsGY2OSVOW/w3f5J9im0KbHv2MO2XPAPtsMn1KIj7k9c3LwlqUA+gAA/vyoA0lKlU0igKDsbDqhguKDYmFp5J639riFgHHF7bCYlWirDLno/5Upg+v+nKPrqkxDLlPmMhs7pADz/wIxP/mM/+0dUmyQmwtveKWpkYoWIWzzc61y1fisHwiCcQgrh36/sd/J2z9aEsuaGvhZMvfpkm5o4h902rVGNTrlxUDWF5yvmJ70Mj8wli7f6vvwK4brto+e+55B/SpAcuYRiwitnmRJGFOlplBelY8s/1hllvy/elDzXn4wwLiYDyBFLlS49PECJSRHivbfXu8XebZJrBx1Z2vMHG0vJetVEHP8zOErrkhzStIbQTgkZ2tc1b3e/C/VktnOP55FIipBkZn8SlQVBuMYql+RKaxczOtEABCRtkLlwZDOzPLxNPtDc/Frw50qDZiH5APd9qMMXAcmvoJF88+hN/XK68JOaFJ93l+6nWDZk/1teq9PlH3aNazUaaFb7+FBCny9BMrkI1mQFIcKVakWdFka8s/Bi8pF5OSN9+CpqD+bLwCFTIvkF1l5BiKCA5etPlmxPZzjrrr/APjAqWjlznKCVBH4FWpYCyj80xXMUI8NdB7npcIceAs8qZ56FaVKSeh3EPN0CAyCdRjurVK2z9Hv27vaMJPH5qBw/97gjLSY9zzgg5GIJuXH5XzvAPRbMHp3/q6ddBQ1RqQoxiZDRkg3hPt3yPtQzUh2cwCiBJr/SXT5nC4FZob7FFL4n/hqMnAyM3RGmhk3veFD//SEcgPqyW/ykXrYX/v1Kr5/kf8gh/4KQ7T6ZHs2afn+/CsnE5t0jACJBbpeW5C+cQQuYGZdPy4TZvtnv5SMcurKiUjSCovTIc/NCXv+x/tbUeNCMvVGoRZ5EMrDAr/nHuUuY35gYGErgrg0zPj+2Yr4EjjMH4gTjDaasWK9Z1QTfK9qdsH1FS1w21Jj0xYfq5kpsHUkpn8MLv/qnWOvR6zYK8K4fAU3V/q64atzsxBp6Etllb/HxEmtnJeXNH/p3/wVeP6yf9Jd8jDkKY5M32WEX7YVwAAAAA==',
          name: 'Camera',
          quantity: 2,
          price: 15,
        },
        {
          id: 2,
          img: 'https://preview.colorlib.com/theme/locksmith/img/cart/xcart-3.jpg.pagespeed.ic.tyOrJ3cXho.webp',
          name: 'Lock',
          quantity: 1,
          price: 30,
        },
        {
          id: 3,
          img : 'https://preview.colorlib.com/theme/locksmith/img/cart/xcart-4.jpg.pagespeed.ic.9Y7KYWI1OY.webp',
          name: 'Smart lock',
          quantity: 1,
          price: 25,
        }
      ]
    }
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  },
  methods: {
    changeQuantityProduct(id, quantity) {
      this.cart[this.cart.findIndex((el) => {
        el.id === id;
      })] = quantity;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    deleteProduct(id) {
      function isNotProduct(value) {
        return value.id !== id;
      }
      this.cart = this.cart.filter(isNotProduct);
      console.log(this.cart);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart = [];
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    continueShopping(){
      this.$router.push('/shop');
    }
  },
  computed: {
    subtotal() {
      let subtotal = 0;
      for(let i = 0 ; i < this.cart.length; i++) {
        subtotal = subtotal + ((this.cart[i].price - (this.cart[i].price * this.cart[i].sale)/100) * this.cart[i].quantity);
      }
      return subtotal;
    },
    location() {
      return this.cart.length !== 0 ? 'cart' : 'order';
    },
    notLoggedIn() {
      let user = JSON.parse(sessionStorage.getItem('crtUser'));
      return user === null;
    }
  }
}
</script>

<style scoped lang="scss">
  .cart {
    width: 100%;
    height: 100%;
    margin-left: 100px;
    margin-right: 80px;
  }
  .cart-content {
    margin-top: 60px;
    height: 100%;
  }
</style>