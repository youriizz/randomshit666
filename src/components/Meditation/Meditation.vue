<template>
  <div class="meditation-app">
    <audio ref="audio" :src="MeditationAudio" />
    <button v-if="isMobile && !audioReady" @click="initializeAudio" class="start-button">Start</button>
    <MeditationDraggable
      :src="'https://images.vexels.com/media/users/3/126615/isolated/preview/c5989809e0bb7b8c780aa6c4d85c5653-buddhistische-meditationspose-ikone.png'"
      :appearanceTime="2000"
      :duration="20000"
      :width="400"
      :height="400"
      additionalClass="person-sit"
    />
    <MeditationDraggable
      :src="'https://static.vecteezy.com/system/resources/previews/012/996/221/original/beautiful-lotus-flower-transparent-png.png'"
      :appearanceTime="8000"
      :duration="29000"
      :width="400"
      :height="400"
      additionalClass="flower-lotus"
    />
    <MeditationDraggable
      :src="RelievedFaceEmoji"
      :appearanceTime="16000"
      :duration="19000"
      :width="200"
      :height="200"
      additionalClass="relieved-face-emoji"
    />
    <MeditationDraggable
      :src="'https://autocollant-sticker.com/2026-thickbox_default/arbre-de-vie.jpg'"
      :appearanceTime="22000"
      :duration="10000"
      :width="300"
      :height="300"
      additionalClass="tree-life"
    />
    <MeditationDraggable
      :src="'https://i.pinimg.com/originals/82/b0/d9/82b0d91458e8291ddf1529f14c171c1d.png'"
      :appearanceTime="25000"
      :duration="15000"
      :width="200"
      :height="200"
      additionalClass="shakra-1"
    />







    <MeditationDraggable
      :src="collines"
      :appearanceTime="55000"
      :duration="63000"
      :width="1000"
      :height="250"
      additionalClass="collines-1"
    />
    <MeditationDraggable
      :src="river"
      :appearanceTime="65000"
      :duration="50000"
      :width="700"
      :height="200"
      additionalClass="river-1"
    />
    <MeditationDraggable
      :src="house"
      :appearanceTime="51000"
      :duration="64000"
      :width="400"
      :height="400"
      additionalClass="house-position"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/cloud/png_cloud_5790_small.png'"
      :appearanceTime="64000"
      :duration="60000"
      :width="500"
      :height="200"
      additionalClass="cloud-1"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/upload/cloud/png_cloud_5775.png'"
      :appearanceTime="64000"
      :duration="50000"
      :width="500"
      :height="300"
      additionalClass="cloud-2"
    />

    <MeditationDraggable
      :src="tree1"
      :appearanceTime="43000"
      :duration="70000"
      :width="300"
      :height="400"
      additionalClass="tree1-position"
    />

    <MeditationDraggable
      :src="'https://freepngimg.com/thumb/tree/8-tree-png-image.png'"
      :appearanceTime="50000"
      :duration="65000"
      :width="250"
      :height="300"
      additionalClass="tree2-position"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/upload/tree/png_tree_7814.png'"
      :appearanceTime="58000"
      :duration="60000"
      :width="250"
      :height="400"
      additionalClass="tree3-position"
    />
    <MeditationDraggable
      :src="tree1"
      :appearanceTime="67000"
      :duration="50000"
      :width="200"
      :height="300"
      additionalClass="tree4-position"
    />
    <MeditationDraggable
      :src="birdsbackground"
      :appearanceTime="60000"
      :duration="50000"
      :width="300"
      :height="300"
      additionalClass="birds-background"
    />
    
    <MeditationDraggable
      :src="'https://i.pinimg.com/originals/54/d3/ae/54d3ae04cae803cafc21389dfd31fc88.gif'"
      :appearanceTime="47000"
      :duration="70000"
      :width="200"
      :height="200"
      additionalClass="sun-position"
    />
    <MeditationDraggable
      :src="famille"
      :appearanceTime="50000"
      :duration="50000"
      :width="400"
      :height="300"
      additionalClass="famille"
    />
   

    <MeditationDraggable
      :src="babouchka"
      :appearanceTime="62000"
      :duration="40000"
      :width="150"
      :height="150"
      additionalClass="babouchka-position"
    />

    <MeditationDraggable
      :src="'https://png.pngtree.com/png-clipart/20230414/original/pngtree-fairy-tale-world-fairy-tale-book-cartoon-illustration-png-image_9056973.png'"
      :appearanceTime="95000"
      :duration="20000"
      :width="300"
      :height="300"
      additionalClass="book-stories"
    />
    <MeditationDraggable
      :src="'https://cdni.iconscout.com/illustration/premium/thumb/kid-birthday-party-9484053-7710789.png?f=webp'"
      :appearanceTime="105000"
      :duration="13000"
      :width="200"
      :height="200"
      additionalClass="birthday-position"
    />
    <MeditationDraggable
      :src="'https://i.pinimg.com/originals/f2/c6/64/f2c66478753920bc59bb2ccef4014915.png'"
      :appearanceTime="110000"
      :duration="10000"
      :width="200"
      :height="200"
      additionalClass="playmobil"
    />





    <MeditationDraggable
      :src="'https://www.picng.com/upload/city/png_city_38.png'"
      :appearanceTime="128000"
      :duration="40000"
      :width="1500"
      :height="400"
      additionalClass="city-1"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/road/png_road_79493_small.png'"
      :appearanceTime="136000"
      :duration="30000"
      :width="300"
      :height="200"
      additionalClass="road-1"
    />

 <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/coal/png_coal_87580_small.png'"
      :appearanceTime="148000"
      :duration="10000"
      :width="300"
      :height="300"
      additionalClass="coal"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/money/png_money_32675_small.png'"
      :appearanceTime="138000"
      :duration="20000"
      :width="300"
      :height="300"
      additionalClass="money"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/businessman/png_businessman_36352_small.png'"
      :appearanceTime="142000"
      :duration="7000"
      :width="250"
      :height="250"
      additionalClass="business-man"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/crowd/png_crowd_36912_small.png'"
      :appearanceTime="145000"
      :duration="10000"
      :width="300"
      :height="250"
      additionalClass="famille-2"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/roulette/png_roulette_87521_small.png'"
      :appearanceTime="152000"
      :duration="18000"
      :width="400"
      :height="350"
      additionalClass="russian-roulette"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/daewoo/png_daewoo_19934_small.png'"
      :appearanceTime="133000"
      :duration="19000"
      :width="400"
      :height="250"
      additionalClass="car-1"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/green_card/png_green_card_89076_small.png'"
      :appearanceTime="134000"
      :duration="30000"
      :width="300"
      :height="250"
      additionalClass="identity-card"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/vodka/png_vodka_16839_small.png'"
      :appearanceTime="153000"
      :duration="15000"
      :width="150"
      :height="400"
      additionalClass="vodka"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/barbwire/png_barbwire_45142_small.png'"
      :appearanceTime="162000"
      :duration="6000"
      :width="350"
      :height="350"
      additionalClass="barbwire"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/stopwatch/png_stopwatch_72990_small.png'"
      :appearanceTime="165000"
      :duration="4000"
      :width="250"
      :height="250"
      additionalClass="watch-1"
    />









    <MeditationDraggable
      :src="burial"
      :appearanceTime="258000"
      :duration="10000"
      :width="1100"
      :height="600"
      additionalClass="burial"
    />

    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/yoga/png_yoga_61345_small.png'"
      :appearanceTime="169000"
      :duration="39000"
      :width="350"
      :height="350"
      additionalClass="meditation-2"
    />
    
    <MeditationDraggable
      :src="'https://www.picng.com/upload/eye/png_eye_37460.png'"
      :appearanceTime="225000"
      :duration="40000"
      :width="600"
      :height="600"
      additionalClass="eye-2"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/gemini/png_gemini_77967_small.png'"
      :appearanceTime="178000"
      :duration="29000"
      :width="150"
      :height="150"
      additionalClass="gemini-symbol"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/gemini/png_gemini_77967_small.png'"
      :appearanceTime="220000"
      :duration="23000"
      :width="200"
      :height="200"
      additionalClass="lanterne"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/eye/png_eye_37456_small.png'"
      :appearanceTime="185000"
      :duration="18000"
      :width="200"
      :height="250"
      additionalClass="eye-1"
    />
    
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/face/png_face_37504_small.png'"
      :appearanceTime="180000"
      :duration="40000"
      :width="350"
      :height="350"
      additionalClass="face-1"
    />
 
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/brain/png_brain_36287_small.png'"
      :appearanceTime="180000"
      :duration="15000"
      :width="200"
      :height="200"
      additionalClass="brain-1"
    />

    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/brain/png_brain_36256_small.png'"
      :appearanceTime="190000"
      :duration="15000"
      :width="250"
      :height="250"
      additionalClass="brain-2"
    />
    
    <MeditationDraggable
      :src="'https://www.picng.com/upload/masha_and_the_bear/png_masha_and_the_bear_53.png'"
      :appearanceTime="220000"
      :duration="30000"
      :width="300"
      :height="400"
      additionalClass="little-girl"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/upload/angel/png_angel_40781.png'"
      :appearanceTime="192000"
      :duration="58000"
      :width="300"
      :height="400"
      additionalClass="angel"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/upload/peter_pan/png_peter_pan_76354.png'"
      :appearanceTime="180000"
      :duration="42000"
      :width="300"
      :height="300"
      additionalClass="peter-pan"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/upload/chakra/png_chakra_41043.png'"
      :appearanceTime="200000"
      :duration="49000"
      :width="300"
      :height="300"
      additionalClass="chakra-2"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/nose/png_nose_38737_small.png'"
      :appearanceTime="212000"
      :duration="5000"
      :width="500"
      :height="500"
      additionalClass="inhale-nose"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/mouth_smile/png_mouth_smile_38518_small.png'"
      :appearanceTime="218000"
      :duration="5000"
      :width="500"
      :height="300"
      additionalClass="exhale-mouth"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/mouth_smile/png_mouth_smile_38519_small.png'"
      :appearanceTime="225000"
      :duration="15000"
      :width="250"
      :height="250"
      additionalClass="mouth-2"
    />
    


    <MeditationDraggable
      :src="'https://www.picng.com/upload/white_roses/png_white_roses_25376.png'"
      :appearanceTime="230000"
      :duration="43000"
      :width="400"
      :height="400"
      additionalClass="white-flower"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/upload/chakra/png_chakra_41029.png'"
      :appearanceTime="210000"
      :duration="40000"
      :width="300"
      :height="300"
      additionalClass="chakra-3"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/fireplace/png_fireplace_48505_small.png'"
      :appearanceTime="240000"
      :duration="25000"
      :width="300"
      :height="300"
      additionalClass="fireplace"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/medical_mask/png_medical_mask_27208_small.png'"
      :appearanceTime="245000"
      :duration="10000"
      :width="250"
      :height="250"
      additionalClass="covid-mask"
    />
   
    <MeditationDraggable
      :src="'https://www.picng.com/upload/death/png_death_41318.png'"
      :appearanceTime="264000"
      :duration="7000"
      :width="350"
      :height="350"
      additionalClass="death"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/face/png_face_37468_small.png'"
      :appearanceTime="227000"
      :duration="50000"
      :width="350"
      :height="450"
      additionalClass="face-2"
    />
    <MeditationDraggable
      :src="'https://www.picng.com/thumbnail/carnival_mask/png_carnival_mask_85153_small.png'"
      :appearanceTime="260000"
      :duration="10000"
      :width="350"
      :height="350"
      additionalClass="carnival-mask"
    />





    




    <TrafficLightDraggable
      lightType="red"
      :appearanceTime="274000"
      :duration="100000"
      :width="100"
      :height="100"
      additionalClass="traffic-light-red"
    />
    <TrafficLightDraggable
      lightType="orange"
      orangeRoute="notsimilar"
      :appearanceTime="273000"
      :duration="100000"
      :width="100"
      :height="100"
      additionalClass="traffic-light-orange"
    />
    <TrafficLightDraggable
      lightType="green"
      greenRoute="similar"
      :appearanceTime="272000"
      :duration="100000"
      :width="100"
      :height="100"
      additionalClass="traffic-light-green"
    />
    <MeditationSubtitles :subtitles="subtitles" />
    <MeditationCircle
      v-if="audioReady"
      :audioRef="$refs.audio"
      :appearanceTime="1000"
      :duration="500000"
      :initialDiameter="40"
      additionalClass="circle-position"
    />
  </div>
