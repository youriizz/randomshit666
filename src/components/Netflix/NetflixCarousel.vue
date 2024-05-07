<script>
import { defineComponent } from 'vue'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css/core';

export default defineComponent({
    props: {
        idx: {
            type: Number,
        },
    },
    mounted() {
        // Initialize Splide with Autoscroll extension
        new Splide('#splide-' + this.idx, this.options).mount({ AutoScroll });
    },
    computed: {
        options() {
            return {
                arrows: false,
                type: 'loop',
                perPage: 7,
                pagination: false,
                autoScroll: {
                    speed: 2,
                    rewind: false,
                    pauseOnHover: false,
                    pauseOnFocus: true,
                },
                direction: this.idx % 2 ? 'ltr' : 'rtl'
            }
        },
    },
})
</script>

<template>
    <div class="netflix-carousel">
        <div :id="'splide-' + this.idx" class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: red;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: blue;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: green;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: red;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: blue;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: green;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: red;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: blue;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: green;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: red;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: blue;" />
                    </li>
                    <li class="splide__slide">
                        <img class="slide" height="200" width="300" style="background-color: green;" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.netflix-carousel {
    width: 100%;
}

.marquee {
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 200px;
    overflow-x: hidden;
}

.track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 2s linear infinite;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}
</style>
