<template>
  <b-col md="8">
    <b-container class="margin-60-bottom">
      <b-row>
        <b-col>
          <h1>Order details</h1>
        </b-col>
        <b-col>
          <h3>Status: {{order.orderStatus}}</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="separator full-width">

        </b-col>
      </b-row>

      <b-row class="margin-30 border padding-10">
        <b-col class="left-text-col" md="6">
          <h4>Date:</h4>
        </b-col>
        <b-col>
          <h4>{{order.date}}</h4>
        </b-col>
      </b-row>

      <b-row class="margin-30 border padding-10">
        <b-col class="left-text-col" md="6">
          <h4>Phone:</h4>
        </b-col>
        <b-col>
          <h4>{{order.phone}}</h4>
        </b-col>
      </b-row>

      <b-row class="margin-30 border padding-10">
        <b-col class="left-text-col" md="6">
          <h4>Street:</h4>
        </b-col>
        <b-col>
          <h4>{{order.street}}</h4>
        </b-col>
      </b-row>

      <b-row class="margin-30 border padding-10">
        <b-col class="left-text-col" md="6">
          <h4>Apartment:</h4>
        </b-col>
        <b-col>
          <h4>{{order.apartment}}</h4>
        </b-col>
      </b-row>

      <b-row class="margin-30 border padding-10">
        <b-col class="left-text-col" md="6">
          <h4>County:</h4>
        </b-col>
        <b-col>
          <h4>{{order.county}}</h4>
        </b-col>
      </b-row>

      <b-row class="margin-30 border padding-10">
        <b-col class="left-text-col" md="6">
          <h4>City:</h4>
        </b-col>
        <b-col>
          <h4>{{order.city}}</h4>
        </b-col>
      </b-row>

      <b-row class="margin-30 border padding-10">
        <b-col class="left-text-col" md="6">
          <h4>Postcode:</h4>
        </b-col>
        <b-col>
          <h4>{{order.postcode}}</h4>
        </b-col>
      </b-row>
    </b-container>

  </b-col>
</template>

<script>
export default {
  name: "OrderDetails",
  props: ['order'],

}
</script>

<style scoped lang="scss">

</style>