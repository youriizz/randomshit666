<template>
    <div>
      <header class="BB140header"></header>
  
      <div class="BB144container-1">
        <div class="BB144texte-1">Rome</div>
      </div>
  
      <div class="BB140container-2">
        <div class="BB140item BB140item-1">
          <div class="BB140item-1-ellipse-1">
            <div class="BB140item-1-title-1">Font:</div>
            <div class="BB144item-1-title-3">Trajan</div>
            <div class="BB140item-1-title-4">
              "Trajan is a font inspired by classic Roman inscriptions. Its majestic and historical design captures the essence of ancient Rome, with well-proportioned uppercase characters."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-2">
          <div class="BB140item-2-ellipse-1">
            <div class="BB140item-2-title-1">Density:</div>
            <div class="BB140item-2-title-3">4/10</div>
            <div class="BB140item-2-title-4">
              "Rome, characterized by its vast historical spaces and small alleys, presents a lower density compared to other major capitals."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-3">
          <div class="BB140item-3-ellipse-1">
            <div class="BB140item-3-title-1">Speed:</div>
            <div class="BB140item-3-title-3">3/10</div>
            <div class="BB140item-3-title-4">
              "Rome, rich in history and monuments, invites a slow and contemplative exploration of its wonders."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-4">
          <div class="BB140item-4-ellipse-1">
            <div class="BB140item-4-title-1">Colors:</div>
            <ul class="BB140item-4-color-list">
              <li class="BB144item-4-color-1">Terracotta</li>
              <li class="BB144item-4-color-2">Gold</li>
              <li class="BB144item-4-color-3">Antique White</li>
              <li class="BB144item-4-color-4">Burgundy</li>
            </ul>
            <div class="BB140item-4-title-4">
              "These colors evoke the history, architecture, and cultural richness of Rome."
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
            const container = document.querySelector(".BB144container-1");
            const canvas = document.getElementById('p5-canvas');
            if (!container || !canvas) {
              console.log("BB144container-1 or p5-canvas not found, stopping p5 loop");
              p.noLoop(); // Stop the draw loop if the container or canvas is not found
              p.remove(); // Remove the instance
              this.p5Instance = null; // Clear the reference
              return;
            }
  
            p.clear();
            console.log("p5 draw");
            this.time += 0.02; // Increment time
  
            // Dynamically adjust the min and max radius with a "breathing" effect
            let radiusMin = p.map(p.sin(this.time), -1, 1, 50, 150); // Minimum radius that "breathes"
            let radiusMax = p.map(p.cos(this.time), -1, 1, 600, p.width + 400); // Maximum radius that "breathes"
  
            let gradient = p.drawingContext.createRadialGradient(p.width / 2, p.height / 2, radiusMin, p.width / 2, p.height / 2, radiusMax);
  
            // Base colors
            let colors = [
              [204, 78, 92],    // Terracotta
              [245, 245, 220],  // Beige
              [255, 215, 0],    // Gold
              [250, 235, 215]   // Antique White
            ];
  
            // Fixed positions for smooth gradient
            let positions = [0, 0.4, 0.8, 1];
  
            // Adjust the opacity of each color independently using noise
            for (let i = 0; i < colors.length; i++) {
              let noiseValue = p.noise(this.time * 0.5 + i * 0.5); // Multipliers adjusted for variation
              let opacity = p.map(noiseValue, 0, 1, 50, 90); // Map the noise value to an opacity range of 0 to 100
              let colorWithOpacity = p.color(...colors[i], opacity);
              gradient.addColorStop(positions[i], colorWithOpacity);
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
  /* Ajoutez des styles spécifiques à ce composant ici */
  </style>
  