<template>
    <div class="media-container">
        <img src="/src/assets/Netflix/WhatsApp Image 2024-05-08 at 11.13.39 AM.jpeg">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.media-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgb(184, 184, 184); /* Gris pour voir les limites */
    display: flex;
    justify-content: center;
    align-items: center;
}

img, video {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style>