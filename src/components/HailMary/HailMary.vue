<template>
    <div>
        <RadialMenu @select:model="selectModel" :models="models" />
        <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window">
            <Camera :position="{ x: 1, y: 0, z: 0 }" />
            <Scene background="white">
                <AmbientLight></AmbientLight>
                <GltfModel v-if="models[0].active" src="/models/hailmary.glb" @error="handleError" @load="onLoad" />
                <GltfModel v-if="models[1].active" src="/models/korean.glb" @error="handleError" @load="onLoad" />
                <GltfModel v-if="models[2].active" src="/models/meatboy.glb" @error="handleError" @load="onLoad" />
                <GltfModel v-if="models[3].active" src="/models/forklift.glb" @error="handleError" @load="onLoad" />
            </Scene>
        </Renderer>
    </div>
</template>

<script setup>
import RadialMenu from "@/components/HailMary/RadialMenu.vue";
import { ref } from 'vue';
import {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
} from 'troisjs';

const models = ref([
    {
        path: "/models/Hail Mary.glb",
        active: true,
        icon: "+"
    },
    {
        path: "/models/korean.glb",
        active: false,
        icon: "+"
    },
    {
        path: "/models/Hail Mary.glb",
        active: false,
        icon: "+"
    },
    {
        path: "/models/Hail Mary.glb",
        active: false,
        icon: "+"
    },
]);

function selectModel(index) {
    models.value.forEach((model) => {
        model.active = false;
    });

    models.value[index].active = true;
}

function handleError(error) {
    console.log(error);
}

function onLoad(model) {
    console.log(model)
}
</script>