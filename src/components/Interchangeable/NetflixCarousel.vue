<script>
import { defineComponent } from 'vue'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css/core';
import TrafficLightBtn from '../TrafficLightBtn.vue';

export default defineComponent({
    components: { TrafficLightBtn },
    props: {
        idx: {
            type: Number,
        },
        carousel: {
            type: Object,
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
                perPage: 10,
                pagination: false,
                autoScroll: {
                    speed: this.carousel.speed || 2,
                    rewind: false,
                    pauseOnHover: false,
                    pauseOnFocus: true,
                },
                autoWidth: true,
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
                    <li class="splide__slide" v-for="(item, index) in carousel.items" :key="index">
                        <div class="splide__slide__container netflix-item-container">
                            <img v-if="item.type === 'img'" class="slide image" :height="carousel.height"
                                :width="carousel.width" :src="item.src" />

                            <div v-else-if="item.type === 'txt'" class="slide text" :style="{
                                height: `${carousel.height}px`, width: `${carousel.width}px`
                            }">
                                <div>{{ item.src }}</div>
                            </div>

                            <div v-else-if="item.type === 'traffic-red'" class="slide traffic" :style="{
                                height: `${carousel.height}px`, width: `${carousel.width}px`
                            }">
                                <TrafficLightBtn lightType="red" />
                            </div>

                            <div v-else-if="item.type === 'traffic-green'" class="slide traffic" :style="{
                                height: `${carousel.height}px`, width: `${carousel.width}px`
                            }">
                                <TrafficLightBtn lightType="green" greenRoute="similar" />
                            </div>

                            <div v-else-if="item.type === 'traffic-orange'" class="slide traffic" :style="{
                                height: `${carousel.height}px`, width: `${carousel.width}px`
                            }">
                                <TrafficLightBtn lightType="orange" orangeRoute="notsimilar" />
                            </div>
                        </div>
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

.netflix-item-container {
    padding: 0px
}

.image {
    object-fit: contain;
    padding-left: 0px;
}

.text,
.traffic {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
