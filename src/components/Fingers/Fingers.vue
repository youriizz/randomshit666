<template>
  <div>
    <!-- Introduction Component -->
    <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['scroll-down']"
      :buttonText="startButtonText"
      :clickThrough="true"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
  <div class="big-container">
    <div class="container-left"></div>
    <div class="container-middle">
      <component
        v-for="(container, index) in containers"
        :key="index"
        :is="container.type"
        :text="container.text"
        :height="container.height"
        :additional-styles="container.additionalStyles"
        class="dynamic-container"
      ></component>
    </div>
    <div class="container-right"></div>
    <div class="traffic-light-container">
      <TrafficLightBtn lightType="red" />
      <TrafficLightBtn lightType="orange" :orangeRoute="'similar'" />
      <TrafficLightBtn lightType="green" :greenRoute="'notsimilar'" />
    </div>
  </div>
  </div>
</template>

  
  <script>
  import MorningContainer from './MorningContainer.vue';
  import AfternoonContainer from './AfternoonContainer.vue';
  import EveningContainer from './EveningContainer.vue';
  import MidnightContainer from './MidnightContainer.vue';
  import TitleContainer from './TitleContainer.vue'
  import TrafficLightBtn from '../TrafficLightBtn.vue';
  import GestureIndications from '../GestureIndications/GestureIndications.vue';
  import Introduction from '../GestureIndications/Introduction.vue';


  
  export default {
    components: {
      MorningContainer,
      AfternoonContainer,
      EveningContainer,
      MidnightContainer,
      TitleContainer,
      TrafficLightBtn,
      GestureIndications,
      Introduction

    },
    data() {
      return {
        showIntroduction: true,
      title: 'A story',
      description: 'Duration : 3 Minutes',
      startButtonText: 'Start',
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
        containers: [
          { type: 'MorningContainer', text: '', height: 50, additionalStyles: { fontSize: 'clamp(40px, 4vw, 75px)' , justifyContent: 'center', hoverColor: 'rgb(257, 265, 183)' }  },
          { type: 'MorningContainer', text: 'yellow = 09:00', height: 70, additionalStyles: { fontSize: 'clamp(40px, 4vw, 75px)' , justifyContent: 'center', hoverColor: 'rgb(257, 265, 183)' } },
          { type: 'MorningContainer', text: 'The birds are singing.', height: 50, additionalStyles: { justifyContent: 'center'  }},
          { type: 'AfternoonContainer', text: 'pink = 14:00', height: 70, additionalStyles:{ fontSize: 'clamp(40px, 4vw, 75px)' , justifyContent: 'center'}  },
          { type: 'AfternoonContainer', text: 'The flowers are blooming.', height: 50, additionalStyles: { justifyContent: 'center'  } },
          { type: 'EveningContainer', text: 'red = 20:00', height: 70, additionalStyles:{ fontSize: 'clamp(40px, 4vw, 75px)' , justifyContent: 'center'}  },
          { type: 'EveningContainer', text: 'The sun is setting.', height: 50, additionalStyles: { justifyContent: 'center'  } },
          { type: 'MidnightContainer', text: 'black = 00:00', height: 70, additionalStyles:{ fontSize: 'clamp(40px, 4vw, 75px)' , justifyContent: 'center'}  },
          { type: 'MidnightContainer', text: 'The car suddenly stops.', height: 50, additionalStyles: { justifyContent: 'center'  } },
          { type: 'TitleContainer', text: 'A story.', height: 80, additionalStyles: { textDecoration: 'underline', alignItems : 'center'} },
          { type: 'MorningContainer', text: 'This morning, when she woke up, she decided to take a cold shower.', height: 70},
          { type: 'MorningContainer', text: 'Once, she saw in a magazine that water running over your body helps you to think straight.', height: 70},
          { type: 'MorningContainer', text: "She never understood the reason why", height: 70},
          { type: 'MorningContainer', text: "Because even in the shower, she thinks she's probably too different to think in a normal way.", height: 140},
          { type: 'AfternoonContainer', text: "Just after eating lunch, he didn't feel like working again right away.", height: 70},
          { type: 'AfternoonContainer', text: "- I need some fresh air, why don't we go for a walk?", height: 70},
          { type: 'AfternoonContainer', text: "He walks to the park", height: 70},
          { type: 'AfternoonContainer', text: "And when he comes to the park, he always remembers", height: 70},
          { type: 'AfternoonContainer', text: "He remembers the way his mother used to take him by the hand to the big oak three.", height: 70},
          { type: 'AfternoonContainer', text: "It's been a while since he lasts saw his mother.", height: 70},
          { type: 'AfternoonContainer', text: "He's not that young anymore. and it scares him at night", height: 70},
          { type: 'MidnightContainer', text: "Just as he's about to go to sleep.", height: 140},
          { type: 'EveningContainer', text: "It's the evening and she's at a bar, talking with her friends.", height: 70},
          { type: 'EveningContainer', text: "It's the evening and he's having dinner on his balcony.", height: 70},
          { type: 'EveningContainer', text: "The summer air is warm outside.", height: 70},
          { type: 'EveningContainer', text: "They're all talking", height: 70},
          { type: 'EveningContainer', text: "They're all talking about their boyfriends but she doesn't have one anymore.", height: 140},
          { type: 'EveningContainer', text: "On his balcony, he sees the people walking in the street from above", height: 70},
          { type: 'EveningContainer', text: "When he sees the people walking, he tries to think about their occupations, why they are walking and where they are heading.", height: 70},
          { type: 'EveningContainer', text: "Himself, he would like to know where he's heading, where he's walking and what would make him go straight in a direction.", height: 70},
          { type: 'EveningContainer', text: "But he doesn't know", height: 70},
          { type: 'MidnightContainer', text: "Maybe he doesn't know just yet.", height: 140},
          { type: 'EveningContainer', text: "She's still at the bar but she's not talking with her friends", height: 70},
          { type: 'EveningContainer', text: "Her head is elsewhere, somewhere wandering above the clouds.", height: 70},
          { type: 'AfternoonContainer', text: "During the afternoon, she has had a bad time trying to figure out what were these bad thoughts that were following her.", height: 70},
          { type: 'AfternoonContainer', text: "She thought that she could fight them and get better but after two months, they had come back", height: 70},
          { type: 'AfternoonContainer', text: "They had come back to haunt her for a reason, and she was trying to figure out what this reason was.", height: 70},
          { type: 'AfternoonContainer', text: "Maybe she didn't know it yet.", height: 150},
          { type: 'MidnightContainer', text: "It's midnight", height: 70},
          { type: 'MidnightContainer', text: "The streets are now empty, there's no people walking outside anymore.", height: 70},
          { type: 'MidnightContainer', text: "But around the corner, she hears the sound of an automobile approaching, and slow down in front of a house.", height: 70},
          { type: 'MidnightContainer', text: "The car just stopped driving.", height: 160},
          { type: 'AfternoonContainer', text: "When he was still in the park, in front of the oak three, something had caught his attention", height: 70},
          { type: 'AfternoonContainer', text: "There was an enveloppe, hidden between the branches, with his name on it.", height: 70},
          { type: 'AfternoonContainer', text: "He thought the enveloppe wasn't for him, it couldn't be for him", height: 70},
          { type: 'AfternoonContainer', text: "The oak three was his secret place, he hadn't told no one about it.", height: 70},
          { type: 'AfternoonContainer', text: "Except this other person.", height: 70},
          { type: 'AfternoonContainer', text: "But it couldn't be ...", height: 170},
          { type: 'MidnightContainer', text: "The car just stopped driving.", height: 70},
          { type: 'MidnightContainer', text: "A man gets out of the car.", height: 70},
          { type: 'MidnightContainer', text: "She watches from a distance.", height: 70},
          { type: 'MidnightContainer', text: "Despite the darkness, she recognises his face", height: 70},
          { type: 'MidnightContainer', text: "He has changed a lot since the last time she saw him.", height: 70},
          { type: 'MidnightContainer', text: "He lights up a cigarette and smokes, waiting.", height: 70},
          { type: 'MidnightContainer', text: "Still hiding, she thinks again about the way her bad thoughts had come back when she woke up this morning", height: 70},
          { type: 'MorningContainer', text: "When she woke up this morning, she knew directly that something had happened inside of her.", height: 70},
          { type: 'MorningContainer', text: "She didn't remember what had happened last night, and she didn't know was she would do tonight", height: 70},
          { type: 'MorningContainer', text: "She thought the cold shower could help her understand, but it only made it worse.", height: 70},
          { type: 'MorningContainer', text: "She thought she would never understand", height: 70},
          { type: 'MorningContainer', text: "But she had a plan in mind.", height: 70},
          { type: 'MidnightContainer', text: "Now, watching the car and the man in the empty street, she slowly begun to understand what was haunting her.", height: 180},
          { type: 'MidnightContainer', text: "After he stopped the car, he thought he would smoke a cigarette", height: 70},
          { type: 'MidnightContainer', text: "It's really dark outside but now, he hopes that he hasn't come for nothing", height: 70},
          { type: 'MidnightContainer', text: "So he waits,", height: 70},
          { type: 'MidnightContainer', text: "He waits for her.", height: 190},
          { type: 'MidnightContainer', text: "She's still hiding from him.", height: 70},
          { type: 'MidnightContainer', text: "It's really dark outside and she doesn't feel comfortable in the dark.", height: 70},
          { type: 'MidnightContainer', text: "But now, her thoughts are clear again.", height: 70},
          { type: 'MidnightContainer', text: "She knows exactly what she has to do.", height: 70},
          { type: 'MidnightContainer', text: "She gets out of the corner and show herself to him.", height: 200},
          { type: 'MidnightContainer', text: "He sees her,", height: 70},
          { type: 'MidnightContainer', text: "He remembers.", height: 70},
          { type: 'MidnightContainer', text: "He starts walking towards her.", height: 70},
          { type: 'AfternoonContainer', text: "When he had taken the enveloppe he just knew that she had placed it there.", height: 70},
          { type: 'AfternoonContainer', text: "She was the only person he had talked about the oak three.", height: 70},
          { type: 'AfternoonContainer', text: "He had taken the enveloppe and recognised the way she wrote, the way she wrote him letters.", height: 70},
          { type: 'AfternoonContainer', text: "She had written many letters, even more after they stopped seeing each other.", height: 70},
          { type: 'MidnightContainer', text: "Now, seeing her, he thinks he should have answered to those letters.", height: 70},
          { type: 'AfternoonContainer', text: "Written on the enveloppe, was a time and place", height: 70},
          { type: 'MidnightContainer', text: "Midnight. 58 Birmingham St.", height: 210},
          { type: 'MidnightContainer', text: "She hears the sound of the bell tolling the twelve strokes of midnight.", height: 70},
          { type: 'MidnightContainer', text: "He's walking towards her", height: 70},
          { type: 'MidnightContainer', text: "She hears her name coming from his mouth", height: 70},
          { type: 'MidnightContainer', text: "She responds and begins walking in his direction.", height: 70},
          { type: 'MidnightContainer', text: "As she's getting closer, she knows exactly what she has to do", height: 70},
          { type: 'MidnightContainer', text: "Her bad thoughts from the morning went away and her mind is now clear.", height: 220},
          { type: 'MidnightContainer', text: "As he's closing the distance, he opens his arms in order to hug her", height: 70},
          { type: 'MidnightContainer', text: "But she doesn't want a hug.", height: 70},
          { type: 'MidnightContainer', text: "She hasn't come here to get a hug.", height: 70},
          { type: 'MidnightContainer', text: "She takes the gun out of her right pocket and points it towards him.", height: 70},
          { type: 'MidnightContainer', text: "He looks surpised", height: 70},
          { type: 'MidnightContainer', text: "But she had sent so many letters", height: 70},
          { type: 'MidnightContainer', text: "And she hadn't got any response.", height: 330},
          { type: 'MorningContainer', text: "In the morning, the police found two bodies lying on the ground at 58 Birmingham St. Both bodies had been killed by pistol fire.", height: 50},
          { type: 'MorningContainer', text: "The circumstances of this tragedy are still unclear, but we believe that the woman took revenge on the man before killing herself.", height: 50},
          { type: 'MorningContainer', text: "The terrorist hypothesis can therefore be ruled out, as this was probably a simple love affair.", height: 50},
          { type: 'MorningContainer', text: "Thank you", height: 150},
  








          
          
        
          // Ajoute autant de conteneurs que nécessaire
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  .big-container {
    position: absolute;
    width: 100%;
    height: 100%; /* Full height of the viewport */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: auto; /* Enable scrolling for big-container */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    /* Il reste un petit problème au niveau du scroll sur tel */
  }
  .container-middle, .container-left, .container-right {
    height: 7000%;
    overflow-x: hidden;
  }
  
  .container-left, .container-right {
    position: absolute;
    top: 0;
    width: 30%;
    background: linear-gradient(to bottom, white, black); /* Add gradient from white to black */
    z-index: 1;
  }
  
  .container-left {
    left: 0;
  }
  
  .container-right {
    right: 0;
  }
  
  @media (max-width: 600px) {
    .container-left, .container-right {
      display: none; /* Completely hide the side containers on mobile */
    }
    .container-middle {
      width: 100% !important; /* Make container-middle take the full width on mobile */
    }
  }
  
  .container-middle {
    position: absolute;
    background-color: rgb(255, 255, 255);
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }

  .traffic-light-container {
  position: absolute;
  z-index: 3;
  bottom: -6880%;
}
  </style>
  