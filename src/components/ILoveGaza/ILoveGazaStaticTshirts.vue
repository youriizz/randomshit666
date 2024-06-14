<template>
  <div class="tshirt-container" @click="handleClick">
    <img v-if="isImage(contents[0])" :src="contents[0]" alt="T-Shirt Image" class="tshirt-image" draggable="false">
    <div class="price-tag" v-if="contents[1]">
      <template v-if="isOnSale(contents[1])">
        <span class="old-price">{{ getOldPrice(contents[1]) }}</span>
        <span class="new-price">{{ getNewPrice(contents[1]) }}</span>
      </template>
      <template v-else>
        <p>{{ contents[1] }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: Array
  },
  methods: {
    handleClick(event) {
      console.log('ILoveGazaStaticTshirts clicked', event);
      this.$emit('clicked');
    },
    isImage(content) {
      return content.includes('.jpg') || content.includes('.gif') || content.includes('.svg') || content.includes('.png');
    },
    isOnSale(content) {
      return content.includes('|');
    },
    getOldPrice(content) {
      return content.split('|')[0];
    },
    getNewPrice(content) {
      return content.split('|')[1];
    }
  }
}
</script>

<style scoped>
.tshirt-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.tshirt-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: rgb(238, 238, 238);
}

.price-tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 30px;
}

.old-price {
  text-decoration: line-through;
  margin-right: 10px;
  color: white;
}

.new-price {
  color: red;
  font-weight: bold;
}
</style>
