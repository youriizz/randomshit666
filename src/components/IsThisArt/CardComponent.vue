<template>
    <div class="card">
      <h2 :class="{'highlighted-text': highlightTitle}" class="card-title">{{ title }}</h2>
      <img v-if="image" class="card-image" :src="image" alt="Image" />
      <div class="card-info" v-if="!isTrafficLight">
        <div class="left-column">
          <p :class="{'highlighted-text': highlightAuthor}" class="card-author">{{ author }}</p>
          <p :class="{'highlighted-text': highlightPrice}" class="card-price">{{ price }}</p>
          <p :class="{'highlighted-text': highlightFormat}" class="card-format">{{ format }}</p>
        </div>
        <div class="right-column">
          <p :class="{'highlighted-text': highlightDate}" class="card-date">{{ date }}</p>
          <p :class="{'highlighted-text': highlightLocation}" class="card-location">{{ location }}</p>
          <p :class="{'highlighted-text': highlightTechnique}" class="card-technique">{{ technique }}</p>
        </div>
      </div>
      <TrafficLight 
          :orange-route="orangeRoute"
          :green-route="greenRoute"
          :relativeSize="true"
           v-if="isTrafficLight" />
    </div>
  </template>
  
  
  
  
  
  <script>
import TrafficLight from '../TrafficLight.vue'

export default {
  name: 'CardComponent',
  components: {
    TrafficLight
  },
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: ''
    },
    technique: {
      type: String,
      default: ''
    },
    highlightAuthor: {
      type: Boolean,
      default: false
    },
    highlightDate: {
      type: Boolean,
      default: false
    },
    highlightPrice: {
      type: Boolean,
      default: false
    },
    highlightLocation: {
      type: Boolean,
      default: false
    },
    highlightFormat: {
      type: Boolean,
      default: false
    },
    highlightTechnique: {
      type: Boolean,
      default: false
    },
    highlightTitle: {
      type: Boolean,
      default: false
    },
    isTrafficLight: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
    }
  }
}
</script>

  <style scoped>
  .card {
    background-color: rgb(255, 255, 255);
    border-radius: 3vw;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    padding: 20px;
    text-align: center;
    width: 98%;
    height: 98%;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .card-title {
    font-size: clamp(20px, 3vw, 35px);
    margin-top: 2vh;
    margin-left: 10vw;
    margin-right: 10vw;
    font-style: italic;
  }
  
  .card-image {
    max-width: 70%;
    max-height: 65%;
    min-height: 50%;
    padding-top: 3vh;
    margin: 0 auto;
  }
  
  .card-info {
    display: flex;
    justify-content: space-between;
    margin: 2vh 0;
  }
  
  .left-column, .right-column {
    width: 25%;
    
  }

  .right-column {
    text-align: right;
    margin-right: 3vw;
  }  

  .left-column {
    text-align: left;
    margin-left: 3vw;
  }
  
  .card-author, .card-price, .card-format, .card-date, .card-location, .card-technique {
  font-size: clamp(17px, 2vw, 20px);
  color: #000000;
  padding: 10px;
  margin-bottom: -1vh; /* Ajoutez une marge en bas pour espacer les éléments */
}
  
  .card-content {
    font-size: 1rem;
    color: #010000;
  }

  .highlighted-text {
  font-weight: 900;
  background-color: red;
}
  
  @media (max-width: 768px) {
    .card {
      background-color: rgb(255, 255, 255);
      border-radius: 10vw;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      padding: 10px;
      text-align: center;
      width: 100%;
      height: 90%;
      box-sizing: border-box;
    }
    .card-image {
    max-width: 80%;
    max-height: 45%;
    min-height: 30%;
    padding-top: 0vh;
    margin: 0 auto;
  }


  .left-column, .right-column {
    width: 45%;
    
  }

  .card-author, .card-price, .card-format, .card-date, .card-location, .card-technique {
  font-size: clamp(17px, 2vw, 20px);
  color: #000000;
  padding: 10px;
  margin-bottom: -2vh; /* Ajoutez une marge en bas pour espacer les éléments */
}
  }
  </style>
  
  