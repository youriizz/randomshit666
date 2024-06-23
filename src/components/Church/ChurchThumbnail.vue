<template>
  <div class="container-thumbnail">
    <img :src="sainte" alt="Teeth Red" class="sainte">
    <div class="sweetchoicetext">SWEET CHOICE</div>
  </div>
</template>

<script>
import sainte from '@/assets/Church/sainte.gif';


export default {
  data() {
    return {
      sainte,
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

.sainte {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}

.sainte:hover {
  filter: blur(2px);
}

.sainte:active {
  filter: blur(6px);
}

@media (max-width: 1024px) {
  .sainte {
  position: absolute;
  max-width: 125%;
  max-height: 100%;
}
}
</style>
