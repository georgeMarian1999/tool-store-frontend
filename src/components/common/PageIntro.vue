<template>
  <div class="page-intro">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "PageIntro",
  props: ['title']
}
</script>

<style scoped lang="scss">
  .page-intro {
    display: flex;
    color: white;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-image: url('../../assets/images/about.jpeg');
    background-repeat: no-repeat;
    text-transform: uppercase;
  }
</style>