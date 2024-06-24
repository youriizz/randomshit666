<template>
    <div>
      <header class="BB140header"></header>
  
      <div class="BB141container-1">
        <div class="BB141texte-1">Rio de Janeiro</div>
      </div>
  
      <div class="BB140container-2">
        <div class="BB140item BB140item-1">
          <div class="BB140item-1-ellipse-1">
            <div class="BB140item-1-title-1">Font:</div>
            <div class="BB141item-1-title-3">Copacabana</div>
            <div class="BB140item-1-title-4">
              "The Copacabana font was designed with Brazilian influences. It brings a joyful and lively touch, in harmony with the festive ambiance of Rio de Janeiro."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-2">
          <div class="BB140item-2-ellipse-1">
            <div class="BB140item-2-title-1">Density:</div>
            <div class="BB140item-2-title-3">5/10</div>
            <div class="BB140item-2-title-4">
              "Rio de Janeiro, with its beaches and more expansive areas, displays a moderate density, offering open spaces and more airy neighborhoods."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-3">
          <div class="BB140item-3-ellipse-1">
            <div class="BB140item-3-title-1">Speed:</div>
            <div class="BB140item-3-title-3">9/10</div>
            <div class="BB140item-3-title-4">
              "Rio de Janeiro, famous for its carnival and vibrant energy, offers a very fast-paced experience."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-4">
          <div class="BB140item-4-ellipse-1">
            <div class="BB140item-4-title-1">Colors:</div>
            <ul class="BB140item-4-color-list">
              <li class="BB141item-4-color-1">Emerald Green</li>
              <li class="BB141item-4-color-2">Sun Yellow</li>
              <li class="BB141item-4-color-3">Ocean Blue</li>
              <li class="BB141item-4-color-4">Deep Sky Blue</li>
            </ul>
            <div class="BB140item-4-title-4">
              "These colors reflect the nature, festivity, and energy of Rio de Janeiro."
            </div>
          </div>
        </div>
  
        <div class="BB140item BB140item-5">
          <div class="BB140item-5-transparentcube-1">
            <div class="BB140item-5-ellipse-1">
              <div class="BB140item-5-title-1">Cities:</div>
              <router-link to="/newyork">
                <div class="BB140item-5-title-2">New York
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
            const container = document.querySelector(".BB141container-1");
            const canvas = document.getElementById('p5-canvas');
            if (!container || !canvas) {
              console.log("BB141container-1 or p5-canvas not found, stopping p5 loop");
              p.noLoop(); // Stop the draw loop if the container or canvas is not found
              p.remove(); // Remove the instance
              this.p5Instance = null; // Clear the reference
              return;
            }
  
            p.clear();
            console.log("p5 draw");
  
            let gradient = p.drawingContext.createRadialGradient(p.width / 2, p.height / 2, 100, p.width / 2, p.height / 2, p.width);
  
            let color1 = p.color(255, 204, 0, p.map(p.noise(p.frameCount * 0.1), 0, 1, 0, 125)); // Emerald Green
            let color2 = p.color(0, 169, 92, p.map(p.noise(p.frameCount * 0.01), 0, 1, 0, 125)); // Sun Yellow
            let color3 = p.color(0, 56, 168, p.map(p.noise(p.frameCount * 0.01), 0, 1, 0, 50)); // Ocean Blue
            let color4 = p.color(255, 253, 208, p.map(p.noise(p.frameCount * 0.01), 0, 1, 0, 125)); // Deep Sky Blue
  
            gradient.addColorStop(p.map(p.noise(p.frameCount * 0.5), 0, 1, 0, 0.2), color1.toString());
            gradient.addColorStop(p.map(p.noise(p.frameCount * 0.05), 0, 1, 0.3, 0.6), color2.toString());
            gradient.addColorStop(p.map(p.noise(p.frameCount * 0.05), 0, 1, 0.6, 1), color3.toString());
            gradient.addColorStop(p.map(p.noise(p.frameCount * 0.01), 0, 1, 0.9, 1), color4.toString());
  
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
  