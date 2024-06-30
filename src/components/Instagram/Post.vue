<template>
    <div class="card">
        <div class="top">
            <div class="userDeatils">
                <div class="profileImg">
                    <img src="" alt="user" class="cover">
                </div>
                <h3>Nikhil Kumar<br><span>Web Designer</span></h3>
            </div>
            <div class="dot">
                <img src="" alt="dot">
            </div>
        </div>
        <div class="imgBg">
            <img src="" alt="bg" class="cover">
        </div>
        <div class="btns">
            <div class="left">
                <img src="" alt="heart" class="heart" onclick="likeButton()">
                <img src="" alt="comment">
                <img src="" alt="share">
            </div>
            <div class="right">
                <img src="" alt="bookmark">
            </div>
        </div>
        <h4 class="likes">{{ post.likes }} likes</h4>
        <h4 class="message">
            <b>Nikhil Kumar</b>
            Captain America: Civil War
            <span>#ironman</span>
            <span>#captainamerica</span>
        </h4>
        <h4 class="comments">View all 546 comments</h4>
        <div class="addComments">
            <div class="userImg">
                <img src="" alt="user" class="cover">
            </div>
            <input type="text" class="text" placeholder="Add a comment...">
        </div>
        <h5 class="postTime">{{ post.date }}</h5>
    </div>
</template>

<script setup>
const props = defineProps({
    post: Object
})


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

.card .top .userDeatils {
    display: flex;
    align-items: center;
}

.card .top .userDeatils .profileImg {
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

.card .top .userDeatils h3 {
    font-size: 18px;
    color: #4d4d4f;
    font-weight: 700;
    line-height: 1rem;
    cursor: pointer;
}

.card .top .userDeatils span {
    font-size: 0.75em;
}

.card .top .dot {
    transform: scale(0.6);
    cursor: pointer;
}

.imgBg {
    position: relative;
    width: 100%;
    height: 320px;
    margin: 10px 0 15px;
}

.btns {
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

.postTime {
    margin-top: 10px;
    font-weight: 500;
    color: #777;
}
</style>