</template>



<script>
import MeditationDraggable from './MeditationDraggable.vue';
import TrafficLightDraggable from './TrafficLightDraggable.vue';
import MeditationSubtitles from './MeditationSubtitles.vue';
import babouchka from '@/assets/Meditation/Youth/babouchka.png';
import tree1 from '@/assets/Meditation/Youth/tree1.png';
import house from '@/assets/Meditation/Youth/house.png';
import famille from '@/assets/Meditation/Youth/famille.webp'
import RelievedFaceEmoji from '@/assets/Meditation/Youth/relievedfaceemoji.png'
import birdsbackground from '@/assets/Meditation/Youth/birdsbackground.png'
import collines from '@/assets/Meditation/Youth/collines.png'
import river from '@/assets/Meditation/Youth/river.png'
import burial from '@/assets/Meditation/Dead/burial.png'




import MeditationAudio from '@/assets/Meditation/MeditationAudioFull.mp3';
import MeditationCircle from './MeditationCircle.vue';


export default {
  name: 'Meditation',
  components: {
    MeditationDraggable,
    TrafficLightDraggable,
    MeditationSubtitles,
    MeditationCircle,

  },
  data() {
    return {
      babouchka,
      tree1,
      house,
      MeditationAudio,
      RelievedFaceEmoji,
      famille,
      birdsbackground,
      collines,
      river,
      burial,
      subtitles: [
        { text: 'Welcome to this meditation session.', appearanceTime: 0, duration: 6 },
        { text: 'This session is aimed at your relaxation.', appearanceTime: 6, duration: 5 },
        { text: 'Together, we will try to help you reach the state of well-being.', appearanceTime: 12, duration: 6 },
        { text: 'You will see symbols and objects on the screen.', appearanceTime: 19, duration: 5 },
        { text: 'Take them, move them around.', appearanceTime: 25, duration: 4 },
        { text: 'Play with them.', appearanceTime: 29, duration: 2 },
        { text: 'This will relax you.', appearanceTime: 33, duration: 3 },
        { text: 'Ready?', appearanceTime: 36, duration: 2 },
        { text: 'Let’s begin.', appearanceTime: 38, duration: 2 },
        { text: 'Try to remember your childhood.', appearanceTime: 42, duration: 4 },
        { text: 'Your family.', appearanceTime: 48, duration: 3 },
        { text: 'The path to school.', appearanceTime: 53, duration: 3 },
        { text: 'You can take the objects and arrange them on the screen to tell a story.', appearanceTime: 57, duration: 7 },
        { text: 'Create a forest with the trees.', appearanceTime: 67, duration: 4 },
        { text: 'Place the house in the grass, next to the river and the forest.', appearanceTime: 75, duration: 6 },
        { text: "That's good.", appearanceTime: 84, duration: 3 },
        { text: 'And remember your childhood.', appearanceTime: 87, duration: 3 },
        { text: 'Dive into your memories…', appearanceTime: 91, duration: 3 },
        { text: 'Imaginary stories.', appearanceTime: 97, duration: 3 },
        { text: 'The birthdays of your friends.', appearanceTime: 103, duration: 4 },
        { text: 'The toys that brought you so much joy.', appearanceTime: 110, duration: 4 },
        { text: 'Then you grew up, you became more serious.', appearanceTime: 121, duration: 4 },
        { text: 'You understood that life was not just a game.', appearanceTime: 128, duration: 5 },
        { text: 'You have to go to work.', appearanceTime: 134, duration: 3 },
        { text: 'You have to earn money.', appearanceTime: 139, duration: 3 },
        { text: 'You have to start a family.', appearanceTime: 144, duration: 3 },
        { text: 'You didn’t like that.', appearanceTime: 151, duration: 3 },
        { text: 'You were no longer yourself.', appearanceTime: 156, duration: 4 },
        { text: 'And you lived like that for far too long.', appearanceTime: 162, duration: 4 },
        { text: 'It is important to go through these stages in meditation.', appearanceTime: 170, duration: 6 },
        { text: 'You must feel these different emotions.', appearanceTime: 177, duration: 4 },
        { text: 'Innocence and then maturity.', appearanceTime: 181, duration: 4 },
        { text: 'You need to understand how you feel.', appearanceTime: 187, duration: 4 },
        { text: 'Meditation is here to support you.', appearanceTime: 193, duration: 4 },
        { text: 'To accompany you in your quest for well-being.', appearanceTime: 199, duration: 4 },
        { text: 'For infinite happiness.', appearanceTime: 205, duration: 3 },
        { text: 'Breathe deeply.', appearanceTime: 212, duration: 3 },
        { text: 'Then exhale.', appearanceTime: 218, duration: 3 },
        { text: 'Very good.', appearanceTime: 222, duration: 2 },
        { text: 'I like it when you obey my commands.', appearanceTime: 227, duration: 4 },
        { text: 'Remember.', appearanceTime: 233, duration: 2 },
        { text: 'I am here to support you.', appearanceTime: 235, duration: 4 },
        { text: 'Thanks to me, you will feel better.', appearanceTime: 240, duration: 4 },
        { text: 'You will finally be able to sleep peacefully.', appearanceTime: 247, duration: 5 },
        { text: 'Feel good.', appearanceTime: 253, duration: 2 },
        { text: 'Sleep for eternity.', appearanceTime: 258, duration: 3 },
        { text: 'for eternity.', appearanceTime: 263, duration: 2 },
        { text: 'for eternity.', appearanceTime: 267, duration: 2 },
        { text: 'for eternity.', appearanceTime: 271, duration: 2 },
      ],
      audioReady: false
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768; // Example breakpoint for mobile devices
    }
  },
  methods: {
    initializeAudio() {
      this.$refs.audio.play().then(() => {
        this.audioReady = true;
      }).catch(error => {
        console.error("Audio play failed: ", error);
      });
    }
  },
  mounted() {
    if (!this.isMobile) {
      this.$refs.audio.addEventListener('canplaythrough', () => {
        this.audioReady = true;
        this.$refs.audio.play();
      });
    }
  }
};
</script>


