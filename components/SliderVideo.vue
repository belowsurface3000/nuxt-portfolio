<template>
    <div>
        <h4>In the Video</h4>

        <div class="image-slider-container">
            <div class="left-arrow" @click="prev">&#10094;</div>
            <div class="right-arrow" @click="next">&#10095;</div>

            <transition-group name="fade" tag="div" class="image-slider">
                <div v-for="i in [currentIndex]" :key="i">
                    <img :src="currentSlide.image" :alt="currentSlide.alt" />
                    <a :href="currentSlide.link" target="_blank" rel="noreferrer">{{ currentSlide.text }}</a>
                </div>
            </transition-group>
        </div> 
    </div>
</template>

<script lang="ts">
    const sliderArray = [
        {
            image: "/images/references/video/film_besure3.jpg",
            alt: "Be Sure film screenshot",
            link: "https://www.youtube.com/watch?v=OHDyDXFTe1M",
            text: "Link: Be Sure - a film by Below Surface"
        },
        {
            image: "/images/references/video/film_besure.jpg",
            alt: "Be Sure film screenshot",
            link: "https://www.youtube.com/watch?v=OHDyDXFTe1M",
            text: "Link: Be Sure - a film by Below Surface"
        },
        {
            image: "/images/references/video/film_besure2.jpg",
            alt: "Be Sure film screenshot",
            link: "https://www.youtube.com/watch?v=OHDyDXFTe1M",
            text: "Link: Be Sure - a film by Below Surface"
        },
        {
            image: "/images/references/video/film_shadow.jpg",
            alt: "Shadowtravelink film screenshot",
            link: "https://www.youtube.com/watch?v=aYvRN6d_t4U",
            text: "Shadowtraveling - a film by Below Surface"
        },
        {
            image: "/images/references/video/film_tresor.jpg",
            alt: "Absorbed liveset in Tresor Berlin screenshot - full audio and video recording",
            link: "https://www.youtube.com/watch?v=PwzkRUTl0fU",
            text: "Link: Absorbed LIVE @ Tresor Berlin (Video)"
        }
    ];

    import { ref } from 'vue';
    const reactiveCount = ref(0);

    export default {
        data() {
            return {
                sliderArray,
                currentIndex: 0
            }
        },
        methods: {
            next: function() {
                reactiveCount.value += 1;
            },
            prev: function() {
                reactiveCount.value -= 1;
            }
        },
        computed: {
            currentSlide: function() {
                return sliderArray[Math.abs(reactiveCount.value) % sliderArray.length];
            }
        }
    }
</script>