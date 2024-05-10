<script setup lang="ts">
import Grid from '@/components/Grid.vue';
import { GridItem } from '@/components/GridItem.vue';
import NetflixThumbnail from '@/components/Netflix/NetflixThumbnail.vue';
import TrafficLight from "@/components/TrafficLight.vue";

const items: GridItem[] = [
  { name: 'item 1', route: "" },
  { name: 'item 2', route: "" },
  { name: 'item 3', route: "" },
  { name: 'item 4', route: "" },
  { name: 'item 5', route: "" },
  { name: 'Netflix', route: "netflix", component: NetflixThumbnail },
];

</script>

<template>
  <main>
    <Grid :items="items" />
    <TrafficLight />
  </main>
</template>
