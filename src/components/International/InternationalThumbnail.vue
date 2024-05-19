<template>
  <div class="container-1">
      <img src="@/assets/International/images/colombe.gif" alt="Colombe" class="colombe" width="100%" height="100%">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container-1 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

}

.colombe {
  display: flex;
  width: 100%;
  cursor: pointer;
  object-fit: cover;
  transition: filter 0.3s, transform 0.3s; /* Transition pour les filtres et les transformations */
}

.container-1:hover .colombe {
  filter: drop-shadow(4px 6px 8px black);
  transform: scale(0.8); /* Ajoute un léger zoom */
}

.container-1:active .colombe {
  filter: blur(5px);
}

@media (max-width: 600px) {
  

.colombe {
  filter: drop-shadow(4px 6px 8px black);
  transform: scale(0.8); /* Ajoute un léger zoom */
}
}

</style>
