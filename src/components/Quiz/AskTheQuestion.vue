<template>
  <div class="ask-the-question">
    <transition name="fade" mode="out-in">
      <div v-if="showNext" class="next-question">
        <img :src="nextQuestionImage" alt="Next Question" />
      </div>
    </transition>
    <div v-if="showQuestion" class="question" :class="{ 'question-transition': startTransition }">
      <QuestionText 
        :text="currentQuestion.text" 
        :show="showQuestionText" 
        :slideEndX="currentQuestion.slideEndX"
        :slideEndY="currentQuestion.slideEndY"
        :scaleEndX="currentQuestion.scaleEndX"
        :scaleEndY="currentQuestion.scaleEndY"
        :scaleEnd="currentQuestion.scaleEnd"
      />
      <div :class="{'fade-question': true, 'fade-in': showQuestionComponent, 'fade-out': !showQuestionComponent}">
        <component :is="currentQuestion.component" @answered="handleAnswer" @correct-answer="handleCorrectAnswer" />
      </div>
    </div>
  </div>
</template>

<script>
import Question1 from './Question1.vue';
import Question2 from './Question2.vue';
import Question3 from './Question3.vue';
import Question4 from './Question4.vue';
import Question5 from './Question5.vue';
import Question6 from './Question6.vue';
import Question7 from './Question7.vue';
import QuestionText from './QuestionText.vue';
import nextQuestionImage from '@/assets/Quiz/nextquestion.webp';
import QuestionEnd from './QuestionEnd.vue';


export default {
  components: {
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
    Question7,
    QuestionEnd,
    QuestionText
  },
  data() {
    return {
      currentQuestionIndex: 0,
      showNext: false,
      showQuestion: true,
      showQuestionText: true,
      showQuestionComponent: true,
      startTransition: false,
      nextQuestionImage,
      questions: [
      {
    text: 'Question 1: What is the capital of France? 🇫🇷',
    component: 'Question1',
    delay: 2000, // Pas de délai
     },
    {
    text: 'Question 2: Which of these animals is a feline? 🐾',
    component: 'Question2',
    delay: 2000, // Pas de délai
     },
    {
    text: 'Question 3: Which song was made during the 90s? 🔊',
    component: 'Question3',
    delay: 2000, // Délai de 3 secondes
  },
  {
    text: 'Question 4 : What do you think is more enjoyable? ☀️',
    component: 'Question4',
    delay: 2000, // Pas de délai
     },
     {
    text: 'Question 5: Which one of these words relates the most to you? 🪞',
    component: 'Question5',
    delay: 2000, // Pas de délai
     },
    {
    text: 'Question 6: Which sound is higher pitched? ⬆',
    component: 'Question6',
    delay: 2000, // Pas de délai
     },
     {
    text: 'Question 7: What is the perfect penis size? 🍆',
    component: 'Question7',
    delay: 2000, // Pas de délai
     },
     {
    text: 'You made it to the end! 🥳 Make sure you stay on the website 😉',
    component: 'QuestionEnd',
    delay: 3000, // Délai de 3 secondes
  },
  
]

    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    handleAnswer() {
      console.log('Answer clicked');
      this.startTransition = true;
      setTimeout(() => {
        console.log('Start transition complete');
        this.showQuestionText = false; // Apply fade-out class to the question text
        this.showQuestionComponent = false; // Apply fade-out class to the component
        setTimeout(() => {
          this.showQuestion = false;
          setTimeout(() => {
            this.showNext = true;
            console.log('Next Question Component shown');
            this.startTransition = false;
            setTimeout(() => {
              this.showNext = false;
              console.log('Next Question Component hidden');
              setTimeout(() => {
                if (this.currentQuestionIndex < this.questions.length - 1) {
                  this.currentQuestionIndex++;
                  console.log(`Current question index: ${this.currentQuestionIndex}`);
                  this.showQuestion = true;
                  setTimeout(() => {
                      this.showQuestionText = true;
                      setTimeout(() => {
                        this.showQuestionComponent = true;
                        console.log('Question Component shown');
                      }, this.currentQuestion.delay); // Délai spécifique pour l'apparition du composant
                      console.log('Question Text shown');
                    }, 500); // Délai pour assurer que la transition est appliquée
                }
              }, 500); // Delay between the disappearance of "Next Question" and the appearance of the next question component
            }, 2000); // Duration for next question image to show and fade out
          }, 200); // 1 second delay before showing "Next Question"
        }, 1000); // Duration for fade-out
      }, 1000); // Adjust timing to match the animation duration
    },
    handleCorrectAnswer() {
      const correctElement = this.$el.querySelector('.response-true');
      if (correctElement) {
        correctElement.style.backgroundColor = 'green';
      }
    }
  }
};
</script>

<style scoped>
.ask-the-question {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

.question {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  transition: all 1s;
}

.question-transition {
  transform: scale(0.3) translate(-70%, -70%);
  top: 0;
  left: 0;
}

.next-question {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: -50%;
  transform: translate(-50%, -50%);
  animation: moveNext 4s forwards;
}

.next-question img {
  max-width: 100%;
  height: auto;
}

@keyframes moveNext {
  0% {
    left: -50%;
  }
  50% {
    left: 50%;
  }
  100% {
    left: 150%;
  }
}

@media (max-width: 1024px) {
  @keyframes moveNext {
    0% {
      left: -100%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 200%;
    }
  }
}

.fade-question {
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 1s;
}

.fade-question.fade-out {
  opacity: 0;
}

.fade-question.fade-in {
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
