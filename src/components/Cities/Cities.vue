<template>
  <div>
    <header class="BB140header"></header>

    <div class="BB140container-1">
      <div class="BB140texte-1">Paris</div>
    </div>

    <div class="BB140container-2">
      <div class="BB140item BB140item-1">
        <div class="BB140item-1-ellipse-1">
          <div class="BB140item-1-title-1">Font:</div>
          <div class="BB140item-1-title-3">Didot</div>
          <div class="BB140item-1-title-4">
            "Didot is an elegant and classic typeface of French origin, evoking the style and sophistication associated with Paris. Its fine and high-end characteristics are well-suited to the Parisian aesthetic."
          </div>
        </div>
      </div>

      <div class="BB140item BB140item-2">
        <div class="BB140item-2-ellipse-1">
          <div class="BB140item-2-title-1">Density:</div>
          <div class="BB140item-2-title-3">6/10</div>
          <div class="BB140item-2-title-4">
            "Paris, with its diverse neighborhoods, offers a moderate density, creating an urban atmosphere without being overly compact."
          </div>
        </div>
      </div>

      <div class="BB140item BB140item-3">
        <div class="BB140item-3-ellipse-1">
          <div class="BB140item-3-title-1">Speed:</div>
          <div class="BB140item-3-title-3">5/10</div>
          <div class="BB140item-3-title-4">
            "Paris is a city that combines urban hustle with a more relaxed pace of life, hence a moderate speed."
          </div>
        </div>
      </div>

      <div class="BB140item BB140item-4">
        <div class="BB140item-4-ellipse-1">
          <div class="BB140item-4-title-1">Colors:</div>
          <ul class="BB140item-4-color-list">
            <li class="BB140item-4-color-1">Powder Pink</li>
            <li class="BB140item-4-color-2">Sky Blue</li>
            <li class="BB140item-4-color-3">Light Charcoal</li>
            <li class="BB140item-4-color-4">Creamy White</li>
          </ul>
          <div class="BB140item-4-title-4">
            "These soft colors evoke romance, elegance, and the artistic culture of Paris."
          </div>
        </div>
      </div>

      <div class="BB140item BB140item-5">
        <div class="BB140item-5-transparentcube-1">
          <div class="BB140item-5-ellipse-1">
            <div class="BB140item-5-title-1">Cities:</div>
            <router-link to="/rio">
              <div class="BB140item-5-title-2">Rio de Janeiro
                <div class="BB140item-5-ellipse-2"></div>
              </div>
            </router-link>
            <router-link to="/dubai">
              <div class="BB140item-5-title-3">Dubai
                <div class="BB140item-5-ellipse-3"></div>
              </div>
            </router-link>
            <router-link to="/beijing">
              <div class="BB140item-5-title-4">Beijing
                <div class="BB140item-5-ellipse-4"></div>
              </div>
            </router-link>
            <router-link to="/newyork">
              <div class="BB140item-5-title-5">New York
                <div class="BB140item-5-ellipse-5"></div>
              </div>
            </router-link>
            <router-link to="/rome">
              <div class="BB140item-5-title-6">Rome
                <div class="BB140item-5-ellipse-6"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="BB140item BB140item-6">
        <div class="BB140item-6-ellipse-1"></div>
        <div class="BB140feux">
        <TrafficLightBtn lightType="red" class="traffic-light-red" />
        <TrafficLightBtn lightType="orange" orangeRoute="notsimilar" class="traffic-light-orange" />
        <TrafficLightBtn lightType="green" greenRoute="similar" class="traffic-light-green" />
        </div>
      </div>
    </div>

    <div class="scroll-indicator" @click="scrollToContainer2">
      <span class="arrow-down"></span>
    </div>
  </div>
</template>

<script>
import p5 from 'p5';
import TrafficLightBtn from '../TrafficLightBtn.vue';


export default {
  components: {
        TrafficLightBtn
    },

  data() {
    return {
      p5Instance: null
    };
  },
  mounted() {
      console.log("Component mounted");
      window.scrollTo(0, 0); // Scroll to top when the component is mounted
      this.createP5Instance();
    },
  beforeUnmount() {
    console.log("Component beforeDestroy");
    if (this.p5Instance) {
      console.log("Removing p5 instance");
      this.p5Instance.noLoop(); // Stop the draw loop
      this.p5Instance.remove(); // Remove the instance
      this.p5Instance = null; // Clear the reference
    }
  },
  methods: {
    createP5Instance() {
      this.p5Instance = new p5((p) => {
        p.setup = () => {
          console.log("p5 setup");
          p.createCanvas(p.windowWidth, p.windowHeight).id('p5-canvas');
          p.background(255);
          p.frameRate(100);
          this.initializeIntersectionObserver();
        };

        p.draw = () => {
          const container = document.querySelector(".BB140container-1");
          const canvas = document.getElementById('p5-canvas');
          if (!container || !canvas) {
            console.log("BB140container-1 or p5-canvas not found, stopping p5 loop");
            p.noLoop(); // Stop the draw loop if the container or canvas is not found
            p.remove(); // Remove the instance
            this.p5Instance = null; // Clear the reference
            return;
          }

          p.clear();
          console.log("p5 draw");

          let gradient = p.drawingContext.createRadialGradient(p.windowWidth / 2, p.windowHeight / 2, 100, p.windowWidth / 2, p.windowHeight / 2, p.windowWidth);

          let linePosition = p.map(p.noise(p.frameCount * 0.06), 0, 1, 300, 900);

          let startNoiseOpacity = p.noise(p.frameCount * 0.06);
          let color1 = p.color(233, 182, 187, p.map(startNoiseOpacity, 0, 1, 0, 255));
          let color2 = p.color(200, 200, 200, p.map(startNoiseOpacity, 0, 1, 0, 255));
          let color3 = p.color(173, 216, 230, p.map(startNoiseOpacity, 0, 1, 0, 255));
          let noiseOpacity = p.noise(p.frameCount * 0.1);
          let color4 = p.color(255, 250, 240, p.map(noiseOpacity, 0, 1, 0, 255));

          gradient.addColorStop(p.map(p.noise(p.frameCount * 0.05), 0, 1, 0, 0.1), color1);
          gradient.addColorStop(p.map(p.noise(p.frameCount * 0.05), 0, 1, 0.1, 0.3), color2);
          gradient.addColorStop(p.map(p.noise(p.frameCount * 0.05), 0, 1, 0.2, 0.5), color3);
          gradient.addColorStop(p.map(p.noise(p.frameCount * 0.05), 0, 1, 0.4, 1), color4);

          p.drawingContext.fillStyle = gradient;
          p.rect(0, 0, p.width, p.height, 0);
        };
      });
    },
    scrollToContainer2() {
      const container = document.querySelector(".BB140container-2");
      if (container) {
        container.scrollIntoView({ behavior: "smooth" });
      }
    },
    initializeIntersectionObserver() {
      if (window.innerWidth < 1350) {
        console.log("Initializing IntersectionObserver");
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
        const hiddenElements = document.querySelectorAll(".BB140item-1-title-4, .BB140item-2-title-4, .BB140item-3-title-4, .BB140item-4-title-4");
        hiddenElements.forEach((el) => observer.observe(el));
      }
    }
  }
};
</script>



