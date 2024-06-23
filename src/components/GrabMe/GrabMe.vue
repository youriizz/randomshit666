<template>
  <div>
    <!-- Introduction Component -->
    <Introduction
      v-if="showIntroduction"
      :title="title"
      :description="description"
      :gestureType="['grab and drop']"
      :buttonText="startButtonText"
      :clickThrough="true"
      :orangeRoute="orangeRoute"
      :greenRoute="greenRoute"
      @start="handleStart"
    />
    <div class="BB151container-1" ref="container">
      <div class="BB151item-1">
        <div
          v-for="(item, index) in items"
          :key="item.id"
          :id="item.id"
          :class="['draggable', 'noselect', item.type]"
          :style="{ display: item.display, left: item.left + 'px', top: item.top + 'px', opacity: item.opacity, transform: 'translate(-50%, -50%)', zIndex: item.zIndex }"
          @mousedown="dragStart($event, item)"
          @touchstart.prevent="dragStart($event, item)"
        >
          <img 
            v-if="item.type === 'image'" 
            :src="item.src" 
            :alt="item.alt" 
            @dragstart.prevent 
            :class="['image', 'image-' + (index + 1)]" 
          />
          <span v-else>{{ item.text }}</span>
        </div>
      </div>
      <TrafficLight 
        v-if="showTrafficLight" 
        :orangeRoute="orangeRoute" 
        :greenRoute="greenRoute" 
        class="traffic-light"
      />
    </div>
  </div>
</template>

<script>
import faceExhaling from '@/assets/GrabMe/faceexhaling.png';
import inBed from '@/assets/GrabMe/inbed.jpeg';
import emojiSad from '@/assets/GrabMe/emojisad.png';
import TrafficLight from "@/components/TrafficLight.vue";
import Introduction from "../GestureIndications/Introduction.vue";

