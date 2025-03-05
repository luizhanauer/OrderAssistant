<script setup>
import Header from './components/layout/Header.vue'
import Body from './components/layout/Body.vue'
import Footer from './components/layout/Footer.vue'

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-grow">
      <Body />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
