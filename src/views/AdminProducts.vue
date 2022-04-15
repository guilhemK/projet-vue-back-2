<template>
    <div id="products" class="center">
        <ListProducts />
    </div>
</template>
<script>
import ListProducts from '@/components/ListProducts.vue'

export default {
  name: 'AdminProducts',
  components: {
    ListProducts
  }
}
</script>