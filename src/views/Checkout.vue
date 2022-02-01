<template>
  <div>
    <PageIntro title="Checkout"/>
    <CheckoutContent/>
  </div>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
import CheckoutContent from "@/components/checkout/CheckoutContent";
export default {
  name: "Checkout",
  components: {CheckoutContent, PageIntro},
  mounted() {
    let user = JSON.parse(sessionStorage.getItem('crtUser'));
    if (user ===  null){
      this.$router.push('/cart');
    }
  }
}
</script>

<style scoped lang="scss">

</style>