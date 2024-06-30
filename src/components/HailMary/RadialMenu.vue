<template>
    <div class="radial-menu">
        <div @click="select(index)" class="button" v-for="(model, index) in models" :key="index"
            :class="{ active: model.active }">
            <i>{{ model.icon }}</i>
        </div>
        <div class="traffic-light-button-wrapper">
            <div @click="selectTrafficLights" class="button" :class="{ active: isTrafficLightSelected }">
                <i>+</i>
            </div>
            <div v-if="isTrafficLightSelected" class="traffic-light-container">
                <TrafficLightBtn class="traffic-light slide-in-left" light-type="red" />
                <TrafficLightBtn class="traffic-light slide-in-left" light-type="orange" :orange-route="orangeRoute" />
                <TrafficLightBtn class="traffic-light slide-in-left" light-type="green" :green-route="greenRoute" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TrafficLightBtn from '../TrafficLightBtn.vue';

const props = defineProps(['models']);
const emit = defineEmits(['select:model']);

const isTrafficLightSelected = ref(false);

function select(index) {
    emit('select:model', index)

    // Uncomment to disable the traffic light button when selecting a new model
    // isTrafficLightSelected.value = false;
}

function selectTrafficLights() {
    // Enable mode -> needs a disable function somewhere
    // isTrafficLightSelected.value = true;

    // Toggle mode
    isTrafficLightSelected.value = !isTrafficLightSelected.value;
}

</script>

<style scoped>
.radial-menu {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 50px;
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

.traffic-light-button-wrapper {
    position: relative;
}

.traffic-light-container {
    top: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
}

.traffic-light {
    position: absolute;
    height: 32px !important;
    width: 32px !important;
    -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.traffic-light:nth-child(1) {
    top: 0;
}

.traffic-light:nth-child(2) {
    top: -50px;
}

.traffic-light:nth-child(3) {
    top: -100px;
}

@-webkit-keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 1;
    }
}

@keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 1;
    }
}

@-webkit-keyframes slide-in-bottom {
    0% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateY(-50px);
        transform: translateY(-50px);
        opacity: 1;
    }
}

@keyframes slide-in-bottom {
    0% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateY(-50px);
        transform: translateY(-50px);
        opacity: 1;
    }
}

@media only screen and (min-width: 1200px) {
    .radial-menu {
        width: 50px;
        height: 250px;
        top: 50%;
        left: 5%;
        flex-direction: column;
    }

    .traffic-light-container {
        flex-direction: column;
    }

    .traffic-light {
        -webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .traffic-light:nth-child(1) {
        left: 0;
        top: 0;
    }

    .traffic-light:nth-child(2) {
        left: 50px;
        top: 0;
    }

    .traffic-light:nth-child(3) {
        left: 100px;
        top: 0;
    }
}
</style>