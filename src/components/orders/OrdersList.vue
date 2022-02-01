<template>
  <b-col md="8">
    <b-container style="margin-bottom: 20px">
      <b-row>
        <b-col>
          <h1>{{ title }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="separator full-width">

        </b-col>
      </b-row>
      <b-row v-if="orders.length === 0" class="margin-30">
        <b-col>
          <h2>You have no orders!</h2>
        </b-col>
      </b-row>
      <OrderRow
        class="border margin-30 order-row"
        v-for="order in orders"
        :order="order"
        :mode="mode"
        :key="order.id"
      />
    </b-container>
  </b-col>
</template>

<script>
import OrderRow from "@/components/orders/OrderRow";
export default {
  name: "OrdersList",
  components: {OrderRow},
  props: ['title', 'mode' ,'orders'],
  data: function() {
    return {

    }
  },
  methods: {

  },

}
</script>

<style scoped lang="scss">
.order-row {
  padding: 20px;
  text-align: center;
}
</style>