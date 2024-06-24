<template>
    <div>
      <header class="BB140header"></header>
  
      <div class="BB143container-1">
        <div class="BB143texte-1">New York</div>
      </div>
  
      <div class="BB140container-2">
        <div class="BB140item BB140item-1">
          <div class="BB140item-1-ellipse-1">
            <div class="BB140item-1-title-1">Font:</div>
            <div class="BB143item-1-title-3">Franklin Gothic</div>
            <div class="BB140item-1-title-4">
              "Franklin Gothic is a sans-serif font often associated with American typography. Its bold and sturdy design evokes the strength and dynamic energy of New York."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-2">
          <div class="BB140item-2-ellipse-1">
            <div class="BB140item-2-title-1">Density:</div>
            <div class="BB140item-2-title-3">7/10</div>
            <div class="BB140item-2-title-4">
              "New York, known for its skyscrapers and vertical urban planning, has a significant density, especially in its central neighborhoods."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-3">
          <div class="BB140item-3-ellipse-1">
            <div class="BB140item-3-title-1">Speed:</div>
            <div class="BB140item-3-title-3">6/10</div>
            <div class="BB140item-3-title-4">
              "New York, the city that never sleeps, maintains a moderate pace of life despite its constant dynamism."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-4">
          <div class="BB140item-4-ellipse-1">
            <div class="BB140item-4-title-1">Colors:</div>
            <ul class="BB140item-4-color-list">
              <li class="BB143item-4-color-1">Steel Gray</li>
              <li class="BB143item-4-color-2">Deep Black</li>
              <li class="BB143item-4-color-3">Taxi Yellow</li>
              <li class="BB143item-4-color-4">Pure White</li>
            </ul>
            <div class="BB140item-4-title-4">
              "These colors represent the diversity, energy, and urbanism of New York."
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
              <router-link to="/beijing">
                <div class="BB140item-5-title-5">Beijing
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
  
      <div class="BB140scroll-indicator" @click="scrollToContainer2">
        <span class="BB140arrow-down"></span>
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
            const container = document.querySelector(".BB143container-1");
            const canvas = document.getElementById('p5-canvas');
            if (!container || !canvas) {
              console.log("BB143container-1 or p5-canvas not found, stopping p5 loop");
              p.noLoop(); // Stop the draw loop if the container or canvas is not found
              p.remove(); // Remove the instance
              this.p5Instance = null; // Clear the reference
              return;
            }
  
            p.clear();
            console.log("p5 draw");
  
            let time = p.frameCount * 0.01;
            let radiusMovement = p.noise(time) * 1500 - 100; // Movement from -100 to +100
  
            let outerRadius = p.width / 2 + radiusMovement; // Increase size and add movement
            let gradient = p.drawingContext.createRadialGradient(p.width / 2, p.height / 2, 0, p.width / 2, p.height / 2, outerRadius);
  
            let baseColors = [
              p.color(0, 0, 0), // Steel Gray
              p.color(0, 0, 0), // Deep Black
              p.color(255, 215, 0), // Taxi Yellow
              p.color(255, 255, 255) // Pure White
            ];
  
            let numberOfPlages = 4;
            let plageSize = 1 / numberOfPlages;
  
            for (let i = 0; i <= 1; i += plageSize) {
              let colorIndex = Math.floor(p.noise(time + i) * baseColors.length) % baseColors.length;
              let nextColorIndex = (colorIndex + 1) % baseColors.length;
              let lerpFactor = p.noise(time + i + 10);
  
              let color = p.lerpColor(baseColors[colorIndex], baseColors[nextColorIndex], lerpFactor);
  
              let noiseOpacity = p.noise(time + i * 5);
              let colorOpacity = p.map(noiseOpacity, 0, 1, 50, 155);
              color.setAlpha(colorOpacity);
  
              let startPos = i;
              let endPos = i + plageSize + 1;
  
              gradient.addColorStop(Math.max(0, startPos), color.toString());
              gradient.addColorStop(Math.min(1, endPos), color.toString());
            }
  
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
  </style>
  