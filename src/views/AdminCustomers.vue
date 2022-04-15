<template>
    <div id="customers" class="center">
        <ListCustomers />
    </div>
</template>
<script>
import ListCustomers from '@/components/ListCustomers.vue'

export default {
  name: 'AdminCustomers',
  components: {
    ListCustomers
  }
}
</script>