<template>
    <div class="responses">
      <div @click="handleClick(false, 0)" :class="{'response': true, 'response-incorrect': clickedIncorrect[0]}">
        <span>{{ response1 }}</span>
      </div>
      <div @click="handleClick(false, 1)" :class="{'response': true, 'playing': playing[1], 'response-incorrect': clickedIncorrect[1], 'response-audio': true}">
        <button @click.stop="handlePlay(1)" class="play-button">{{ playing[1] ? 'Stop' : 'Play ▶️' }}</button>
        <button v-if="playing[1]" @click.stop="handleAnswer(false, 1)" class="description">This Option? </button>
      </div>
      <div @click="handleClick(true, 2)" :class="{'response': true, 'response-true': true, 'correct': correctClicked}">
        <img :src="death" alt="Image 2" class="image-skull"/>
      </div>
    </div>
  </template>
  
  <script>
  import audio1 from '@/assets/Quiz/Question14/dyingaudio.mp3';
  import death from '@/assets/Quiz/Question14/death.gif';
  
  export default {
    data() {
      return {
        response1: "As soon as I leave randomshit666.com",
        death,
        audio1,
        audioFiles: [null, audio1, null],
        audioElements: [null, new Audio(audio1), null],
        clickedIncorrect: [false, false, false],
        correctClicked: false,
        playing: [false, false, false]
      };
    },
    methods: {
      handlePlay(index) {
        // Stop any playing audio
        this.audioElements.forEach((audio, i) => {
          if (i !== index && this.playing[i]) {
            audio.pause();
            audio.currentTime = 0;
            this.playing[i] = false;
          }
        });
  
        // Toggle play/pause for the clicked audio
        if (this.playing[index]) {
          this.audioElements[index].pause();
          this.audioElements[index].currentTime = 0;
        } else {
          this.audioElements[index].play();
        }
        this.playing[index] = !this.playing[index];
      },
      handleAnswer(isCorrect, index) {
        if (isCorrect) {
          this.correctClicked = true;
          this.$emit('answered');
        } else {
          this.clickedIncorrect[index] = true;
        }
      },
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
    },
    beforeDestroy() {
      this.audioElements.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    }
  };
  </script>
  
  <style scoped>
  .responses {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 200px;
  }
  
  .response {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%;
    border: 2px solid black;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .response span {
    font-size: clamp(20px, 4vw, 40px);
    padding: 30px;
    text-align: center;
  }
  
  .play-button {
    font-size: 1.5rem;
    padding: 3vw;
    border-radius: 20%;
    z-index: 1;
    background-color: rgb(241, 241, 241);
  }
  
  .description {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: clamp(10px, 4vw, 30px);
    color: #000000;
    width: 30vw;
    height: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgb(241, 241, 241);
  }
  
  .response.playing .play-button {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .response-true.correct {
    background-color: rgb(0, 201, 0);
  }
  
  .response-incorrect {
    background-color: red;
    pointer-events: none;
    z-index: 10;
  }

  .image-skull {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
  
  @media (max-width: 1024px) {
    .responses {
      flex-direction: column;
    }
  
    .response {
      height: 33%;
      width: 100%;
    }
  
    .description {
      bottom: auto;
      top: 50%;
      left: auto;
      right: 10%;
      transform: translateY(-50%);
    }
  
    .response.playing .play-button {
      top: 50%;
      bottom: auto;
      left: 10%;
      transform: translateY(-50%);
    }
  }
  </style>
  