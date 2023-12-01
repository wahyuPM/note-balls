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
import { useStoreNotes } from '@/stores/storeNotes.js'

const storeNotes = useStoreNotes()

onMounted(() => {
  storeNotes.getNotes()
})
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>