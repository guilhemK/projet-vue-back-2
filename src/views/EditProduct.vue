<template>
    <div id="editProduct" class="center">
        <UpdateProduct />
    </div>
</template>
<script>
import UpdateProduct from '@/components/UpdateProduct.vue'

export default {
  name: 'EditProduct',
  components: {
    UpdateProduct
  }
}
</script>