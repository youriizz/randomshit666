<template>
    <div class="responses">
      <div @click="handleClick(true, 0)" :class="{'response': true, 'response-true': true, 'correct': correctClicked, 'response-1': true}">
        <span>{{ response1 }}</span>
      </div>
      <div @click="handleClick(false, 1)" :class="{'response': true, 'response-incorrect': clickedIncorrect[1], 'response-2': true}">
        <span>{{ response2 }}</span>
      </div>
      <div @click="handleClick(false, 2)" :class="{'response': true, 'response-incorrect': clickedIncorrect[2], 'response-3': true}">
        <span>{{ response3 }}</span>
      </div>
      <div @click="handleClick(false, 3)" :class="{'response': true, 'response-incorrect': clickedIncorrect[3], 'response-4': true}">
        <span>{{ response4 }}</span>
      </div>
      <div @click="handleClick(false, 4)" :class="{'response': true, 'response-incorrect': clickedIncorrect[4], 'response-5': true}">
        <span>{{ response5 }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        response1: '형이상학적 변증법', // Correct answer
        response2: '책 읽는 시간을 즐겼다',
        response3: '깊은 바다 속',
        response4: '집',
        response5: '새로운 시작을 준비하고 있다',
        clickedIncorrect: [false, false, false, false, false],
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
  .response-1 { left: 30%; top: 5%; }
  .response-2 { left: 40%; top: -20%; }
  .response-3 { right: 0%; top: 30%; }
  .response-4 { left: 20%; top: 10%; }
  .response-5 { right: 10%; top: -10%; }
  
  .response-true.correct {
    background-color: rgb(0, 201, 0);
  }
  
  .response-incorrect {
    background-color: red;
    pointer-events: none;
    z-index: 10;
  }
  
  @media (max-width: 1200px) {
    .responses {
      flex-direction: column; /* Alignement en colonne pour les téléphones */
    }
  
    .response-1 { left: 10%; top: -10%; }
    .response-2 { left: 20%; top: 5%; }
    .response-3 { right: 30%; top: 5%; }
    .response-4 { left: 10%; top: 5%; }
    .response-5 { right: 0%; top: 15%; }
  }
  </style>
  