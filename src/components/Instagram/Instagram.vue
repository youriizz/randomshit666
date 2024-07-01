<template>
    <div class="instagram">
        <Post v-for="post in posts" :key="post.id" :post="post" @push-comment="fetchPosts" />
    </div>
</template>
<style scoped>
.instagram {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<script>
import { db } from "@/database/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import Post from "./Post.vue";

export default {
    components: { Post },
    data() {
        return {
            posts: [],
        }
    },

    async mounted() {
        await this.fetchPosts();
    },

    methods: {
        async fetchPosts() {
            try {
                const q = query(
                    collection(db, import.meta.env.VITE_FIREBASE_COLLECTION_INSTAGRAM)
                );
                const querySnapshot = await getDocs(q);
                this.posts = querySnapshot.docs.map((doc) => {
                    return doc.data();
                });
            } catch (error) {
                console.error(error);
            }
        },
    },
}
</script>