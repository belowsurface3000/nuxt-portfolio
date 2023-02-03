<template>
    <div>
        <h4>In the Web</h4>

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
        {   image: "/images/references/web/besure1.jpg", 
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: "/images/references/web/besure2.jpg",
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: "/images/references/web/besure3.jpg",
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: "/images/references/web/gambia1.jpg",
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
        },
        {   image: "/images/references/web/gambia2.jpg",
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
        },
        {   image: "/images/references/web/gambia3.jpg",
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
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