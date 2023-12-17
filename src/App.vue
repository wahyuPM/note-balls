<template>
  <NavBar />
  <div class="container is-max-dekstop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
// import
import { onMounted } from 'vue';
import NavBar from '@/components/Layouts/Navbar.vue'
import { useStoreAuth } from '@/stores/storeAuth.js'

const storeAuth = useStoreAuth()

onMounted(() => {
  storeAuth.init()
})

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>