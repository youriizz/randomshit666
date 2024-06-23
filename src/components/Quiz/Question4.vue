<template>
    <div class="responses">
      <div @click="handleClick(true, 0)" :class="{'response': true, 'response-true': true, 'correct': correctClicked, 'response-1': true}">
        <img :src="img1" alt="Image 1" />
      </div>
      <div @click="handleClick(false, 1)" :class="{'response': true, 'response-incorrect': clickedIncorrect[1], 'response-2': true}">
        <img :src="img2" alt="Image 2" />
      </div>
      <div @click="handleClick(false, 2)" :class="{'response': true, 'response-incorrect': clickedIncorrect[2], 'response-3': true}">
        <img :src="img3" alt="Image 3" />
      </div>
    </div>
  </template>
  
  <script>
  import img1 from '@/assets/Quiz/Question4/chinatoys.webp';
  const img2 = 'https://pngfre.com/wp-content/uploads/mountain-38-768x450.png';
  const img3 = 'https://www.picng.com/upload/beach/png_beach_5512.png';
  
  export default {
    data() {
      return {
        img1,
        img2,
        img3,
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
    flex-direction: row; /* Alignement en ligne par défaut pour les ordinateurs */
    justify-content: center;
    align-items: center;
    font-size: 200px;
  }
  
  .response {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    width: 33%;
    border: 0px solid black;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative; /* Ajouté pour pouvoir déplacer les conteneurs */
  }
  
  .response img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  /* Ajout de classes spécifiques pour chaque conteneur */
  .response-1 {
    left: 20%; /* Exemple de déplacement à gauche */
    top: 25%;
    height: 50%;
  }
  
  .response-2 {
    top: -25%;
  }
  
  .response-3 {
    right: 10%; /* Exemple de déplacement à gauche */
    top: 20%;
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
      width: 60%;
    }
  
    .response-1 {
    left: 10%; /* Exemple de déplacement à gauche */
    top: 60%;
    height: 50%;
  }
  
  .response-2 {
    top: -35%;
  }
  
  .response-3 {
    right: 10%; /* Exemple de déplacement à gauche */
    top: -30%;
  }
  }
  </style>
  