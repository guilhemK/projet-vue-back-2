<template>
    <div id="orders" class="center">
        <ListOrders />
    </div>
</template>
<script>
import ListOrders from '@/components/ListOrders.vue'

export default {
  name: 'AdminOrders',
  components: {
    ListOrders
  }
}
</script>
