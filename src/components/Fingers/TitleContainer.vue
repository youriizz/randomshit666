<template>
  <div 
    ref="container"
    :style="[computedStyle, additionalStyles]" 
    :class="{ visible: isVisible }" 
    class="container-title">
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
.container-title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 2vw;
  border: 0px solid black;
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
  font-size: clamp(30px, 4vw, 70px);
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  cursor: grab;
  transition: background-color 3s ease;
}
.container-title.visible {
  background-color: #f1f1f1;
}

@media (max-width: 600px) {
  .container-title {
    padding: 5vw;
  }
}
</style>
