<template>
  <div class="product-quantity">
    <div class="quantity-minus">
      <i @click="decreseQuantity" class="fas fa-minus clickable">

      </i>
    </div>
    <div class="quantity" >
      {{quantity}}
    </div>
    <i @click="increaseQuantity" class="fas fa-plus clickable"></i>
  </div>
</template>

<script>
export default {
  name: "ProductQuantity",
  props: ['quantity', 'increaseQuantity', 'decreseQuantity' , 'maximumQuantity'],
}
</script>

<style scoped lang="scss">
  .product-quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 140px;
    height: 50px;
    border: 1px solid #e1e1e1;
    padding: 0 13px;
  }
  .quantity-minus {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .quantity-minus,
  .quantity-plus {
    cursor: pointer;
  }
  .disabled {

  }
</style>