export default {
  components: { 
    TrafficLight,
    Introduction
  },
  data() {
    return {
      items: [
      { id: 'draggable-text-1', type: 'text', text: 'Grab me!', display: 'block', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-text-2', type: 'text', text: 'harder', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-image-1', type: 'image', src: faceExhaling, alt: 'Draggable Image', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-text-3', type: 'text', text: '...', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-text-4', type: 'text', text: '*they lie down*', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-image-2', type: 'image', src: inBed, alt: 'Draggable Image', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-text-5', type: 'text', text: 'I like it when you grab me like that', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-text-6', type: 'text', text: 'Did you do it with the other girls as well?', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-text-7', type: 'text', text: '...', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-text-8', type: 'text', text: 'I don\'t know', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-text-9', type: 'text', text: 'I don\'t remember the other girls', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
      { id: 'draggable-image-3', type: 'image', src: emojiSad, alt: 'Draggable Image', display: 'none', left: 0, top: 0, opacity: 1, zIndex: 1 },
    ],
      isDragging: false,
      currentElement: null,
      startX: 0,
      startY: 0,
      startPos: null,
      showInfo: false,
      isMobile: false,
      showIntroduction: true,
      title: 'Grab me!',
      description: 'Duration : 20 Seconds',
      startButtonText: 'Start',
      orangeRoute: 'notsimilar',
      greenRoute: 'similar',
      showTrafficLight: false,
    };
  },
  mounted() {
    this.centerElements();
  },
  methods: {
    handleStart() {
      this.showIntroduction = false;
    },
    centerElements() {
      const containerWidth = this.$refs.container.offsetWidth;
      const containerHeight = this.$refs.container.offsetHeight;

      this.items.forEach(item => {
        item.left = containerWidth / 2;
        item.top = containerHeight / 2;
      });
    },
    dragStart(e, item) {
      console.log('dragStart', e);
      this.isDragging = true;
      this.currentElement = item;
      const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
      this.startX = clientX;
      this.startY = clientY;
      this.startPos = { left: item.left, top: item.top };
      item.cursor = 'grabbing';
      this.moved = false;

      console.log('Start Position:', this.startPos);

      document.addEventListener('mousemove', this.dragging);
      document.addEventListener('mouseup', this.dragEnd);
      document.addEventListener('touchmove', this.dragging, { passive: false });
      document.addEventListener('touchend', this.dragEnd);
    },
    dragging(e) {
      if (!this.isDragging) return;

      e.preventDefault();
      const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

      const elem = this.currentElement;
      const deltaX = clientX - this.startX;
      const deltaY = clientY - this.startY;

      elem.left = this.startPos.left + deltaX;
      elem.top = this.startPos.top + deltaY;
      this.moved = true;

      console.log('Dragging', elem.id, 'to', elem.left, elem.top);
    },
    dragEnd(e) {
      if (!this.isDragging) return;

      this.isDragging = false;
      const elem = this.currentElement;
      elem.cursor = 'grab';

      const endX = elem.left;
      const endY = elem.top;
      console.log('End Position:', endX, endY);

      const distance = Math.sqrt(
        (endX - this.startPos.left) ** 2 +
        (endY - this.startPos.top) ** 2
      );

      console.log('Dragged Distance:', distance);

      const screenWidth = window.innerWidth;
      const requiredDistance = screenWidth < 1024 ? 50 : 100;

      if (distance > requiredDistance) {
        this.handleDragEnd(elem.id);
        elem.opacity = 0.3;
      }

      document.removeEventListener('mousemove', this.dragging);
      document.removeEventListener('mouseup', this.dragEnd);
      document.removeEventListener('touchmove', this.dragging);
      document.removeEventListener('touchend', this.dragEnd);
    },
    handleDragEnd(elemId) {
    console.log('handleDragEnd', elemId);
    const elemOrder = [
      'draggable-text-1', 'draggable-text-2', 'draggable-image-1', 'draggable-text-3', 
      'draggable-text-4', 'draggable-image-2', 'draggable-text-5', 'draggable-text-6', 
      'draggable-text-7', 'draggable-text-8', 'draggable-text-9', 'draggable-image-3'
    ];

    const currentIndex = elemOrder.indexOf(elemId);
    if (currentIndex === -1) {
      console.error('Element not found in order:', elemId);
      return;
    }

    console.log('Current Index:', currentIndex);

    if (elemId === 'draggable-image-3') {
      this.showTrafficLight = true;
    } else {
      const nextElemId = elemOrder[currentIndex + 1];
      if (nextElemId) {
        const nextElem = this.items.find(item => item.id === nextElemId);
        if (nextElem) {
          console.log('Setting display to block for:', nextElemId);
          nextElem.display = 'block';
          nextElem.zIndex = this.items.length + 1; // Increment zIndex to bring to front
        } else {
          console.error('Next Element not found:', nextElemId);
        }
      } else {
        console.warn('No next element to display for:', elemId);
      }
    }
  }
}
}
</script>


<style scoped>
.BB151container-1 {
  width: 100%;
  height: 100%;
  position: absolute; /* Ajustement de absolute à relative */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}

.BB151item-1 {
  position: relative; /* Gardez-le en relative */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 0px solid black;
}

.draggable {
  position: absolute; /* Gardez-le en absolute pour le drag */
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: grab;
  touch-action: none;
  transform: translate(-50%, -50%);
}

.image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-100%, -50%);
}

.image-3, .image-6, .image-12 {


  width: 90%; /* Change size as needed */
  height: 90%; /* Adjust height to maintain aspect ratio */
}

.draggable.text {
  z-index: 0;
  color: rgb(0, 0, 0);
  text-align: center;
  max-width: 50%;
  font-size: clamp(50px, 12vw, 120px);
  font-weight: 900;
  background-color: rgb(193, 193, 193);
}

.draggable.text:nth-child(1),
.draggable.text:nth-child(2),
.draggable.text:nth-child(7),
.draggable.text:nth-child(8) {
  background-color: rgb(255, 58, 143);
}

.draggable.text:nth-child(9),
.draggable.text:nth-child(10),
.draggable.text:nth-child(11) {
  background-color: rgb(0, 0, 255);
}

.traffic-light {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10000; /* Très élevé pour s'assurer qu'il est au-dessus des autres éléments */
}





.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


@media (max-width: 1024px) {
  .draggable.text {
    max-width: 80%;
  }


.image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0%, -50%);
}

.image-3 {
  transform: translate(15%, -40%);
  width: 80%;
}
.image-6 {
  transform: translate(-80%, -100%);
  width: 120%;
}
.image-12 {
  transform: translate(-80%, -120%);
  width: 170%;
}

}


</style>