<style>
.BB140container-1 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .BB140texte-1 {
    font-family: Didot;
    font-size: 300px;
    color: rgb(50, 50, 50);
    text-align: center;
  }
  @media (max-width: 800px) {
    .BB140texte-1 {
      font-size: 180px;
    }
  }
  
  @media (max-width: 450px) {
    .BB140texte-1 {
      font-size: 100px;
  
    }
  }
  
  
  
  .traffic-light-red {
  z-index: 2;
}

.traffic-light-orange {
  z-index: 2;
}

.traffic-light-green {
  z-index: 2;
}
  
  
  
  
  .BB140container-2 {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    transition: transform 5s ease; /* Ajout d'une transition pour une apparence fluide */
    
  }
  
  .BB140item {
    box-sizing: border-box;
    width: calc(33.33%); /* Ajustez la largeur en fonction du pourcentage sans marge */
    height: calc(50%);
    background-color: inherit; /* Hérite de la couleur de fond du container-2 */
    border: inherit; /* Hérite du contour du container-2 */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    color: black; /* Couleur du texte */
    overflow: hidden;
  }
  
  @media (max-width: 1500px) {
    .BB140item {
      width: calc(50%); /* Deux colonnes sans marge lorsque la largeur est réduite */
      height: calc(60%);
    }
  }
  
  @media (max-width: 800px) {
    .BB140item {
      width: calc(100%); /* Une colonne sans marge lorsque la largeur est encore plus réduite */
      height: calc(60%);
    }
  }
  
  
  
  
  .BB140item-1, .BB140item-2, .BB140item-3, .BB140item-4, .BB140item-5, .BB140item-6 {
    background-color: transparent;
    position: relative;
  }
  
  
  .BB140item-1-title-1, .BB140item-2-title-1, .BB140item-3-title-1, .BB140item-4-title-1, .BB140item-5-title-1 {
    font-size: 50px;
    font-weight: bold;
    margin-top: 30px;
    margin-left: 40px;
    position: absolute;
    top: 0%;
    left: 0%;
  }
  
  .BB140item-5-title-1 {
    top: 5%;
  }
  
  
  .BB140item-1-title-2 {
    font-size: 50px;
    font-weight: bold;
    position: absolute;
    top: 38.5%;
    left: 44.5%;
    transform: translateX(-50%);
    font-style: oblique;
    text-decoration: underline;
    margin: 10px 20px 0px 20px;
  
  }
  
  .BB140item-1-title-2 .BB140item-1-ellipse-2 {
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px; /* Ajustez la largeur selon vos besoins */
    height: 100px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 50%;
    border: 2px solid #000;
    background-color: transparent;
  }
  
  .BB140item-1-title-3 {
  
    font-size: 55px;
    font-weight: bold;
    position: absolute;
    top: 0%;
    right: 0%;
    font-family: Didot;
    margin-top: 25px;
    margin-right: 40px;
  }
  
  .BB140item-1-title-4, .BB140item-2-title-4, .BB140item-3-title-4, .BB140item-4-title-4 {
    font-size: 20px;
    font-weight: 400;
    margin-left: 10%;
    margin-right: 10%;
    position: absolute;
    top: 69%;
    left: 0%;
    text-align: left;
    font-style: oblique;
    transition: ease 0.1s; 
    opacity: 0;
  }
  
  .BB140item-2-title-4 {
    top: 75%;
    margin-left: 15%;
    margin-right: 15%;
  }
  .BB140item-3-title-4 {
    top: 77%;
    margin-left: 15%;
    margin-right: 15%;
  }
  .BB140item-4-title-4 {
    top: 82%;
    margin-left: 10%;
    margin-right: 10%;
    text-align: right;
  }
  
  
  
  
  .BB140item-2-ellipse-1 .BB140item-2-ellipse-2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px; /* Ajustez la largeur selon vos besoins */
    height: 120px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 50%;
    border: 6px solid #000;
    background-color: transparent;
  }
  
  .BB140item-2-ellipse-1 .BB140item-2-ellipse-3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px; /* Ajustez la largeur selon vos besoins */
    height: 50px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 50%;
    border: 3px solid #000;
    background-color: transparent;
  }
  
  .BB140item-2-ellipse-1 .BB140item-2-ellipse-4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85px; /* Ajustez la largeur selon vos besoins */
    height: 85px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 50%;
    border: 4px solid #000;
    background-color: transparent;
  }
  
  .BB140item-2-title-3, .BB140item-3-title-3 {
  
    font-size: 55px;
    font-weight: bold;
    position: absolute;
    top: 0%;
    right: 0%;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 25px;
    margin-right: 40px;
  }
  
  
  .BB140item-1-ellipse-1, .BB140item-2-ellipse-1, .BB140item-3-ellipse-1 {
  
    background-size: auto 28%;
    background-repeat: no-repeat; /* Ajustez la taille de l'image pour qu'elle tienne dans le conteneur */
    background-position: center; /* Centrez l'image horizontalement et verticalement */
    width: 80%; /* Ajustez la largeur du conteneur selon vos besoins */
    height: 80%; /* Ajustez la hauteur du conteneur selon vos besoins */
  }
  
    .BB140item-1-ellipse-1 {
      background-image: url('@/assets/Cities/typoabc.webp'); /* Remplacez 'votre-image.jpg' par le chemin de votre image */
      background-size: auto 22%;
    }
    .BB140item-2-ellipse-1 {
      background-image: url('@/assets/Cities/densite.webp'); /* Remplacez 'votre-image.jpg' par le chemin de votre image */
    }
    .BB140item-3-ellipse-1 {
      background-image: url('@/assets/Cities/mouvement.webp'); /* Remplacez 'votre-image.jpg' par le chemin de votre image */
    }
  
  
  
  .BB140item-4-ellipse-1 {
    background-image: url('@/assets/Cities/pipette.webp'); /* Remplacez 'votre-image.jpg' par le chemin de votre image */
    background-size: auto 10%;
    background-repeat: no-repeat; /* Ajustez la taille de l'image pour qu'elle tienne dans le conteneur */
    background-position: 78% 9%; /* Centrez l'image horizontalement et verticalement */
  
  }
  
  .BB140item-4-color-list {
    list-style-type:decimal-leading-zero;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 30%;
    left: 14%;
    width: 80%;
    text-align: center;
  }
  
  .BB140item-4-color-1, 
  .BB140item-4-color-2,
  .BB140item-4-color-3,
  .BB140item-4-color-4 {
    text-align: right;
  font-size: 25px;
  margin: 20px ;
  }
  .BB140item-4-color-1::before,
  .BB140item-4-color-2::before,
  .BB140item-4-color-3::before,
  .BB140item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 20px; /* Ajustez la largeur selon vos besoins */
    height: 20px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 10px; /* Marge entre le rectangle et le texte */
    background-color: red; /* Couleur du rectangle (par défaut, rouge) */
  }
  .BB140item-4-color-1::before {
    background-color: rgb(233, 182, 187); /* Remplacez Color1 par la couleur correspondante */
  }
  
  .BB140item-4-color-2::before {
    background-color: rgb(173, 216, 230); /* Remplacez Color2 par la couleur correspondante */
  }
  
  .BB140item-4-color-3::before {
    background-color: rgb(50, 50, 50);/* Remplacez Color3 par la couleur correspondante */
  }
  
  .BB140item-4-color-4::before {
    background-color: rgb(255, 250, 240); /* Remplacez Color4 par la couleur correspondante */
  }
  
  
  
  
  
  
  
  
  
  .BB140item-5-ellipse-1 {
    background-image: url('@/assets/Cities/localisation.webp'); /* Remplacez 'votre-image.jpg' par le chemin de votre image */
    background-size: auto 13%;
    background-repeat: no-repeat; /* Ajustez la taille de l'image pour qu'elle tienne dans le conteneur */
    background-position: 85% 30%; /* Centrez l'image horizontalement et verticalement */
  
  }
  
  .BB140item-5 .BB140item-5-title-2,
  .BB140item-5 .BB140item-5-title-3,
  .BB140item-5 .BB140item-5-title-4,
  .BB140item-5 .BB140item-5-title-5,
  .BB140item-5 .BB140item-5-title-6 {
    transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background-size 0.3s ease, background-position 0.3s ease;
    font-size: 20px;
    position: absolute;
    color: #000;
  }
  
  .BB140item-5 .BB140item-5-title-2 {
    top: 40%;
    left: 15%;
  }
  .BB140item-5 .BB140item-5-title-3 {
    top: 55%;
    left: 60%;
  }
  .BB140item-5 .BB140item-5-title-4 {
    top: 90%;
    left: 25%;
  }
  .BB140item-5 .BB140item-5-title-5 {
    top: 75%;
    left: 40%;
  }
  .BB140item-5 .BB140item-5-title-6 {
    top: 60%;
    left: 15%;
  }
  
  .BB140item-5-title-2 .BB140item-5-ellipse-2,
  .BB140item-5-title-3 .BB140item-5-ellipse-3,
  .BB140item-5-title-4 .BB140item-5-ellipse-4,
  .BB140item-5-title-5 .BB140item-5-ellipse-5,
  .BB140item-5-title-6 .BB140item-5-ellipse-6 {
    position: absolute;
    transform: translate(-50%, -50%);
    border: 2px solid #000;
    top: 50%;
    left: 50%;
  }
  
  .BB140item-5-title-2 .BB140item-5-ellipse-2 {
    width: 160px; /* Ajustez la largeur selon vos besoins */
    height: 50px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 70% 58% 54% 75% / 57% 90% 50% 93%;
  }
  .BB140item-5-title-3 .BB140item-5-ellipse-3 {
    width: 100px; /* Ajustez la largeur selon vos besoins */
    height: 70px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 67% 33% 65% 35% / 26% 64% 36% 74%;
  }
  .BB140item-5-title-4 .BB140item-5-ellipse-4 {
    width: 90px; /* Ajustez la largeur selon vos besoins */
    height: 60px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 32% 68% 42% 58% / 26% 30% 70% 74%;
  }
  .BB140item-5-title-5 .BB140item-5-ellipse-5 {
    width: 130px; /* Ajustez la largeur selon vos besoins */
    height: 60px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 49% 92% 18% 97% / 71% 93% 58% 77%;
  }
  .BB140item-5-title-6 .BB140item-5-ellipse-6 {
    width: 70px; /* Ajustez la largeur selon vos besoins */
    height: 60px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 30% 70% 70% 30% / 30% 54% 46% 70% ;
  }
  
  
  
  
  
  
  
  @media (min-width: 1350px) {
    .BB140item-1 .BB140item-1-ellipse-1,
    .BB140item-2 .BB140item-2-ellipse-1,
    .BB140item-3 .BB140item-3-ellipse-1,
    .BB140item-4 .BB140item-4-ellipse-1,
    .BB140item-5 .BB140item-5-ellipse-1,
    .BB140item-6 .BB140item-6-ellipse-1 {
      display: flex;
      justify-content: center; /* Centrer horizontalement */
      align-items: center; /* Centrer verticalement */
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%; /* Ajustez la largeur selon vos besoins */
      height: 90%; /* Ajustez la hauteur selon vos besoins */
      border-radius: 100px;
      border: 2px solid #000;
      background-color: transparent;
      z-index: 1;
      transition: top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background-size 0.3s ease, background-position 0.3s ease; /* Ajout de l'effet de transition pour le changement de top, left, width et height */
    }
  
    .BB140item-1:hover .BB140item-1-title-4,
    .BB140item-2:hover .BB140item-2-title-4,
    .BB140item-4:hover .BB140item-4-title-4 {
      opacity: 1; 
      transition: opacity 0.3s ease 0.2s;
  }
    .BB140item-3:hover .BB140item-3-title-4 {
      opacity: 1;
      transition: opacity 0.2s ease 0.1s;
  }
  
    .BB140item-1 .BB140item-1-ellipse-1 {
      top: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
      width: 75%; /* Ajustez la largeur selon vos besoins */
      height: 75%; /* Ajustez la hauteur selon vos besoins */
    }
  
  
    .BB140item-1:hover .BB140item-1-ellipse-1 {
      top: 50%;
      left: 50%;
      width: 80%;
      height: 95%;
    }
  
    .BB140item-2 .BB140item-2-ellipse-1 {
      top: 50%;
      left: 38%;
      transform: translate(-50%, -50%);
      width: 75%; /* Ajustez la largeur selon vos besoins */
      height: 85%; /* Ajustez la hauteur selon vos besoins */
    }
  
    .BB140item-2:hover .BB140item-2-ellipse-1 {
      top: 50%;
      left: 50%;
      width: 99%;
      height: 80%;
    }
  
  
  
    .BB140item-3 .BB140item-3-ellipse-1 {
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 85%; /* Ajustez la largeur selon vos besoins */
      height: 80%; /* Ajustez la hauteur selon vos besoins */
      
    }
  
    .BB140item-3:hover .BB140item-3-ellipse-1 {
      top: 40%;
      left: 41%;
      width: 90%;
      height: 80%;
      transition: top 0.1s ease, left 0.1s ease, width 0.1s ease, height 0.1s ease, border-radius 0.1s ease; /* Ajout de l'effet de transition pour le changement de top, left, width et height */
   
    }
  
    .BB140item-4 .BB140item-4-ellipse-1 {
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%; /* Ajustez la largeur selon vos besoins */
      height: 90%; /* Ajustez la hauteur selon vos besoins */
    }
  
    .BB140item-4:hover .BB140item-4-ellipse-1 {
      top: 43%;
      left: 50%;
      width: 95%;
      height: 85%;
    }
  
    .BB140item-5:hover .BB140item-5-ellipse-1 {
      transition: top 0.4s ease, left 0.4s ease, width 0.4s ease, height 0.4s ease, border-radius 0.4s ease; 
    }
  
  
    .BB140item-5-transparentcube-1 {
      position: absolute;
      width: 100%;
      height: 90%;
      top: 0%;
      left: 0%;
    }
  
    .BB140item-5 .BB140item-5-ellipse-1 {
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 90%;
      border-radius: 50% 74% 100% 49% / 62% 29% 83% 90%;
    }
    
    .BB140item-5-transparentcube-1:hover .BB140item-5-ellipse-1 {
      top: 35%;
      left: 50%;
      height: 40%;
      width: 93%;
      border-radius: 70% 58% 54% 75% / 57% 90% 50% 93%;
  
    }
    
    .BB140item-5-transparentcube-1:hover .BB140item-5-title-2 {
      top: 63%;
      left: 13%;
    }
    .BB140item-5-transparentcube-1:hover .BB140item-5-title-3 {
      top: 20%;
      left: 65%;
    }
    .BB140item-5-transparentcube-1:hover .BB140item-5-title-4 {
      top: 75%;
      left: 50%;
    }
    .BB140item-5-transparentcube-1:hover .BB140item-5-title-5 {
      top: 55%;
      left: 70%;
    }
    .BB140item-5-transparentcube-1:hover .BB140item-5-title-6 {
      top: 40%;
      left: 50%;
    }
  
    .BB140item-5-title-2:hover .BB140item-5-ellipse-2,
    .BB140item-5-title-3:hover .BB140item-5-ellipse-3,
    .BB140item-5-title-4:hover .BB140item-5-ellipse-4,
    .BB140item-5-title-5:hover .BB140item-5-ellipse-5,
    .BB140item-5-title-6:hover .BB140item-5-ellipse-6 {
      background-color: hsl(164, 100%, 50%);
      mix-blend-mode: multiply; /* Mélangez les couleurs pour que le texte reste visible */
    }
    
    .BB140item-6 .BB140item-6-ellipse-1 {
      top: 40%;
      left: 35%;
      transform: translate(-50%, -50%);
      width: 55%; /* Ajustez la largeur selon vos besoins */
      height: 80%; /* Ajustez la hauteur selon vos besoins */
    }
  
    .BB140item-6:hover .BB140item-6-ellipse-1 {
      top: 34%;
      left: 13%;
      width: 25%;
      height: 70%;
   
    }
    
  }
  
  
  @media (max-width: 1350px) {
    
    
  
  
    .BB140item-5-title-2:active .BB140item-5-ellipse-2,
    .BB140item-5-title-3:active .BB140item-5-ellipse-3,
    .BB140item-5-title-4:active .BB140item-5-ellipse-4,
    .BB140item-5-title-5:active .BB140item-5-ellipse-5,
    .BB140item-5-title-6:active .BB140item-5-ellipse-6 {
      background-color: hsl(164, 100%, 50%);
      mix-blend-mode: multiply;
    }
  
  
    .BB140item-5 .BB140item-5-title-2 {
      top: 35%;
      left: 20%;
    }
    .BB140item-5 .BB140item-5-title-3 {
      top: 45%;
      left: 70%;
    }
    .BB140item-5 .BB140item-5-title-4 {
      top: 70%;
      left: 65%;
    }
    .BB140item-5 .BB140item-5-title-5 {
      top: 80%;
      left: 25%;
    }
    .BB140item-5 .BB140item-5-title-6 {
      top: 55%;
      left: 40%;
    }
  }
  
  @media (max-width: 1350px) {
  
    .BB140item-1-title-4, .BB140item-2-title-4, .BB140item-3-title-4, .BB140item-4-title-4 {
        font-size: 17px;
        font-weight: 400;
        margin-left: 20px;
        margin-right: 20px;
        position: absolute;
        bottom: 10%;
        left: 0%;
        text-align:left;
        font-style: oblique;
       
      } 
      
      .BB140item-2-title-4, .BB140item-4-title-4{
        text-align: right;
      }
    
    .BB140scroll, .BB140scroll-2 {
      color: black;
      padding: 0;
      margin: 5;
      display: grid;
      place-items: left;
      align-content: center;
    }
    
    .BB140item-1-title-4, .BB140item-2-title-4, .BB140item-3-title-4, .BB140item-4-title-4 {
      opacity: 0;
      transform: translateX(-100%);
      filter: blur(2px);
      transition: opacity 1s, transform 1s, filter 1s;
    }
    .BB140item-2-title-4, .BB140item-4-title-4 {
      transform: translateX(100%);
    }
    
    /* Styles pour les éléments lorsqu'ils deviennent visibles dans le viewport */
    .show {
      opacity: 1;
      transform: translateX(0);
      filter: blur(0);
    }
    
    
    
    }
  
  
  @media (max-width: 450px) {
    .BB140item-1-title-1,
    .BB140item-2-title-1,
    .BB140item-3-title-1,
    .BB140item-4-title-1,
    .BB140item-5-title-1 {
      font-size: 40px;
      margin: 20px 20px;
    }
  
    .BB140item-1-title-2,
    .BB140item-1-title-3,
    .BB140item-2-title-3,
    .BB140item-3-title-3 {
      font-size: 40px;
      margin: 20px 20px;
    }
  
    .BB140item-4-color-list {
      position: absolute;
      margin: 0px 0px 0px 0px;
      top: 25%;
      width: 80%;
      text-align: center;
    }
    .BB140item-1-title-4, 
    .BB140item-2-title-4, 
    .BB140item-3-title-4, 
    .BB140item-4-title-4 {
      font-size: 15px;
    }
      
    .BB140item-4-color-1, 
    .BB140item-4-color-2,
    .BB140item-4-color-3,
    .BB140item-4-color-4 {
    text-align: right;
    font-size: 20px;
    margin: 10px ;
    }
  
    .BB140item-4-color-1::before,
    .BB140item-4-color-2::before,
    .BB140item-4-color-3::before,
    .BB140item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 15px; /* Ajustez la largeur selon vos besoins */
    height: 15px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 20px; /* Marge entre le rectangle et le texte */
    }
  
    .BB140item-5 .BB140item-5-title-2,
    .BB140item-5 .BB140item-5-title-3,
    .BB140item-5 .BB140item-5-title-4,
    .BB140item-5 .BB140item-5-title-5,
    .BB140item-5 .BB140item-5-title-6 {
    font-size: 17px;
  }
  
  .BB140item-5-title-2 .BB140item-5-ellipse-2 {
    width: 140px; /* Ajustez la largeur selon vos besoins */
    height: 40px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 70% 58% 54% 75% / 57% 90% 50% 93%;
  }
  .BB140item-5-title-3 .BB140item-5-ellipse-3 {
    width: 70px; /* Ajustez la largeur selon vos besoins */
    height: 50px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 67% 33% 65% 35% / 26% 64% 36% 74%;
  }
  .BB140item-5-title-4 .BB140item-5-ellipse-4 {
    width: 70px; /* Ajustez la largeur selon vos besoins */
    height: 60px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 32% 68% 42% 58% / 26% 30% 70% 74%;
  }
  .BB140item-5-title-5 .BB140item-5-ellipse-5 {
    width: 100px; /* Ajustez la largeur selon vos besoins */
    height: 50px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 49% 92% 18% 97% / 71% 93% 58% 77%;
  }
  .BB140item-5-title-6 .BB140item-5-ellipse-6 {
    width: 60px; /* Ajustez la largeur selon vos besoins */
    height: 50px; /* Ajustez la hauteur selon vos besoins */
    border-radius: 30% 70% 70% 30% / 30% 54% 46% 70% ;
  }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  .BB140item-1, .BB140item-2, .BB140item-3, .BB140item-4, .BB140item-5, .BB140item-6 {
    background-color: rgb(255, 255, 255); /* Couleur or */
    border: 2px solid rgba(224, 224, 224, 0.362);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* Ajoutez cela dans votre style.css */
  .scroll-indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
  
  .arrow-down {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #333; /* Couleur de la flèche */
    opacity: 0.7;
  }
  
  
  
  
  
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Helvetica neue", sans-serif;
    font-weight: 500;

}
  
  
  
  
  
  
  
  
  .BB140feux {
    position: absolute;
    top: 22%;
    left: 43%;
    z-index: 1;
  }
  
  
  @media (max-width: 350px) {

    .BB140feux {
      position: absolute;
      top: 50%;
      left: 50%;
      
    }
  }
  
  
  
  /*#endregion */
  
  /*#region BB141rio */
  
  
  @font-face {
    font-family: 'Copacabana';
    src: url('assets/Copacabana\ Regular.ttf') format('opentype');
  }
  
  .BB141container-1 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .BB141texte-1 {
    font-family: Copacabana;
    font-size: 250px;
    line-height: 150px;
    margin: 100px 100px;
    letter-spacing: -8px;
    color: rgb(0, 123, 255);
    text-align: center;
  }
  
  .BB141item-1-title-3 {
    font-size: 50px;
    font-weight: 500;
    position: absolute;
    top: 0%;
    right: 0%;
    font-family: Copacabana;
    margin-top: 34px;
    margin-right: 30px;
    text-align: right;
  }
  
  .BB141item-4-color-1, 
  .BB141item-4-color-2,
  .BB141item-4-color-3,
  .BB141item-4-color-4 {
    text-align: right;
    font-size: 25px;
    margin: 20px;
  }
  
  .BB141item-4-color-1::before,
  .BB141item-4-color-2::before,
  .BB141item-4-color-3::before,
  .BB141item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 20px; /* Ajustez la largeur selon vos besoins */
    height: 20px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 10px; /* Marge entre le rectangle et le texte */
    background-color: red; /* Couleur du rectangle (par défaut, rouge) */
  }
  
  .BB141item-4-color-1::before {
    background-color: rgb(0, 169, 92); /* Remplacez Color1 par la couleur correspondante */
  }
  
  .BB141item-4-color-2::before {
    background-color: rgb(255, 204, 0); /* Remplacez Color2 par la couleur correspondante */
  }
  
  .BB141item-4-color-3::before {
    background-color: rgb(0, 56, 168);/* Remplacez Color3 par la couleur correspondante */
  }
  
  .BB141item-4-color-4::before {
    background-color: rgb(0, 123, 255); /* Remplacez Color4 par la couleur correspondante */
  }
  
  @media (max-width: 800px) {
    .BB141texte-1 {
      font-size: 150px;
      line-height: 100px;
      letter-spacing: -5px;
    }
  }
  
  @media (max-width: 450px) {
    .BB141texte-1 {
      font-size: 100px;
      line-height: 60px;
      letter-spacing: -3px;
    } 
    .BB141item-1-title-3 {
      font-size: 30px;
      text-align: right;
      margin: 30px 20px;
      margin-left: 120px;
    }
    .BB141item-4-color-1, 
    .BB141item-4-color-2,
    .BB141item-4-color-3,
    .BB141item-4-color-4 {
      text-align: right;
      font-size: 20px;
      margin: 10px;
    }
  
    .BB141item-4-color-1::before,
    .BB141item-4-color-2::before,
    .BB141item-4-color-3::before,
    .BB141item-4-color-4::before {
      content: "";
      display: inline-block;
      width: 15px; /* Ajustez la largeur selon vos besoins */
      height: 15px; /* Ajustez la hauteur selon vos besoins */
      margin-right: 20px; /* Marge entre le rectangle et le texte */
    }
  }
  
  
  
  /*#endregion */
  
  /*#region BB142beijing */
  
  @font-face {
    font-family: 'Noto Sans CJK Regular';
    src: url('assets/Noto\ Sans\ CJK\ Regular.otf') format('opentype');
  }
  
  .BB142container-1 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .BB142texte-1 {
    font-family: Noto Sans CJK Regular;
    font-size: 200px;
    letter-spacing: -8px;
    color: rgb(0, 103, 165);
    text-align: center;
  }
  
  .BB142item-1-title-3 {
  
    font-size: 35px;
    font-weight: bold;
    position: absolute;
    top: 0%;
    right: 0%;
    font-family: Noto Sans CJK Regular;
    margin-top: 36px;
    margin-right: 30px;
    text-align: right;
  }
  
  .BB142item-4-color-1, 
  .BB142item-4-color-2,
  .BB142item-4-color-3,
  .BB142item-4-color-4 {
    text-align: right;
  font-size: 25px;
  margin: 20px ;
  }
  .BB142item-4-color-1::before,
  .BB142item-4-color-2::before,
  .BB142item-4-color-3::before,
  .BB142item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 20px; /* Ajustez la largeur selon vos besoins */
    height: 20px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 10px; /* Marge entre le rectangle et le texte */
    background-color: red; /* Couleur du rectangle (par défaut, rouge) */
  }
  .BB142item-4-color-1::before {
    background-color: rgb(172, 225, 175); /* Remplacez Color1 par la couleur correspondante */
  }
  
  .BB142item-4-color-2::before {
    background-color: rgb(0, 0, 0); /* Remplacez Color2 par la couleur correspondante */
  }
  
  .BB142item-4-color-3::before {
    background-color: rgb(255, 195, 0);/* Remplacez Color3 par la couleur correspondante */
  }
  
  .BB142item-4-color-4::before {
    background-color: rgb(0, 103, 165); /* Remplacez Color4 par la couleur correspondante */
  }
  
  @media (max-width: 800px) {
    .BB142texte-1 {
      font-size: 120px;
      letter-spacing: -5px;
    }
  }
  
  @media (max-width: 450px) {
    .BB142texte-1 {
      font-size: 70px;
      letter-spacing: -3px;
  
    } 
    .BB142item-1-title-3 {
      font-size: 30px;
      
      text-align: right;
      margin: 22px 20px;
      margin-left: 120px;
    }
    .BB142item-4-color-1, 
    .BB142item-4-color-2,
    .BB142item-4-color-3,
    .BB142item-4-color-4 {
    text-align: right;
    font-size: 20px;
    margin: 10px ;
    }
  
    .BB142item-4-color-1::before,
    .BB142item-4-color-2::before,
    .BB142item-4-color-3::before,
    .BB142item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 15px; /* Ajustez la largeur selon vos besoins */
    height: 15px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 20px; /* Marge entre le rectangle et le texte */
    }
  }
  
  /*#endregion */
  
  /*#region BB143newyork */
  
  @font-face {
    font-family: 'Franklin Gothic';
    src: url('assets/Franklin\ Gothic\ Condensed.ttf') format('opentype');
  }
  
  .BB143container-1 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .BB143texte-1 {
    font-family: Franklin Gothic;
    letter-spacing: 5px;
    font-size: 200px;
    color: rgb(30, 30, 30);
    text-align: center;
  }
  
  .BB143item-1-title-3 {
    font-size: 35px;
    font-weight: 400;
    position: absolute;
    top: 0%;
    right: 0%;
    font-family: Franklin Gothic;
    margin-top: 50px;
    margin-right: 30px;
    text-align: right;
  }
  
  .BB143item-4-color-1, 
  .BB143item-4-color-2,
  .BB143item-4-color-3,
  .BB143item-4-color-4 {
    text-align: right;
    font-size: 25px;
    margin: 20px ;
  }
  .BB143item-4-color-1::before,
  .BB143item-4-color-2::before,
  .BB143item-4-color-3::before,
  .BB143item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 20px; /* Ajustez la largeur selon vos besoins */
    height: 20px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 10px; /* Marge entre le rectangle et le texte */
    background-color: red; /* Couleur du rectangle (par défaut, rouge) */
  }
  .BB143item-4-color-1::before {
    background-color: rgb(169, 169, 169); /* Remplacez Color1 par la couleur correspondante */
  }
  
  .BB143item-4-color-2::before {
    background-color: rgb(0, 0, 0); /* Remplacez Color2 par la couleur correspondante */
  }
  
  .BB143item-4-color-3::before {
    background-color: rgb(255, 215, 0);/* Remplacez Color3 par la couleur correspondante */
  }
  
  .BB143item-4-color-4::before {
    background-color: rgb(255, 255, 255); /* Remplacez Color4 par la couleur correspondante */
    border: 1px solid #000;
  }
  
  @media (max-width: 800px) {
    .BB143texte-1 {
      font-size: 110px;
      letter-spacing: 2px;
      letter-spacing: 0px;
    }
  }
  
  @media (max-width: 450px) {
    .BB143texte-1 {
      font-size: 70px;
      letter-spacing: 0px;
    
    } 
    .BB143item-1-title-3 {
      font-size: 25px;
      text-align: right;
      margin: 37px 20px;
      margin-left: 120px;
    }
    .BB143item-4-color-1, 
    .BB143item-4-color-2,
    .BB143item-4-color-3,
    .BB143item-4-color-4 {
      text-align: right;
      font-size: 20px;
      margin: 10px ;
    }
  
    .BB143item-4-color-1::before,
    .BB143item-4-color-2::before,
    .BB143item-4-color-3::before,
    .BB143item-4-color-4::before {
      content: "";
      display: inline-block;
      width: 15px; /* Ajustez la largeur selon vos besoins */
      height: 15px; /* Ajustez la hauteur selon vos besoins */
      margin-right: 20px; /* Marge entre le rectangle et le texte */
    }
  }
  
  /*#endregion */
  
  /*#region BB144rome */
  
  .BB144container-1 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .BB144texte-1 {
    font-family: Trajan;
    font-size: 300px;
    letter-spacing: -8px;
    color: rgb(128, 0, 32);
    text-align: center;
  }
  
  .BB144item-1-title-3 {
  
    font-size: 55px;
    font-weight: bold;
    position: absolute;
    top: 0%;
    right: 0%;
    font-family: Trajan;
    margin-top: 27px;
    margin-right: 40px;
  }
  
  .BB144item-4-color-1, 
  .BB144item-4-color-2,
  .BB144item-4-color-3,
  .BB144item-4-color-4 {
    text-align: right;
  font-size: 25px;
  margin: 20px ;
  }
  .BB144item-4-color-1::before,
  .BB144item-4-color-2::before,
  .BB144item-4-color-3::before,
  .BB144item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 20px; /* Ajustez la largeur selon vos besoins */
    height: 20px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 10px; /* Marge entre le rectangle et le texte */
    background-color: red; /* Couleur du rectangle (par défaut, rouge) */
  }
  .BB144item-4-color-1::before {
    background-color: rgb(204, 78, 92); /* Remplacez Color1 par la couleur correspondante */
  }
  
  .BB144item-4-color-2::before {
    background-color: rgb(255, 215, 0); /* Remplacez Color2 par la couleur correspondante */
  }
  
  .BB144item-4-color-3::before {
    background-color: rgb(250, 235, 215);/* Remplacez Color3 par la couleur correspondante */
  }
  
  .BB144item-4-color-4::before {
    background-color: rgb(128, 0, 32); /* Remplacez Color4 par la couleur correspondante */
  }
  
  @media (max-width: 800px) {
    .BB144texte-1 {
      font-size: 180px;
      letter-spacing: -5px;
    }
  }
  
  @media (max-width: 450px) {
    .BB144texte-1 {
      font-size: 100px;
      letter-spacing: -3px;
  
    } 
    .BB144item-1-title-3 {
      font-size: 40px;
      margin: 20px 20px;
    }
    .BB144item-4-color-1, 
    .BB144item-4-color-2,
    .BB144item-4-color-3,
    .BB144item-4-color-4 {
    text-align: right;
    font-size: 20px;
    margin: 10px ;
    }
  
    .BB144item-4-color-1::before,
    .BB144item-4-color-2::before,
    .BB144item-4-color-3::before,
    .BB144item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 15px; /* Ajustez la largeur selon vos besoins */
    height: 15px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 20px; /* Marge entre le rectangle et le texte */
    }
  }
  
  
  
  
  
  /*#endregion */
  
  /*#region BB145dubai */
  
  @font-face {
    font-family: 'Dubai Bold';
    src: url('assets/Dubai-Bold.ttf') format('opentype');
  }
  
  .BB145container-1 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .BB145texte-1 {
    font-family: Dubai Bold;
    font-size: 200px;
    color: rgb(4, 130, 67);
    text-align: center;
  }
  
  .BB145item-1-title-3 {
    font-size: 40px;
    font-weight: bold;
    position: absolute;
    top: 0%;
    right: 0%;
    font-family: Dubai Bold;
    margin-top: 30px;
    margin-right: 30px;
    text-align: right;
  }
  
  .BB145item-4-color-1, 
  .BB145item-4-color-2,
  .BB145item-4-color-3,
  .BB145item-4-color-4 {
    text-align: right;
    font-size: 25px;
    margin: 20px;
  }
  
  .BB145item-4-color-1::before,
  .BB145item-4-color-2::before,
  .BB145item-4-color-3::before,
  .BB145item-4-color-4::before {
    content: "";
    display: inline-block;
    width: 20px; /* Ajustez la largeur selon vos besoins */
    height: 20px; /* Ajustez la hauteur selon vos besoins */
    margin-right: 10px; /* Marge entre le rectangle et le texte */
    background-color: red; /* Couleur du rectangle (par défaut, rouge) */
  }
  
  .BB145item-4-color-1::before {
    background-color: rgb(255, 223, 0); /* Remplacez Color1 par la couleur correspondante */
  }
  
  .BB145item-4-color-2::before {
    background-color: rgb(4, 130, 67); /* Remplacez Color2 par la couleur correspondante */
  }
  
  .BB145item-4-color-3::before {
    background-color: rgb(0, 191, 255);/* Remplacez Color3 par la couleur correspondante */
  }
  
  .BB145item-4-color-4::before {
    background-color: rgb(0, 0, 0); /* Remplacez Color4 par la couleur correspondante */
  }
  
  @media (max-width: 800px) {
    .BB145texte-1 {
      font-size: 120px;
      letter-spacing: -5px;
    }
  }
  
  @media (max-width: 450px) {
    .BB145texte-1 {
      font-size: 70px;
      letter-spacing: -3px;
    } 
    .BB145item-1-title-3 {
      font-size: 25px;
      text-align: right;
      margin: 28px 20px;
      margin-left: 120px;
    }
    .BB145item-4-color-1, 
    .BB145item-4-color-2,
    .BB145item-4-color-3,
    .BB145item-4-color-4 {
      text-align: right;
      font-size: 20px;
      margin: 10px;
    }
  
    .BB145item-4-color-1::before,
    .BB145item-4-color-2::before,
    .BB145item-4-color-3::before,
    .BB145item-4-color-4::before {
      content: "";
      display: inline-block;
      width: 15px; /* Ajustez la largeur selon vos besoins */
      height: 15px; /* Ajustez la hauteur selon vos besoins */
      margin-right: 20px; /* Marge entre le rectangle et le texte */
    }
  }
  
  /*#endregion */

  </style>