<template>
  <div>
    <!-- Introduction Component -->
    <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['scroll-up', 'scroll-down']"
      :buttonText="startButtonText"
      :clickThrough="true"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
    <div class="section-1 purgatory">
      <div class="purgatory-text heaven">
        Heaven
        <span class="arrow up"></span>
      </div>
      <div class="purgatory-text hell">
        Hell
        <span class="arrow down"></span>
      </div>
      <img :src="Crucifix1" alt="Eglise" class="centered-image main-image"/>
      <img :src="Crucifix1phone" alt="Eglise" class="centered-image fallback-image"/>
      Purgatory
    </div>
  </div>
</template>




<script>
import Introduction from '../GestureIndications/Introduction.vue';
import Crucifix1 from '@/assets/Church/crucifix1.png';
import Crucifix1phone from '@/assets/Church/crucifix1phone.jpg'; // Ajoutez une nouvelle image
import thecross from '@/assets/Church/thecross.mp3';

export default {
  components: {
    Introduction
  },
  name: "Purgatory",
  data() {
    return {
      Crucifix1,
      Crucifix1phone, // Ajoutez la nouvelle image aux données
      showIntroduction: true,
      title: 'Church',
      description: 'Duration : 2 Minutes',
      startButtonText: 'Start',
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
      globalClickCount: 0,
      audio: new Audio(thecross)
    };
  },
  methods: {
    handleStart() {
      this.showIntroduction = false; // Hide the Introduction component
      this.audio.play(); // Play the sound
    },
    stopAudio() {
      this.audio.pause();
      this.audio.currentTime = 0; // Optional: reset audio to the beginning
    }
  }
};
</script>




  
<style scoped>

.purgatory {
  height: 100%;
  position: absolute;
}
.section-1 {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column; /* Ensure vertical alignment */
  align-items: center;
  justify-content: center;
  background: gray;
}

.centered-image {
  max-width: 1000%;
  max-height: 110%;
  position: absolute; /* Center image within the parent */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-image {
  display: block;
}

.fallback-image {
  display: none;
}

.purgatory-text {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: clamp(24px, 4vw, 40px);
  color: white;
  z-index: 1;
}

.heaven {
  top: 0;
  margin-top: 10px;
}

.hell {
  bottom: 0;
  margin-bottom: 10px;
}

.arrow {
  display: inline-block;
  margin-left: 8px;
}

.arrow.up::after {
  content: '↑';
}

.arrow.down::after {
  content: '↓';
}


@media (max-width: 1024px) {
  .main-image {
    display: none;
  }
  .heaven {
  top: 0;
  margin-top: 15vh;
}
  .hell {
  bottom: 0;
  margin-bottom: 15vh;
}

  .fallback-image {
    display: block;
    max-height: 160%;
  }
}

@media (max-width: 768px) {
  .fallback-image {
    display: block;
    max-height: 110%;
  }
}
</style>

