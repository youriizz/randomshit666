<template>
    <div class="responses">
      <div :class="{'response': true, 'response-true': true, 'playing': playing[0], 'correct': correctClicked, 'response-1': true}">
        <button @click.stop="handlePlay(0)" class="play-button">{{ playing[0] ? 'Stop' : 'Play ▶️' }}</button>
        <button v-if="playing[0]" @click.stop="handleAnswer(true, 0)" class="description">This One? 🤨</button>
      </div>
      <div :class="{'response': true, 'response-incorrect': clickedIncorrect[1], 'playing': playing[1], 'response-2': true}">
        <button @click.stop="handlePlay(1)" class="play-button">{{ playing[1] ? 'Stop' : 'Play ▶️' }}</button>
        <button v-if="playing[1]" @click.stop="handleAnswer(false, 1)" class="description">This One? 💃</button>
      </div>
      <div :class="{'response': true, 'response-incorrect': clickedIncorrect[2], 'playing': playing[2], 'response-3': true}">
        <button @click.stop="handlePlay(2)" class="play-button">{{ playing[2] ? 'Stop' : 'Play ▶️' }}</button>
        <button v-if="playing[2]" @click.stop="handleAnswer(false, 2)" class="description">This one? 🍸</button>
      </div>
    </div>
  </template>
  
  
  <script>
  import audio1 from '@/assets/Quiz/Question5/Police.mp3';
  import audio2 from '@/assets/Quiz/Question5/Pleasure.mp3';
  import audio3 from '@/assets/Quiz/Question5/War.mp3';
  
  export default {
    data() {
      return {
        audioFiles: [audio1, audio2, audio3],
        audioElements: [],
        clickedIncorrect: [false, false, false],
        correctClicked: false,
        playing: [false, false, false],
        descriptions: ['This One? 🤨', 'This One? 💃', 'This one? 🍸'],
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
    },
    mounted() {
      this.audioFiles.forEach((file) => {
        const audio = new Audio(file);
        this.audioElements.push(audio);
      });
    },
    beforeDestroy() {
      this.audioElements.forEach((audio) => {
        audio.pause();
        audio.src = '';
      });
    },
  };
  </script>
  
  <style scoped>
.responses {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 200px;
  box-sizing: border-box;
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
}

.response {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 30%;
  border: 0px solid black;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
}

.response-1 {
  top: 10%;
  left: 10%;
}

.response-2 {
  top: 50%;
  left: 30%;
}

.response-3 {
  top: 30%;
  left: 60%;
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
  width: 10vw;
  height: 10vw;
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

.response img {
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
    position: absolute;
    top: 10%;
    height: 90%;
  }
  .response {
    height: 15%;
    width: 60%;
  }

  .response-1 {
    top: 15%;
    left: 5%;
  }

  .response-2 {
    top: 45%;
    left: 30%;
  }

  .response-3 {
    top: 75%;
    left: 20%;
  }

  .description {
    bottom: auto;
    top: 50%;
    width: 20vw;
    height: 20vw;
    left: 60%;
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

.response:hover {
  background-color: none;
}
</style>

  