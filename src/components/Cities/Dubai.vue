<template>
    <div>
      <header class="BB140header"></header>
  
      <div class="BB145container-1">
        <div class="BB145texte-1">Dubai</div>
      </div>
  
      <div class="BB140container-2">
        <div class="BB140item BB140item-1">
          <div class="BB140item-1-ellipse-1">
            <div class="BB140item-1-title-1">Font:</div>
            <div class="BB145item-1-title-3">Dubai Font</div>
            <div class="BB140item-1-title-4">
              "The Dubai Font was specially created to represent the city. It is modern, geometric, and reflects the avant-garde architecture and sophistication of Dubai."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-2">
          <div class="BB140item-2-ellipse-1">
            <div class="BB140item-2-title-1">Density:</div>
            <div class="BB140item-2-title-3">9/10</div>
            <div class="BB140item-2-title-4">
              "Dubai, as a modern economic and urban center, displays a high density with its skyscrapers and dense metropolitan areas."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-3">
          <div class="BB140item-3-ellipse-1">
            <div class="BB140item-3-title-1">Speed:</div>
            <div class="BB140item-3-title-3">8/10</div>
            <div class="BB140item-3-title-4">
              "Dubai, as a modern metropolis, is known for its rapid growth and frenetic development."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-4">
          <div class="BB140item-4-ellipse-1">
            <div class="BB140item-4-title-1">Colors:</div>
            <ul class="BB140item-4-color-list">
              <li class="BB145item-4-color-1">Luxurious Gold</li>
              <li class="BB145item-4-color-2">Emerald</li>
              <li class="BB145item-4-color-3">Modern Sky Blue</li>
              <li class="BB145item-4-color-4">Elegant Black</li>
            </ul>
            <div class="BB140item-4-title-4">
              "These colors reflect the modernity, luxury, and cultural mix of Dubai."
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
              <router-link to="/newyork">
                <div class="BB140item-5-title-3">New York
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
            const container = document.querySelector(".BB145container-1");
            const canvas = document.getElementById('p5-canvas');
            if (!container || !canvas) {
              console.log("BB145container-1 or p5-canvas not found, stopping p5 loop");
              p.noLoop(); // Stop the draw loop if the container or canvas is not found
              p.remove(); // Remove the instance
              this.p5Instance = null; // Clear the reference
              return;
            }
  
            p.clear();
            console.log("p5 draw");
  
            let gradient = p.drawingContext.createRadialGradient(p.width / 2, p.height / 2, 0, p.width / 2, p.height / 2, p.width / 2);
  
            let colorStops = [
              { color: p.color(255, 223, 0), position: 0 }, // Luxurious Gold
              { color: p.color(192, 192, 192), position: 0.001 }, // Metallic Silver
              { color: p.color(0, 191, 255), position: 0.6 }, // Modern Sky Blue
              { color: p.color(0, 0, 0), position: 1 } // Elegant Black
            ];
  
            colorStops.forEach((stop) => {
              let noiseOpacity = p.noise(p.frameCount * 0.03 + stop.position); // Varied noise with position
              let colorOpacity = p.map(noiseOpacity, 0, 1, 0, 255); // Map opacity based on noise
              let cssColor = `rgba(${p.red(stop.color)}, ${p.green(stop.color)}, ${p.blue(stop.color)}, ${colorOpacity / 255})`; // Convert to CSS string
              gradient.addColorStop(stop.position, cssColor);
            });
  
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
  /* Add component-specific styles here */
  </style>
  