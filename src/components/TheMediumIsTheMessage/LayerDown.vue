<template>
  <div class="layer-down">
    <div class="content-container">
      <img v-if="currentTextIsImage" :src="currentText" alt="Book Text" class="image-container">
      <span v-else class="text-content">{{ currentText }}</span>
    </div>
  </div>
</template>

<script>
import phonetext from '@/assets/TheMediumIsTheMessage/phonetext.jpg';
import booktext from '@/assets/TheMediumIsTheMessage/booktext.webp';
import discussiontext from '@/assets/TheMediumIsTheMessage/discussiontext.webp';
import radiotext from '@/assets/TheMediumIsTheMessage/radiotext.webp';
import tv1text from '@/assets/TheMediumIsTheMessage/tv1text.jpg';


export default {
  props: {
    scrollPosition: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      texts: [
        booktext,  // Image pour la première section
        discussiontext,
        tv1text,
        radiotext,
        phonetext,
        ''
      ]
    };
  },
  computed: {
    currentText() {
      const sectionHeight = window.innerHeight;
      let initialSectionHeight, changeSectionHeight;

      if (window.innerWidth >= 768) {  // Adjust these values for desktop view
        initialSectionHeight = sectionHeight * 0.7;
        changeSectionHeight = sectionHeight * 1.5;
      } else {  // Default values for mobile view
        initialSectionHeight = sectionHeight * 0.6;
        changeSectionHeight = sectionHeight * 1.1;
      }

      let index;
      if (this.scrollPosition < initialSectionHeight) {
        index = 0;
      } else {
        index = Math.floor((this.scrollPosition - initialSectionHeight) / changeSectionHeight) + 1;
      }

      // Assurer que l'index ne dépasse pas le nombre de textes disponibles
      index = Math.min(index, this.texts.length - 1);

      return this.texts[index] || this.texts[this.texts.length - 1];
    },
    currentTextIsImage() {
      return [booktext, discussiontext, tv1text, radiotext, phonetext].includes(this.currentText);
    }
  }
};
</script>

<style scoped>
.layer-down {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.text-content {
  font-size: 2em;
  color: rgb(0, 0, 0);
}

.image-container {
  max-width: 100%;
  max-height: 100%;
}
</style>
