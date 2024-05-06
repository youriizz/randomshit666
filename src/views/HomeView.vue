<script setup>
import Grid from '@/components/Grid.vue';

const items = [
  {name: 'item 1'},
  {name: 'item 2'},
  {name: 'item 3'},
  {name: 'item 4'},
  {name: 'item 5'},
  {name: 'Netflix', route: "netflix"},
];

</script>

<template>
  <main>
    <Grid :items="items" />
  </main>
</template>
