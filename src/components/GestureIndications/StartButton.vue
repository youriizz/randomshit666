<template>
    <button @click="handleClick">{{ buttonText }}</button>
  </template>
  
  <script>
  export default {
    props: {
      buttonText: {
        type: String,
        default: 'Start'
      },
      clickThrough: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick(event) {
        this.$emit('start');
        if (this.clickThrough) {
          this.simulateClickBelow(event);
        }
      },
      simulateClickBelow(event) {
        // Delay to ensure visibility update
        setTimeout(() => {
          const rect = event.target.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;
          const elementBelow = document.elementFromPoint(x, y);
  
          if (elementBelow && elementBelow !== event.target) {
            const simulatedEvent = new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true,
              clientX: x,
              clientY: y
            });
            elementBelow.dispatchEvent(simulatedEvent);
          }
        }, 50); // Short delay to ensure the element is fully visible
      }
    }
  }
  </script>
  
  <style scoped>
  button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
    z-index: 10;
  }
  </style>
  