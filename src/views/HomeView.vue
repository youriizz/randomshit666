<script setup>
import Grid from '@/components/Grid.vue';

const items = [
  {key: '1', name: 'item 1'},
  {key: '2', name: 'item 2'},
  {key: '3', name: 'item 3'},
  {key: '4', name: 'item 4'},
  {key: '5', name: 'item 5'},
];

</script>

<template>
  <main>
    <Grid :items="items" />
  </main>
</template>
