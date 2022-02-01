<template>
  <b-container>
    <b-row>
      <b-col class="left-text-col">
        <h5>Shipping Address</h5>
      </b-col>
    </b-row>
    <b-row class="checkout-form-row">
      <b-col class="left-text-col">
        <h6>Phone*</h6>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-input v-model="form.phone"/>
      </b-col>
    </b-row>

    <b-row class="checkout-form-row">
      <b-col class="left-text-col">
        <h6>Address*</h6>
      </b-col>
    </b-row>
    <b-row class="checkout-form-input">
      <b-col>
        <b-input v-model="form.street" placeholder="Street Address"/>
      </b-col>
    </b-row>
    <b-row class="checkout-form-input">
      <b-col>
        <b-input v-model="form.apartment" placeholder="Apartment,suite,unit etc"/>
      </b-col>
    </b-row>
    <b-row class="checkout-form-input">
      <b-col>
        <b-input v-model="form.city" placeholder="City"/>
      </b-col>
    </b-row>
    <b-row class="checkout-form-input">
      <b-col>
        <b-input v-model="form.county" placeholder="County"/>
      </b-col>
    </b-row>

    <b-row class="checkout-form-row">
      <b-col class="left-text-col">
        <h6>Postcode*</h6>
      </b-col>
    </b-row>

    <b-row class="checkout-form-input">
      <b-col>
        <b-input v-model="form.postcode" placeholder="Postcode/ZIP"/>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: "CheckoutForm",
  props: ['form'],
  data: function (){
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  .checkout-form-row {
    margin-top: 30px;
  }
  .checkout-form-input {
    margin-top: 10px;
  }
</style>