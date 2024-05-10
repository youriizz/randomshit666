<template>
    <div class="traffic-light">
        <TrafficLightBtn light-type="red" />
        <TrafficLightBtn light-type="orange" />
        <TrafficLightBtn light-type="green" />
    </div>
</template>

<script>
import TrafficLightBtn from "@/components/TrafficLightBtn.vue";

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
