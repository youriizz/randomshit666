<template>
    <div class="tshirt-container">
      <img :src="image" alt="T-Shirt Image"/>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String
    }
  }
  </script>
  
  <style scoped>
  .tshirt-container img {
    width: 100%; 
    height: auto;
  }
  </style>
  