<script setup lang="ts">
import Grid from '@/components/Grid.vue';
import { GridItem } from '@/components/GridItem.vue';
import InterchangeableThumbnail from '@/components/Interchangeable/InterchangeableThumbnail.vue';
import TrafficLight from "@/components/TrafficLight.vue";
import ILoveGazaThumbnail from "@/components/ILoveGaza/ILoveGazaThumbnail.vue";
import InternationalThumbnail from '@/components/International/InternationalThumbnail.vue';
import OvalThumbnail from '@/components/Oval/OvalThumbnail.vue';
import FingersThumbnail from '@/components/Fingers/FingersThumbnail.vue';
import CommunistShitThumbnail from '@/components/CommunistShit/CommunistShitThumbnail.vue';
import IsmmmThumbnail from '@/components/Ismmm/IsmmmThumbnail.vue';
import MeditationThumbnail from '@/components/Meditation/MeditationThumbnail.vue';
import CitiesThumbnail from '@/components/Cities/CitiesThumbnail.vue';
import LeavesThumbnail from '@/components/Leaves/LeavesThumbnail.vue';
import SwastikaThumbnail from '@/components/Swastika/SwastikaThumbnail.vue';
import HowAmIFeelingTodayThumbnail from '@/components/HowAmIFeelingToday/HowAmIFeelingTodayThumbnail.vue';
import TheMediumIsTheMessageThumbnail from '@/components/TheMediumIsTheMessage/TheMediumIsTheMessageThumbnail.vue';
import QuizThumbnail from '@/components/Quiz/QuizThumbnail.vue';
import GrabMeThumbnail from '@/components/GrabMe/GrabMeThumbnail.vue';
import ChurchThumbnail from '@/components/Church/ChurchThumbnail.vue';
import IsThisArtThumbnail from '@/components/IsThisArt/IsThisArtThumbnail.vue';
import HoldItThumbnail from '@/components/HoldIt/HoldItThumbnail.vue';


const items: GridItem[] = [
  { name: 'item 1', route: "" },
  { name: 'item 2', route: "" },
  { name: 'item 3', route: "" },
  { name: 'item 4', route: "" },
  { name: 'ILoveGaza', route: "ilovegaza", component: ILoveGazaThumbnail },
  { name: 'Interchangeable', route: "interchangeable", component: InterchangeableThumbnail },
  { name: 'Hail Mary', route: "hailmary", component: InterchangeableThumbnail },
  { name: 'International', route: "international", component: InternationalThumbnail },
  { name: 'Oval', route: "oval", component: OvalThumbnail },
  { name: 'Fingers', route: 'fingers', component: FingersThumbnail },
  { name: 'CommunistShit', route: 'communistshit', component: CommunistShitThumbnail },
  { name: 'Ismmm', route: 'ismmm', component: IsmmmThumbnail },
  { name: 'Leaves', route: 'leaves', component: LeavesThumbnail },
  { name: 'Swastika', route: 'swastika', component: SwastikaThumbnail },
  { name: 'Meditation', route: 'meditation', component: MeditationThumbnail },
  { name: 'Cities', route: 'cities', component: CitiesThumbnail },
  { name: 'Howamifeelingtoday', route: 'howamifeelingtoday', component: HowAmIFeelingTodayThumbnail},
  { name: 'TheMediumIsTheMessage', route: 'themediumisthemessage', component: TheMediumIsTheMessageThumbnail},
  { name: 'Quiz', route: 'quiz', component: QuizThumbnail},
  { name: 'GrabMe', route: 'grabme', component: GrabMeThumbnail},
  { name: 'Church', route: 'church', component: ChurchThumbnail},
  { name: 'IsThisArt', route: 'isthisart', component: IsThisArtThumbnail},
  { name: 'HoldIt', route: 'holdit', component: HoldItThumbnail},
];

</script>

<template>
  <main>
    <Grid :items="items" />
  </main>
</template>
