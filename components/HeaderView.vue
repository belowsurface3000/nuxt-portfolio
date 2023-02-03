<template>
    <header>
        <picture>
            <source src="/images/bannerSmall.jpg" media="(max-width: 850px)" />
            <source src="/images/bannerMid.jpg" media="(max-width: 1600px)" />
            <source src="/images/bannerHigh.jpg" />
            <img src="/images/banner.jpg" alt="The belowsurface.de banner" />
        </picture>
        <div className="banner">
            <h1>Below Surface Medien</h1>
            
            <div>
                <h4>Web-Development</h4>
                <h4>Music Production</h4>
                <h4>Video Editing</h4>
            </div>
        </div>
    </header> 
</template>

<style lang="scss">
    @import "../styles/reset.scss";
    @import "../styles/variables.scss";
    @import "../styles/mixins.scss";

    header {
        height: 100vh;
        width: 100%;
        position: relative;

        > picture {
            > img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                opacity: .2;
            }
        }

        > .banner {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            > h1 {
                font-size: 5.5rem;
                letter-spacing: 2px;
                word-spacing: 5px;
                margin-bottom: 30px;
            } 

            > h1::before,
            > h1::after {
                content: "🔥";
                margin: 0px 35px;
            }
            
            > div {
                @include flexBox;
                > h4 {
                    font-weight: 400;
                }
                > h4:nth-of-type(1)::after,
                > h4:nth-of-type(2)::after {
                    content: "·";
                    color: $prim-color;
                    margin: 0 10px;
                }
            }
        }
    }
</style>