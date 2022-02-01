<template>
    <b-container class="product-reviews">
      <b-row>
        <b-col style="text-align: left">
          <h3>Reviews</h3>
        </b-col>

      </b-row>
      <b-row style="width: 100%">
        <b-col class="separator"></b-col>
      </b-row>
      <b-row class="product-reviews-header">
        <b-col>
          <h4>User</h4>
        </b-col>
        <b-col>
          <h4>Review</h4>
        </b-col>
        <b-col>
          <h4>Stars</h4>
        </b-col>
      </b-row>

      <Review v-for="(review,index) in reviews" :key="index" :review="review"/>
    </b-container>

</template>

<script>
import Review from "@/components/product/Review";
export default {
  name: "ProductReviews",
  props: ['reviews'],
  components: {Review},
  data: function() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  .product-reviews {
    width: 100%;
  }
  .product-reviews-header {
    width: 100%;
    padding-top: 20px;
  }
</style>