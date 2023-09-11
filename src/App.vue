<template>
  <NavBar />
  <div class="container is-max-dekstop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
// import
import NavBar from '@/components/Layouts/Navbar.vue'

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>