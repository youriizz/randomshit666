<template>
    <div><span class="oval-thumbnail-writing">your phone away in the crowd and it would fall on the ground. how would you react if someone just threw your phone away in the crowd and it would fall on the ground? how would you react if someone just threw your phone away in the crowd and it would fall on the ground?</span></div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  .oval-thumbnail-writing {
  position: absolute;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  top: -8px;
  letter-spacing: -2px;
  line-height: 1.2;
  animation: moveTextaround1 10s infinite alternate ease-in-out;
  cursor: pointer;

}

.oval-thumbnail-writing:hover, .oval-thumbnail-writing:active {
    text-align: justify;
}

@keyframes moveTextaround1 {
  0% {
    word-spacing: -10px;
    
  }

  100% {
    word-spacing: 60px;
    
  }

    
}

@media (max-width: 600px) {

.oval-thumbnail-writing {
    font-family: Helvetica;
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    top: -2px;
    animation: moveTextaround1 7s infinite alternate ease-in-out

}

@keyframes moveTextaround1 {
  0% {
    word-spacing: -10px;
    
  }
  100% {
    word-spacing: 50px;
    
  }
}
}



  </style>