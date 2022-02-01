<template>
  <div>
    <b-icon v-for="number in stars"  class="fill-star"  icon="star-fill" :font-scale="fontScale"/>
    <b-icon v-for="n in remainingStars"  class="star" icon="star-fill" :font-scale="fontScale"/>
  </div>
</template>

<script>
export default {
  name: "ReviewStars",
  props: ['fontScale', 'stars'],
  computed: {
    remainingStars() {
      return 5 - this.stars;
    }
  },
}
</script>

<style scoped>

</style>