<script setup lang="ts">
import Grid from '@/components/Grid.vue';
import { GridItem } from '@/components/GridItem.vue';
import NetflixThumbnail from '@/components/Netflix/NetflixThumbnail.vue';
import AnotherThumbnail from '@/components/AnotherThumbnail.vue';
import TrafficLight from "@/components/TrafficLight.vue";
import ILoveGazaThumbnail from "@/components/ILoveGaza/ILoveGazaThumbnail.vue";


const items: GridItem[] = [
  { name: 'item 1', route: "" },
  { name: 'item 2', route: "",  component: AnotherThumbnail },
  { name: 'item 3', route: "" },
  { name: 'item 4', route: "" },
  { name: 'ILoveGaza', route: "ilovegaza", component: ILoveGazaThumbnail },
  { name: 'Netflix', route: "netflix", component: NetflixThumbnail },
];

</script>

<template>
  <main>
    <Grid :items="items" />
    <TrafficLight />
  </main>
</template>
