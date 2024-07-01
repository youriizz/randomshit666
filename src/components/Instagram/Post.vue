<template>
    <div class="card">
        <div class="top">
            <div class="user_details">
                <div class="profileImg">
                    <img src="" alt="user" class="cover">
                </div>
                <h3>{{ post.author }}<br></h3>
            </div>
        </div>
        <div class="carousel_container">
            <Carousel wrap-around autoplay>
                <Slide v-for="(comment, index) in post.comments" :key="index">
                    <div class="item">
                        {{ comment.content }}
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <div class="btns">
            <div class="left">
                <img src="/Instagram/like.svg" alt="heart" class="heart" onclick="likeButton()">
                <img src="/Instagram/comment.svg" alt="comment">
                <img src="/Instagram/send.svg" alt="share">
            </div>
            <div class="right">
                <img src="/Instagram/save.svg" alt="bookmark">
            </div>
        </div>
        <h4 class="likes">{{ post.likes }} likes</h4>
        <h4 class="message">
            {{ post.description }}
        </h4>
        <h4 class="comments">View all {{ post.comments.length }} comments</h4>
        <div class="addComments">
            <input v-model="newComment" type="text" class="text" placeholder="Add a comment..."
                @keydown.enter="pushComment">
            <button>Send</button>
        </div>
        <h5 class="date">{{ post.date }}</h5>
    </div>
</template>

<script setup>
import { db } from "@/database/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import { ref } from 'vue';

const props = defineProps({
    post: Object
})

const emit = defineEmits(['pushComment']);

const newComment = ref(null);

const pushComment = async () => {
    const comments = props.post.comments;
    comments.push({
        author: 'Tony',
        content: newComment.value
    });

    try {
        const postRef = doc(db, import.meta.env.VITE_FIREBASE_COLLECTION_INSTAGRAM + '/' + props.post.id);
        await updateDoc(postRef, {
            'comments': arrayUnion({
                'author': 'Tony',
                'content': newComment.value
            }),
        });
    } catch (error) {
        console.error(error);
    }

    newComment.value = null;
    emit('pushComment');
}
</script>

<style scoped>
.card {
    position: relative;
    width: 360px;
    min-height: 400px;
    background: #fff;
    box-shadow: 15px 15px 60px rgba(0, 0, 0, .15);
    padding: 20px;
}

.card .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card .top .user_details {
    display: flex;
    align-items: center;
}

.card .top .user_details .profileImg {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
    overflow: hidden;
}

.cover {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
}

.card .top .user_details h3 {
    font-size: 18px;
    color: #4d4d4f;
    font-weight: 700;
    line-height: 1rem;
    cursor: pointer;
}

.card .top .user_details span {
    font-size: 0.75em;
}

.card .top .dot {
    transform: scale(0.6);
    cursor: pointer;
}

.carousel_container {
    position: relative;
    width: 100%;
    height: 320px;
    margin: 10px 0 15px;
}

.carousel,
.carousel__viewport,
.carousel__track,
.carousel__slide {
    margin: 0 !;
    width: 100%;
    height: 320px;
}

::v-deep .carousel__track {
    margin-top: 0;
    margin-bottom: 0;
}

.item {
    width: 100%;
    height: 100%;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid black;
}

.btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btns .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btns img {
    max-width: 24px;
    cursor: pointer;
}

.btns .left img {
    margin-right: 8px;
}

.likes {
    margin-top: 5px;
    font-size: 1em;
    color: #4d4d4f;
}

.message {
    font-weight: 400;
    margin-top: 5px;
    color: #777;
    line-height: 1.5em;
}

.message b {
    color: #262626;
}

.message span {
    color: #1d92ff;
    cursor: pointer;
}

.comments {
    margin-top: 10px;
    align-items: center;
    color: #999;
}

.addComments {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.addComments .userImg {
    position: relative;
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;
}

.addComments .text {
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 18px;
    color: #262626;
}

.addComments .text::placeholder {
    color: #777;
}

.date {
    margin-top: 10px;
    font-weight: 500;
    color: #777;
}
</style>