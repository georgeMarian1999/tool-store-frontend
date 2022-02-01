<template>
  <div class="statistics">
    <StatisticItem v-for="stat in stats" :icon-name="stat.iconName" :number="stat.number" :text="stat.text"/>
  </div>
</template>

<script>
import StatisticItem from "@/components/home/StatisticItem";
export default {

  name: "Statistics",
  data:  function() {
    return {
      stats: [
        {
          iconName: 'people-fill',
          number: '26k',
          text: 'Customers'
        },
        {
          iconName: 'globe',
          number: '10',
          text: 'Countries'
        },
        {
          iconName: 'shield-fill-check',
          number: '28k+',
          text: 'Partners online'
        },
        {
          iconName: 'award-fill',
          number: '14',
          text: 'Award winner'
        },
        {
          iconName: 'cart-check-fill',
          number: '65k+',
          text: 'Products sold'
        }
      ],
    }
  },
  components: {StatisticItem}
}
</script>

<style scoped lang="scss">
  .statistics {
    display: flex;
    width: 100%;
    height: 300px;
    background: #42b983;
    align-items: center;
    justify-content: space-between;
  }
</style>