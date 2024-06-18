<template>
    <div class="radial-menu">
        <div @click="select(index)" class="button" v-for="(model, index) in models" :key="index"
            :class="{ active: model.active }">
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['models']);

const emit = defineEmits(['select:model']);

function select(index) {
    emit('select:model', index)
}

</script>

<style scoped>
.radial-menu {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 50;
    border: 1px solid black;
}

.button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    opacity: 50%;
    border: 1px solid black;
}

.button.active {
    background-color: red;
    opacity: 100%;
}

.button:hover {
    scale: 1.1;
    animation: ease-out 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.slide-in-left {
    -webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
}


@media only screen and (min-width: 1200px) {
    .radial-menu {
        width: 50px;
        height: 200px;
        top: 50%;
        left: 5%;
        flex-direction: column;
    }
}
</style>