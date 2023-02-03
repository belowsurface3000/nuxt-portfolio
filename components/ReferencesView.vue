<template>
    <div className="references" id="references">
        <h2>References 🪗</h2>
        <p>Fully functional websites, top performing tracks on Beatport, gigs in amazing locations and one hour experimental films. Here you can have a look into it and follow the links to explore them in full effect! By the way: Just click on a image slider to increase its size!</p>
        <div className="sliders-container">
            <SliderWeb />
            <SliderVideo />
            <SliderMusic />
        </div>
        <div className="socials">
            <a href="https://www.youtube.com/channel/UCB0jjmkPvZ3r9NYJ7HCtpxw" target="_blank" rel="noreferrer"><img src="/images/icons/yt.png" alt="Youtube Logo" /></a>
            <a href="https://open.spotify.com/artist/6tcSqEAmHTLmrztjM0dQl2" target="_blank" rel="noreferrer"><img src="/images/icons/sf.png" alt="Spotify Logo" /></a>
            <a href="https://soundcloud.com/besurelabel" target="_blank" rel="noreferrer"><img src="/images/icons/sc.png" alt="Soundcloud Logo" /></a>
            <a href="https://www.beatport.com/label/be-sure/47385" target="_blank" rel="noreferrer"><img src="/images/icons/bp.png" alt="Beatport Logo" /></a>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import SliderWeb from "../components/SliderWeb.vue";
    import SliderVideo from "../components/SliderVideo.vue";
    import SliderMusic from "../components/SliderMusic.vue";

    export default defineComponent({
    components: {
      SliderWeb,
      SliderVideo,
      SliderMusic
    },
  });
</script>