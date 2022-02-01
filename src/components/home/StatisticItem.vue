<template>
  <div class="statistic-item">
    <b-icon class="statistic-item-icon" :icon="iconName" font-scale="4"></b-icon>
    <h1>
      {{number}}
    </h1>
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  props: ['iconName', 'number', 'text'],
  name: "StatisticItem"
}
</script>

<style scoped lang="scss">
  .statistic-item {
    display: flex;
    padding:30px;
    width: 100%;
    height: 240px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  h1 {
    color:white
  }
  .statistic-item-icon {
    color: #2c3e50;
  }
</style>