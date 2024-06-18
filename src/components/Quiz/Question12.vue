<template>
    <div class="responses">

        <div @click="handleClick(false, 1)" :class="{'response': true, 'response-incorrect': clickedIncorrect[1]}">
        <span>{{ response1 }}</span>
      </div>
      <div @click="handleClick(false, 2)" :class="{'response': true, 'response-incorrect': clickedIncorrect[2]}">
        <span>{{ response2 }}</span>
      </div>
      <div @click="handleClick(true, 0)" :class="{'response': true, 'response-true': true, 'correct': correctClicked}">
        <span>{{ response3 }}</span>
      </div>
    
   
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        response1: "You're lying",
        response2: "Shut the fuck up. Just do what I say",
        response3: "You're right. I apologise to you. You are the master of my mind and my body",
        clickedIncorrect: [false, false, false],
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
    flex-direction: column; /* Alignement en ligne par défaut pour les ordinateurs */
    justify-content: center;
    align-items: center;
    font-size: 200px;
  }
  
  .response {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 2px solid black;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .response span {
    font-size: clamp(20px, 4vw, 40px); /* Ajustez la taille de la police selon vos besoins */
    padding: 30px;
    text-align: center;
    
  }
  
  .response-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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
    .responses {
      flex-direction: column; /* Alignement en colonne pour les téléphones */
    }
  
    .response {
      height: 33%;
      width: 100%;
    }
  }
  </style>
  