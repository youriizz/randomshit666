<template>
  <div 
    ref="container"
    :style="[computedStyle, additionalStyles]" 
    :class="{ visible: isVisible }" 
    class="container-morning">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    height: Number,
    additionalStyles: Object
  },
  data() {
    return {
      isVisible: false
    };
  },
  computed: {
    computedStyle() {
      return {
        height: this.height + '%'
      };
    }
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const options = {
        root: null,
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      }, options);
      
      observer.observe(this.$refs.container);
    }
  }
}
</script>

<style scoped>
.container-morning {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: start;
  padding: 2vw;
  border: 0px solid black;
  font-family: 'Libre Baskerville', serif;
  font-weight: 500;
  font-size: clamp(23px, 3vw, 45px);
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  cursor: grab;
  transition: background-color 3.5s ease;
}
.container-morning.visible {
  background-color: rgb(247, 255, 173);
}

.libre-baskerville-regular {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}

@media (max-width: 600px) {
  .container-morning {
    padding: 5vw
  }
}
</style>
