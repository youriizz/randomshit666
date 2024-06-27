<template>
  <div class="container-1">
      <img src="/IsThisArt/picasso.gif" alt="Animated Heart" class="gif-picasso">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.gif-picasso {
  display: block;
  max-width: 80%;
  max-height: 80%;
  cursor: pointer;
  object-fit: contain;
}

.container-1:active, .container-1:hover {
  background-color: rgb(0, 0, 0);
}
</style>
