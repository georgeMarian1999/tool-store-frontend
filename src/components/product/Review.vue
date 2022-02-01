<template>
  <b-row class="product-review">
    <b-col class="product-review-column">{{review.user.name}}</b-col>
    <b-col class="product-review-column">{{review.rating}}</b-col>
    <b-col class="product-review-column">
      <ReviewStars :stars="review.stars" :font-scale="1.5"/>
    </b-col>
  </b-row>
</template>

<script>
import ReviewStars from "@/components/common/ReviewStars";
export default {
  name: "Review",
  components: {ReviewStars},
  props: ['review']
}
</script>

<style scoped lang="scss">
  .product-review {
    width: 100%;
    border: 2px solid gray;
    margin-top: 10px;
    height: 150px;
  }
  .product-review-column {
    justify-content: center;
    display: flex;
    align-items: center;
  }
</style>