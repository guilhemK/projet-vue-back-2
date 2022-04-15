<template>
    <div id="addCustomer" class="center">
        <NewCustomer />
    </div>
</template>
<script>
import NewCustomer from '@/components/NewCustomer.vue'

export default {
  name: 'AddCustomer',
  components: {
    NewCustomer
  }
}
</script>