<template>
    <div>
      <header class="BB140header"></header>
  
      <div class="BB142container-1">
        <div class="BB142texte-1">Beijing</div>
      </div>
  
      <div class="BB140container-2">
        <div class="BB140item BB140item-1">
          <div class="BB140item-1-ellipse-1">
            <div class="BB140item-1-title-1">Font:</div>
            <div class="BB142item-1-title-3">Noto Sans CJK</div>
            <div class="BB140item-1-title-4">
              "This font is designed to embrace Chinese characters while providing a modern design for the Latin alphabet, thus reflecting the blend of tradition and modernity of Beijing."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-2">
          <div class="BB140item-2-ellipse-1">
            <div class="BB140item-2-title-1">Density:</div>
            <div class="BB140item-2-title-3">8/10</div>
            <div class="BB140item-2-title-4">
              "Beijing's rapid growth and large population contribute to high density, especially in central urban areas."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-3">
          <div class="BB140item-3-ellipse-1">
            <div class="BB140item-3-title-1">Speed:</div>
            <div class="BB140item-3-title-3">7/10</div>
            <div class="BB140item-3-title-4">
              "As a political and cultural hub, Beijing is a city in constant evolution, hence the fast pace."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-4">
          <div class="BB140item-4-ellipse-1">
            <div class="BB140item-4-title-1">Colors:</div>
            <ul class="BB140item-4-color-list">
              <li class="BB142item-4-color-1">Celadon Soft</li>
              <li class="BB142item-4-color-2">Black</li>
              <li class="BB142item-4-color-3">Amber Yellow</li>
              <li class="BB142item-4-color-4">Deep Blue</li>
            </ul>
            <div class="BB140item-4-title-4">
              "This color scheme harmoniously combines tradition and modernity, reflective of Beijing's rich heritage and dynamic future."
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
              <router-link to="/rome">
                <div class="BB140item-5-title-4">Rome
                  <div class="BB140item-5-ellipse-4"></div>
                </div>
              </router-link>
              <router-link to="/newyork">
                <div class="BB140item-5-title-5">New York
                  <div class="BB140item-5-ellipse-5"></div>
                </div>
              </router-link>
              <router-link to="/cities">
                <div class="BB140item-5-title-6">Paris
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
        p5Instance: null,
        time: 0
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
            p.frameRate(30); // Reduced frame rate for stability
            this.initializeIntersectionObserver();
          };
  
          p.draw = () => {
            const container = document.querySelector(".BB142container-1");
            const canvas = document.getElementById('p5-canvas');
            if (!container || !canvas) {
              console.log("BB142container-1 or p5-canvas not found, stopping p5 loop");
              p.noLoop(); // Stop the draw loop if the container or canvas is not found
              p.remove(); // Remove the instance
              this.p5Instance = null; // Clear the reference
              return;
            }
  
            p.clear();
            console.log("p5 draw");
  
            let gradient = p.drawingContext.createRadialGradient(p.width / 2, p.height / 2, 100, p.width / 2, p.height / 2, p.width);
  
            let colorRougeVif = p.color(172, 225, 175); // Celadon Soft
            let colorNoirProfond = p.color(0, 0, 0); // Black
            let colorDoreTraditionnel = p.color(255, 195, 0); // Amber Yellow
            let colorBlancNeige = p.color(114, 47, 55); // Deep Blue
  
            let noiseOpacityRV = p.noise(p.frameCount * 0.02);
            let noiseOpacityNP = p.noise(p.frameCount * 0.03);
            let noiseOpacityDT = p.noise(p.frameCount * 0.04);
            let noiseOpacityBN = p.noise(p.frameCount * 0.05);
  
            colorRougeVif.setAlpha(p.map(noiseOpacityRV, 0, 1, 0, 150));
            colorNoirProfond.setAlpha(p.map(noiseOpacityNP, 0, 1, 0, 130));
            colorDoreTraditionnel.setAlpha(p.map(noiseOpacityDT, 0, 1, 0, 150));
            colorBlancNeige.setAlpha(p.map(noiseOpacityBN, 0, 1, 0, 150));
  
            gradient.addColorStop(p.map(p.noise(p.frameCount * 0.1), 0, 1, 0, 0.2), colorRougeVif.toString());
            gradient.addColorStop(p.map(p.noise(p.frameCount * 0.03), 0, 1, 0.1, 0.4), colorNoirProfond.toString());
            gradient.addColorStop(p.map(p.noise(p.frameCount * 0.07), 0, 1, 0.3, 0.75), colorDoreTraditionnel.toString());
            gradient.addColorStop(p.map(p.noise(p.frameCount * 0.05), 0, 1, 0.75, 1), colorBlancNeige.toString());
  
            p.drawingContext.fillStyle = gradient;
            p.rect(0, 0, p.width, p.height);
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
  
  <style scoped>
  /* Ajoutez des styles spécifiques à ce composant ici */
  </style>
  