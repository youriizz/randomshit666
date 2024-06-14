<template>
  <div class="layer-up" @scroll="handleScroll" ref="scrollContainer">
    <div class="content" ref="contentContainer">
      <div class="item item1">
        <div class="image-container">
          <div class="spacer"></div>
          <img :src="book" alt="Centered Image" class="centered-img" />
          <div class="spacer"></div>
        </div>
      </div>
      <div class="spacer-ordi"></div>
      <div class="item item2">
        <div class="image-container">
          <div class="spacer"></div>
          <img :src="discussion" alt="Centered Image" class="centered-img" />
          <div class="spacer"></div>
        </div>
      </div>
      <div class="spacer-ordi"></div>
      <div class="item item3">
        <div class="image-container">
          <div class="spacer"></div>
          <img :src="tv1" alt="Centered Image" class="centered-img" />
          <div class="spacer"></div>
        </div>
      </div>
      <div class="spacer-ordi"></div>
      <div class="item item4">
        <div class="image-container">
          <div class="spacer"></div>
          <img :src="radio" alt="Centered Image" class="centered-img" />
          <div class="spacer"></div>
        </div>
      </div>
      <div class="spacer-ordi"></div>
      <div class="item item5">
        <div class="image-container">
          <div class="spacer"></div>
          <img :src="phone" alt="Centered Image" class="centered-img" />
          <div class="spacer"></div>
        </div>
      </div>
      <div class="spacer-ordi"></div>
      <div class="item item6">
        <div class="image-container">
          <div class="spacer"></div>
          <TrafficLight class="traffic-light-component"
            :orange-route="orangeRoute"
            :green-route="greenRoute"
            :relative-size="false" />
          <div class="spacer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import book from '@/assets/TheMediumIsTheMessage/book.webp';
import tv1 from '@/assets/TheMediumIsTheMessage/tv1.webp';
import discussion from '@/assets/TheMediumIsTheMessage/discussion.webp';
import radio from '@/assets/TheMediumIsTheMessage/radio.webp';
import phone from '@/assets/TheMediumIsTheMessage/phone.webp';
import TrafficLight from '../TrafficLight.vue';

export default {
  components: {
    TrafficLight
  },
  data() {
    return {
      book: book,
      tv1: tv1,
      discussion: discussion,
      radio: radio,
      phone: phone,
      orangeRoute: 'similar',
      greenRoute: 'notsimilar'
    };
  },
  methods: {
    handleScroll(event) {
      const scrollTop = event.target.scrollTop;
      this.$emit('scroll', scrollTop);
    }
  }
};
</script>

<style scoped>
.layer-up {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 1;
  background-color: transparent;
}

.content {
  position: relative;
  width: 100%;
  height: 100%;
}

.item {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;     /* Center vertically */
}

.image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.spacer {
  flex-grow: 1;
  width: 100%;
  background-color: white;
}

.spacer-ordi {
    height: 10%;
    background-color: white;
  }

.centered-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .spacer-ordi {
    height: 50%;
    background-color: white;
  }
}


</style>
