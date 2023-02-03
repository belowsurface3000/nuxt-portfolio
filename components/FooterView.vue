<template>
    <footer id="footer">
        <picture>
            <source src="/images/bannerSmall.jpg" media="(max-width: 850px)" />
            <source src="/images/bannerMid.jpg" media="(max-width: 1600px)" />
            <source src="/images/bannerHigh.jpg" />
            <img src="/images/banner.jpg" alt="The belowsurface.de banner" />
        </picture>

        <div class="content">
            <h1>Reached the end!</h1>
            <div class="links">
                <a href="https://github.com/belowsurface3000?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://besurelabel.de" target="_blank" rel="noreferrer">Music Label</a>
                <a href="https://soundcloud.com/belowsurface" target="_blank" rel="noreferrer">Soundcloud</a>
                <a href="https://www.youtube.com/c/BeSurelabel/featured" target="_blank" rel="noreferrer">Youtube</a>
            </div>
        </div>

        <div class="bottom-text">
            <p>(c) 2023 Below Surface Medien</p>
            <div>
                <router-link to="/impressum">Impressum</router-link>
                <p>|</p>
                <router-link to="/datenschutz">Datenschutz</router-link>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    @import "../assets/styles/reset.scss";
    @import "../assets/styles/variables.scss";
    @import "../assets/styles/mixins.scss";

    footer {
        height: 100vh;
        width: 100%;
        position: relative;
        @include flexBox;

        img {
            position: absolute;
            top: 0;
            height: 100vh;
            width: 100%;
            z-index: -100;
            object-fit: cover;
            opacity: .15;
        }

        .content {
            width: 100%;
            @include flexBox;
            flex-direction: column;

            h1 {
                text-align: center;
                color: $prim-color;
                text-shadow: $text-shadow-dark;
                font-size: 5rem;
                letter-spacing: 2px;
                word-spacing: 5px;
                margin-bottom: 30px;
            }

            .links {
                > a {
                    margin: 0 10px;
                    border-bottom: solid 2px transparent;
                }
                > a:hover {
                    border-bottom: solid 2px $prim-color;
                }
            }
        }

        .bottom-text {
            position: absolute;
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%);
            @include flexBox;
            flex-direction: column;

            p, a {
                padding: 0;
                font-size: 1.3rem;
            }

            > div {
                @include flexBox;
                > a {
                    margin: 0 10px;
                    border-bottom: solid 2px transparent;
                }
                > a:hover {
                    border-bottom: solid 2px $prim-color;
                }
            }
        }
    }
</style>