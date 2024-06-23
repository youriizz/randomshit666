<template>
    <div class="responses">
      <div @click="handleClick(false, 1)" :class="{'response': true, 'response-incorrect': clickedIncorrect[1], 'response-2': true}">
        <span>{{ word2 }}</span>
      </div>
      <div @click="handleClick(false, 2)" :class="{'response': true, 'response-incorrect': clickedIncorrect[2], 'response-3': true}">
        <span>{{ word3 }}</span>
      </div>
      <div @click="handleClick(false, 3)" :class="{'response': true, 'response-incorrect': clickedIncorrect[3], 'response-4': true}">
        <span>{{ word4 }}</span>
      </div>
      <div @click="handleClick(false, 4)" :class="{'response': true, 'response-incorrect': clickedIncorrect[4], 'response-5': true}">
        <span>{{ word5 }}</span>
      </div>
      <div @click="handleClick(false, 5)" :class="{'response': true, 'response-incorrect': clickedIncorrect[5], 'response-6': true}">
        <span>{{ word6 }}</span>
      </div>
      <div @click="handleClick(false, 6)" :class="{'response': true, 'response-incorrect': clickedIncorrect[6], 'response-7': true}">
        <span>{{ word7 }}</span>
      </div>
      <div @click="handleClick(true, 0)" :class="{'response': true, 'response-true': true, 'correct': correctClicked, 'response-1': true}">
        <span>{{ word1 }}</span>
      </div>
      <div @click="handleClick(false, 7)" :class="{'response': true, 'response-incorrect': clickedIncorrect[7], 'response-8': true}">
        <span>{{ word8 }}</span>
      </div>
      <div @click="handleClick(false, 8)" :class="{'response': true, 'response-incorrect': clickedIncorrect[8], 'response-9': true}">
        <span>{{ word9 }}</span>
      </div>
      <div @click="handleClick(false, 9)" :class="{'response': true, 'response-incorrect': clickedIncorrect[9], 'response-10': true}">
        <span>{{ word10 }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        word1: 'Human',
        word2: 'Intelligent',
        word3: 'Beautiful',
        word4: 'Open',
        word5: 'Curious',
        word6: 'Persuasive',
        word7: 'Innovative',
        word8: 'Courageous',
        word9: 'Ambitious',
        word10: 'Creative',
        clickedIncorrect: [false, false, false, false, false, false, false, false, false, false],
        correctClicked: false
      };
    },
    methods: {
      handleClick(isCorrect, index) {
        if (isCorrect) {
          this.correctClicked = true;
          this.$emit('answered');
        } else {
          const newClickedIncorrect = [...this.clickedIncorrect];
          newClickedIncorrect[index] = true;
          this.clickedIncorrect = newClickedIncorrect;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .responses {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* Permet aux conteneurs de se répartir sur plusieurs lignes */
    justify-content: center;
    align-items: center;
  }
  
  .response {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border: 0px solid black;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative;
    margin: 5px;
  }
  
  .response span {
    font-size: clamp(20px, 4vw, 30px); /* Ajustez la taille de la police selon vos besoins */
  }
  
  /* Ajout de classes spécifiques pour chaque conteneur */
  .response-1 { left: 20%; top: 20%; }
  .response-2 { left: 0%; top: -20%; }
  .response-3 { right: 10%; top: 30%; }
  .response-4 { left: 10%; top: -30%; }
  .response-5 { left: 0%; top: 40%; }
  .response-6 { right: 0%; top: 10%; }
  .response-7 { left: 0%; top: -10%; }
  .response-8 { top: 30%; }
  .response-9 { right: 15%; top: 0%; }
  .response-10 { left: 0%; top: -20%; }
  
  .response-true.correct {
    background-color: rgb(0, 201, 0);
  }
  
  .response-incorrect {
    background-color: red;
    pointer-events: none;
    z-index: 10;
  }
  
  @media (max-width: 1024px) {
    .responses {
      flex-direction: column; /* Alignement en colonne pour les téléphones */
    }
  
    .response-1 { left: 10%; top: 0%; }
    .response-2 { left: 20%; top: 5%; }
    .response-3 { right: 30%; top: 0%; }
    .response-4 { left: 25%; top: 0%; }
    .response-5 { left: 0%; top: 0%; }
    .response-6 { right: 20%; top: 0%; }
    .response-7 { left: 20%; top: 0%; }
    .response-8 { top: 0%; }
    .response-9 { right: 25%; top: 0%; }
    .response-10 { left: 25%; top: 0%; }
  }
  </style>
  