<style scoped>

.exhale-mouth {
  top: 50%;
  left: 50%;
}
.inhale-nose {
  top: 50%;
  left: 50%;
}

.peter-pan {
  top: 20%;
  left: 20%;
}
.little-girl {
  top: 80%;
  left: 70%;
}
.angel {
  left: 10%;
  top: 60%;
}
.burial {
  top: 80%;
  left: 30%;
}

.white-flower {
  top: 60%;
  left: 70%;
}
.crow {
  top: 20%;
  left: 60%;
}
.meditation-2 {
  top: 50%;
  left: 50%;
}
.gemini-symbol {
  top: 70%;
  left: 30%;
}
.lanterne {
  top: 30%;
  left: 75%;
}
.eye-1 {
  top: 20%;
  left: 40%;
}
.eye-2 {
  top: 30%;
  left: 20%;
}

.face-1 {
  top: 50%;
  left: 70%;
}
.face-2 {
  top: 40%;
  left: 50%;
}

.brain-1 {
  top: 80%;
  left: 70%;
}
.brain-2 {
  top: 70%;
  left: 70%;
}

.fireplace {
  top: 80%;
  left: 20%;
}
.covid-mask {
  top: 90%;
  left: 80%;
}

.carnival-mask {
  top: 50%;
  left: 50%;
}

