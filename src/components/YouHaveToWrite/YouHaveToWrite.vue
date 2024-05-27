<template>
    <div class="container" draggable="false">
        <div class="char-counter">{{ `You have ${charDiff} characters left to write` }}</div>
        <div class="text">
            <span class="message" v-for="(message, index) in messages" :key="index"
                :style="{ backgroundColor: getColorString(message.content.length) }">{{ message.content }}
            </span>
            <input autofocus class="message" v-model="currentMessage" @blur="resetFocus" @keydown.enter="pushMessage" />
        </div>
    </div>
</template>

<script>
import jsonMessages from "@/database/you-have-to-write.json";

const CHAR_MAX = 50;
const CHAR_MIN = 10;
const LIGHT_YELLOW = "rgb(247, 227, 175)" // 50
const DARK_YELLOW = "rgb(223, 166, 22)" // 10

export default {
    data() {
        return {
            currentMessage: "",
            currentUserCharLimit: 0,
            jsonMessages,
        }
    },
    computed: {
        charDiff() {
            return this.currentUserCharLimit - this.currentMessage.length;
        },
        upperLimit() {
            return CHAR_MAX - CHAR_MIN;
        },
        messages() {
            return this.jsonMessages;
        },
        darkColorRgb() {
            return this.getRgb(DARK_YELLOW);
        },
        lightColorRgb() {
            return this.getRgb(LIGHT_YELLOW);
        },
    },
    mounted() {
        // Check if current user id matches one in the db
        // If yes disable input field and remove focus forever
        // If no enable input
        this.currentUserCharLimit = this.getRandomCharAmount();
    },
    methods: {
        getTextColor(text) {
            return text.length;
        },
        getCharAmountPercentage(charCount) {
            return this.getCharAmountRatio(charCount) * 100;
        },
        getCharAmountRatio(charCount) {
            return (this.getNormalizedCharCount(charCount) / this.getNormalizedCharCount(CHAR_MAX))
        },
        getRandomCharAmount() {
            return Math.floor(Math.random() * (CHAR_MAX - CHAR_MIN + 1) + CHAR_MIN);
        },
        getColorString(value) {
            const rgb = this.interpolateColor(value);
            return `rgb( ${rgb.r}, ${rgb.g}, ${rgb.b})`;
        },
        getCurrentCharCountColor() {
            return this.interpolateColor();
        },
        interpolateColor(value) {
            return {
                r: this.getColorComponent("r", value),
                g: this.getColorComponent("g", value),
                b: this.getColorComponent("b", value),
            }
        },
        getColorComponent(component, value) {
            const x = this.getCharAmountRatio(value);
            return Math.round(this.darkColorRgb[component] * (1 - x) + this.lightColorRgb[component] * x);
        },
        getRgb(color) {
            const [r, g, b] = color.replace('rgb(', '')
                .replace(')', '')
                .split(',')
                .map(str => Number(str));;
            return {
                r,
                g,
                b
            }
        },
        // The char limit needs to be normalized to a base starting from 0 instead of from CHAR_MIN
        // Otherwise the percentage computation would be off
        getNormalizedCharCount(count) {
            return count - CHAR_MIN
        },
        pushMessage() {
            this.messages.push({ content: this.currentMessage });
            this.currentMessage = "";
            this.currentUserCharLimit = this.getRandomCharAmount();
        },
        resetFocus(event) {
            event.target.focus();
            event.stopPropagation();
        }
    },
}
</script>

<style>
.container {
    padding: 50px;
}

.text {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    white-space: normal;
}

.message {
    font-size: 36px;
    flex: none;
    white-space: normal;
}

input.message {
    border: none;
    outline: none;
}
</style>