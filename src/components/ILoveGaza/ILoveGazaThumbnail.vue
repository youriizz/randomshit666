<template>
    <div class="container-1">
        <img src="/ILoveGaza/animation1rot.gif" alt="Animated Heart" class="FF100item-12-GIF-1" width="100%" height="100%">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container-1 {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.FF100item-12-GIF-1 {
    display: flex;
    width: 100%;
    cursor: pointer;
    object-fit: contain;
}

.container-1:active, .container-1:hover {
    background-color: rgb(255, 106, 106);
}
</style>