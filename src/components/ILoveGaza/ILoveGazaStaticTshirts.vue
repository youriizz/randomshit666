<template>
    <div class="tshirt-container">
      <img v-if="isImage(contents[0])" 
           :src="contents[0]" 
           alt="T-Shirt Image" 
           class="tshirt-image">
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
      isImage(content) {
        return content.includes('.jpg') || content.includes('.gif') || content.includes('.svg') || content.includes('.png'); // Vérifie si le contenu est une image
      },
      isOnSale(content) {
        return content.includes('|'); // Vérifie si le contenu contient un caractère | pour les prix soldés
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
    object-fit: contain; /* Pour que l'image couvre toute la surface sans déformation */
    background-color: rgb(238, 238, 238);

  }
  
  .price-tag {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7); /* Fond semi-transparent pour la lisibilité */
    color: white;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 30px;
  }

  .old-price {
  text-decoration: line-through;
  margin-right: 10px;
  color: white; /* Pour garder la couleur blanche */
}

.new-price {
  color: red;
  font-weight: bold;
}
  </style>
  