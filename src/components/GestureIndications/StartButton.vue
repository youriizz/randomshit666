<template>
  <button @click="handleClick" :class="{ 'move': move }">{{ buttonText }}</button>
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
  data() {
    return {
      move: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.move = true;
    }, 100); // Delay before starting the move
  },
  methods: {
    handleClick(event) {
      console.log('Start button clicked');
      this.$emit('start');
      if (this.clickThrough) {
        this.simulateClickBelow(event);
      }
    },
    async simulateClickBelow(event) {
      await this.$nextTick();
      console.log('Simulating click below the button');
      const rect = event.target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const elementBelow = document.elementFromPoint(x, y);

      if (elementBelow && elementBelow !== event.target) {
        console.log('Element below:', elementBelow);
        const simulatedEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: x,
          clientY: y
        });
        elementBelow.dispatchEvent(simulatedEvent);
      }
    }
  }
};
</script>

  
<style scoped>
button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  z-index: 10;
  transition: opacity 1s, transform 1s;
  opacity: 0;
  transform: translateY(0); /* Initial position */
  position: absolute; /* Ensure button can move independently */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button.move {
  opacity: 1;
  transform: translate(-50%, 300%); /* Move 20% down */
}
</style>
