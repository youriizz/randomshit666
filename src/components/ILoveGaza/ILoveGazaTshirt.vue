<template>
  <div class="tshirt-container" @click="handleClick">
    <!-- Affiche le contenu dynamique pour le premier t-shirt basé sur le nombre de clics -->
    <template v-if="isInteractive">
      <div v-for="(content, index) in displayContent" :key="index">
        <template v-if="isImage(content)">
          <img :src="content" alt="Image T-Shirt">
        </template>
        <template v-else>
          <p>{{ content }}</p>
        </template>
      </div>
    </template>
    <!-- Affiche une image pour les autres t-shirts -->
    <template v-else>
      <img :src="tshirt.contents[0]" alt="T-Shirt Image">
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tshirt: {
      type: Object,
      required: true
    },
    isInteractive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      if (this.isInteractive) {
        this.$emit('clicked', this.tshirt.id);
      }
    },
    isImage(content) {
      return content.includes('.jpg') || content.includes('.gif'); // Vérifie si le contenu est une image
    }
  },
  computed: {
    displayContent() {
      if (this.isInteractive && this.tshirt && Array.isArray(this.tshirt.contents)) {
        return this.tshirt.contents.slice(0, this.$parent.clickCount);
      }
      return this.tshirt ? this.tshirt.contents : [];
    }
  }
}
</script>

<style scoped>
.tshirt-container img {
  width: 100%; /* Assure que l'image prend toute la largeur du conteneur */
  height: auto; /* Maintient le ratio d'aspect de l'image */
}
.tshirt-container p {
  font-size: 16px; /* Taille de texte adaptée */
  padding: 10px; /* Espacement autour du texte */
}
</style>