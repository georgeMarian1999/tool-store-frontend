<template>
  <div>
    <PageIntro title="Order confirmed!!"/>
    <b-container>
      <b-row>
        <b-col>
          <h2>Your order is confirmed!</h2>
        </b-col>
      </b-row>
      <b-row class="margin-30">
        <b-col class="rectangle-button">
          Go to my orders!
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PageIntro from "@/components/common/PageIntro";
export default {
  name: "Confirmation",
  components: {PageIntro}
}
</script>

<style scoped>

</style>