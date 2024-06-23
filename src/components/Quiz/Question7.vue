<template>
    <img :src="Ruler" alt="Ruler" class="ruler-image" />
    <div class="responses">
      <div
        v-for="(response, index) in responses"
        :key="index"
        @click="handleClick(response.correct, index)"
        :class="{
          response: true,
          'response-true': response.correct,
          correct: correctClicked,
          'response-incorrect': clickedIncorrect[index]
        }"
      >
        <span>{{ response.text }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import Ruler from '@/assets/Quiz/Question7/Ruler.png';
  
  export default {
    data() {
      return {
        responses: [
          { text: 'Higher', correct: false },
          { text: '14.14cm', correct: false },
          { text: '13.13cm', correct: false },
          { text: '12.12cm', correct: false },
          { text: '11.11cm', correct: false },
          { text: '10.10cm', correct: false },
          { text: '9.99cm', correct: false },
          { text: '8.88cm', correct: false },
          { text: '7.77cm', correct: false },
          { text: '6.66cm', correct: true },
          { text: '5.55cm', correct: false },
          { text: '4.44cm', correct: false },
          { text: '3.33cm', correct: false },
          { text: '2.22cm', correct: false },
          { text: '1.11cm', correct: false },
        ],
        clickedIncorrect: Array(15).fill(false),
        correctClicked: false,
        Ruler
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
    top: 0%;
    display: flex;
    flex-direction: column; /* Alignement en colonne pour tous les écrans */
    justify-content: center;
    align-items: center;
    position: relative; /* Assurez-vous que les éléments positionnés sont relatifs au conteneur */
  }
  
  .ruler-image {
    position: absolute;
    right: -40%;
    top: 50%;
    transform: translateY(-80%) rotate(-90deg); /* Faire pivoter l'image de 90 degrés */
    height: 80%; /* Ajustez la taille selon vos besoins */
    z-index: -1; /* Assurez-vous que l'image est derrière les réponses */
  }
  
  .response {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% / 15); /* Chaque réponse prend 1/15ème de la hauteur */
    width: 100%;
    border: 0px solid black;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .response span {
    font-size: clamp(15px, 3vw, 20px); /* Ajustez la taille de la police selon vos besoins */
    padding-left: 200px; /* Décalage vers la gauche */
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
    .ruler-image {
    position: absolute;
    right: -50%;
    top: 50%;
    transform: translateY(-80%) rotate(-90deg); /* Faire pivoter l'image de 90 degrés */
    height: 80%; /* Ajustez la taille selon vos besoins */
  }
  .responses {
    top: 13%;
  }
  .response span {
    padding-left: 100px; /* Décalage vers la gauche */

  }
  }
  </style>
  