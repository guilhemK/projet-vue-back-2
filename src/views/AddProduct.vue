<template>
    <div id="addProduct" class="center">
        <NewProduct />
    </div>
</template>
<script>
import NewProduct from '@/components/NewProduct.vue'

export default {
  name: 'AddProduct',
  components: {
    NewProduct
  }
}
</script>