.mouth-2 {
  top: 50%;
  left: 50%;
}
.death {
  left: 80%;
  top: 40%;
}
.chakra-2 {
  left: 80%;
  top: 20%;
}
.chakra-3 {
  left: 20%;
  top: 70%;
}












.city-1 {
  top: 70%;
  left: 40%;
}
.identity-card {
  top: 60%;
  left: 70%;
}
.russian-roulette {
  top: 30%;
  left: 70%;
}
.business-man {
  top: 60%;
  left: 20%;
}

.car-1 {
  top: 40%;
  left: 20%;
}
.road-1 {
  top: 60%;
  left: 60%;
}
.famille-2 {
  top: 50%;
  left: 30%;
}

.vodka {
  top: 50%;
  left: 55%;
}
.money {
  top: 50%;
  left: 50%;
}

.barbwire {
  top: 30%;
  left: 30%;
}

.coal {
  top: 80%;
  left: 20%;
}
.watch-1 {
  top: 20%;
  left: 50%;
}














.cloud-2 {
  top: 20%;
  left: 70%;
}
.cloud-1 {
  top: 10%;
  left: 30%;
}
.meditation-app {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

.book-stories {
  top: 40%;
  right: 50%;
}
.playmobil {
  top: 20%;
  left: 50%;
}
.river-1 {
  top: 80%;
  left: 70%;
}

.collines-1 {
  top: 80%;
  left: 30%;
}
.birthday-position {
  top: 30%;
  left: 40%;
}

.birds-background {
  top: 50%;
  right: 5%;
}

.famille {
  top: 20%;
  left: 30%;
}
.babouchka-position {
  top: 60%;
  left: 60%;
}

.tree1-position {
  top: 20%;
  left: 20%;
}
.tree2-position {
  top: 30%;
  left: 80%;
}
.tree3-position {
  top: 60%;
  left: 10%;
}
.tree4-position {
  top: 70%;
  left: 20%;
}

.house-position {
  top: 50%;
  left: 40%;
}

.sun-position {
  top: 20%;
  left: 70%;
}

.tree-life {
  top: 80%;
  left: 80%;
}

.person-sit {
  top: 50%;
  left: 50%;
}

.flower-lotus {
  top: 20%;
  left: 20%;
}

.relieved-face-emoji {
  top: 70%;
  left: 30%;
}

.shakra-1 {
  top: 15%;
  left: 80%;
}



.traffic-light-red {
  bottom: 20%;
  left: 60%;
}

.traffic-light-orange {
  bottom: 50%;
  left: 20%;
}

.traffic-light-green {
  top: 10%;
  right: 20%;
}

.start-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  z-index: 1000;
}
</style>
