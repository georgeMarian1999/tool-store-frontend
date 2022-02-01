<template>
  <div>
    <PageIntro title="SHOPPING CART"/>
    <CartContent/>
  </div>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
import CartContent from "@/components/cart/CartContent";
export default {
  name: "Cart",
  components: {CartContent, PageIntro}
}
</script>

<style scoped>

</style>