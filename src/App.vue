<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  font-family: "Helvetica neue", sans-serif;
  font-weight: 500;
}

* {
  -webkit-touch-callout: none;
  /* Disable callout, tap highlight, etc. */

  -webkit-user-select: none;
  /* Disable user select */
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
