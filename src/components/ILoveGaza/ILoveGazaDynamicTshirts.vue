<template>
  <div class="tshirt-container" @click="handleClick" draggable="false">
    <div v-for="(content, index) in displayContent" :key="index" :class="getClass(index)">
      <template v-if="isImage(content)">
        <img :src="content" alt="Image T-Shirt" draggable="false">
      </template>
      <template v-else>
        <p>{{ content }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: Array,
    clickCount: Number
  },
  methods: {
    handleClick() {
      this.$emit('clicked');
    },
    isImage(content) {
      return content.includes('.jpg') || content.includes('.gif') || content.includes('.svg') || content.includes('.png'); // Vérifie si le contenu est une image
    },
    getClass(index) {
      return `dynamic-class-${index}`;
    }
  },
  computed: {
    displayContent() {
      return this.contents.slice(0, this.clickCount);
    }
  }
}
</script>

<style scoped>
img,
.tshirt-container {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.tshirt-container img {
  width: 100%;
  height: auto;
}


.tshirt-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Classes dynamiques pour le premier t-shirt */
.dynamic-class-0 {
  position: absolute;
  color: red;
  width: 8%;
  left: 36%;
  bottom: 55%;
}

.dynamic-class-1 {
  position: absolute;
  width: 17%;
  margin: 0 auto;
  left: 49%;
  bottom: 53%;

}

.dynamic-class-2 {
  position: absolute;
  color: blue;
  bottom: 38%;
  width: 35%;
}

.dynamic-class-3 {
  position: absolute;
  width: 95%;
  margin: 0 auto;
  z-index: -1;

}

.dynamic-class-4 {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  /* Fond semi-transparent pour la lisibilité */
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 30px;
}

.dynamic-class-5 {
  background-color: rgb(232, 232, 232);
  width: 100%;
  height: 100%;
  z-index: -2;
}


@media (max-width: 600px) {
  .dynamic-class-0 {
    width: calc(8% + 3%);
    left: 33%;
  }

  .dynamic-class-1 {
    width: calc(17% + 6%);
  }

  .dynamic-class-2 {
    width: calc(35% + 5%);
  }

  .dynamic-class-3 {
    width: calc(95% + 20%);
  }

  .dynamic-class-4 {
    font-size: 30px;
    /* Augmentation proportionnelle du font-size pour l'item spécifique */
  }
}
</style>