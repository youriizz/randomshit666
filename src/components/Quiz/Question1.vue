<template>
  <div class="responses">
    <div @click="handleClick(true)" :class="{'response': true, 'response-true': true, 'correct': correctClicked }">Paris</div>
    <div @click="handleClick(false)" :class="{'response': true, 'response-incorrect': clickedIncorrect}">Berlin</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickedIncorrect: false,
      correctClicked: false
    };
  },
  methods: {
    handleClick(isCorrect) {
      if (isCorrect) {
        this.correctClicked = true;
        this.$emit('answered');
      } else {
        this.clickedIncorrect = true;
      }
    }
  }
};
</script>

<style scoped>
.responses {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: clamp(50px, 10vw, 200px);
}

.response {
  height: 50%;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  border: 2px solid black;
  box-sizing: border-box;
}

.response-true.correct {
  background-color: rgb(0, 201, 0);
}

.response-incorrect {
  background-color: red;
  pointer-events: none;
  z-index: 10;
}

@media (max-width: 1024px) {
  .response:hover {
  background-color: none;
}
}


</style>
