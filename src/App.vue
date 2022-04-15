<template>
  <div id="app">
    <AdminNav />
    <router-view/>
  </div>
</template>
<script>
import AdminNav from '@/components/AdminNav.vue'

export default {
  name: 'App',
  components: {
    AdminNav
  }
}
</script>
<style lang="scss">
#app {
  display: flex;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.center {
  margin: auto;
}
.action-button {
    background-color: white;
    padding: 5px 15px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    color: #171628;
    font-size: 15px;
    transition: 0.3s all;
    margin-top: 5px;
    cursor: pointer;
    &:hover {
        background-color: #171628;
        color: white;
    }
}
.short {
    padding: 5px 23px
}
</style>
