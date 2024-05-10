<template>
    <div class="traffic-light">
        <TraficLightBtn light-type="red" />
        <TraficLightBtn light-type="orange" />
        <TraficLightBtn light-type="green" />
    </div>
</template>

<script>
import TrafficLightBtn from "./TrafficLightBtn.vue";

export default {
    components: { TrafficLightBtn },
}
</script>


<style scoped>
.traffic-light {
    border: 1px solid black;
    position: absolute;
    width: 100px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
