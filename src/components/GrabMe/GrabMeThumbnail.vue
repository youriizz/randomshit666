<template>
  <div class="container-thumbnail">
    <img :src="teethred" alt="Teeth Red" class="teethred">
    <img :src="sweetchoice" alt="Sweet Choice" class="sweetchoice">
    <div class="sweetchoicetext">SWEET CHOICE</div>
  </div>
</template>

<script>
import teethred from '@/assets/GrabMe/teethred.gif';
import sweetchoice from '@/assets/GrabMe/photosweetchoice.jpg';

export default {
  data() {
    return {
      teethred,
      sweetchoice
    };
  }
}
</script>

<style scoped>
.container-thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  flex-direction: column; /* Adjust if you want them in a column, or use row for side by side */
  height: 100%; /* Adjust as needed */
  width: 100%;
  cursor: pointer;
}

.teethred, .sweetchoice {
  position: absolute;
  width: 100%;
  height: 100%;
}


.sweetchoice {
  z-index: 2;
}

.sweetchoicetext {
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: clamp(20px, 7vw, 50px);
  font-family: Helvetica Neue;
  font-weight: 900;
  z-index: 1;
}

.container-thumbnail:hover .sweetchoice {
  display: none;
}

@media (max-width: 1024px) {
  .sweetchoice {
  display: none;
}
}
</style>
