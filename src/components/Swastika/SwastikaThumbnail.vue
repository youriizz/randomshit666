<template>
  <div class="container-1">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container-1 {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.round {
  position: absolute;
  height: 25%;
  width: 25%;
  border: 2px solid black;
  background-color: white;
  border-radius: 50%;
  animation: Rotate 3s linear infinite;
}

@media (max-width:768px) {
  .round {
    height: 20%;
    width: 20%;
  }
}

@keyframes Rotate {
  0%, 100% {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
}

</style>
