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
        items: {
            type: Array
        }
    },
    mounted() {
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
                    <!-- <li class="splide__slide" v-for="(item, index) in items" :key="index">
                        <img class="slide" height="200" width="300" style="background-color: red;" />
                    </li> -->
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
</style>
