<template>
    <div class="image-container">
        <img src="/Netflix/Thumbnail/centaurehead.png" class="image1">
        <img src="/Netflix/Thumbnail/centaurebody.png" class="image2">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

img {
    position: absolute;
    display: flex;
    width: 80%;
    height: 80%;
    object-fit: contain;
}

.image1 {
    z-index: 1;
    animation: Head 7s ease-in-out infinite;
}

.image2 {
    z-index: 1;
    animation: Body 7s ease-in-out alternate-reverse infinite;
}

.image-container:hover, .image-container:active {
    background-color: black;
}



@keyframes Head {
    0%, 100% {
        right: -150%;
    }
    30%, 70% {
        right: 10%;
    }
} 
 
@keyframes Body {

    0%, 100% {
        right: 150%;
    }
    30%, 70% {
        right: 10%;
    }
}


</style>
