<template>
    <div class="navigation-trigger" v-on:click="toggleNav">
        <div class="nav-icon" :class="{ open: showNav }" >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeToRefs } from 'pinia'; // for keeping the global state reactive here
    import { useNavigationStore } from "@/stores/NavigationStore";
    const navigationStore = useNavigationStore();
    const { toggleNav } = useNavigationStore();
    const { showNav } = storeToRefs(navigationStore);

    export default {
        data() {
            return {
                showNav,
                toggleNav
            }
        },
    }
</script>

<style lang="scss">
    @import "../assets/styles/reset.scss";
    @import "../assets/styles/variables.scss";
    @import "../assets/styles/mixins.scss";

    .navigation-trigger {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        background: rgba(0, 0, 0, 0.4);
        padding: 5px 10px;
        margin: 25px;
        border-radius: 5px;
        cursor: pointer;
        transition: top .4s;
        display: none;

        .nav-icon {
            width: 55px;
            height: 45px;
            position: relative;
            margin: 10px 5px;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .5s ease-in-out;
            -moz-transition: .5s ease-in-out;
            -o-transition: .5s ease-in-out;
            transition: .5s ease-in-out;
            cursor: pointer;

            span {
                display: block;
                position: absolute;
                height: 6px;
                width: 100%;
                background: $prim-color;
                border-radius: 9px;
                opacity: 1;
                left: 0;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: .25s ease-in-out;
                -moz-transition: .25s ease-in-out;
                -o-transition: .25s ease-in-out;
                transition: .25s ease-in-out;
                
                &:nth-child(1) {top: 0px;}
                &:nth-child(2) {top: 18px;}
                &:nth-child(3) {top: 36px;}
            }
        }

        .open {
            span:nth-child(1) {
                top: 18px;
                -webkit-transform: rotate(135deg);
                -moz-transform: rotate(135deg);
                -o-transform: rotate(135deg);
                transform: rotate(135deg);
            }

            span:nth-child(2) {
                opacity: 0;
                left: -60px;
            }

            span:nth-child(3) {
                top: 18px;
                -webkit-transform: rotate(-135deg);
                -moz-transform: rotate(-135deg);
                -o-transform: rotate(-135deg);
                transform: rotate(-135deg);
            }
        }
    }

    // .navigation-button-hidden {
    //     top: -100px;
    // }

    // Navigation button is only visible on screens with less than 1500px width
    @media screen and (max-width: 1499px) {
        .navigation-trigger {
            display: block;
        }
    }

    @media screen and (max-width: 1050px) {
        .navigation-trigger {
            .nav-icon {
                width: 40px;
                height: 35px;
                span {
                    height: 5.5px;
                }
                span:nth-child(1) {top: 0px;}
                span:nth-child(2) {top: 15px;}
                span:nth-child(3) {top: 30px;}
            }
            .open span:nth-child(1) {
                top: 18px;
            }
            .open span:nth-child(3) {
                top: 18px;
            }
        }
    }

    @media screen and (max-width: 800px) {
        .navigation-trigger {
            .nav-icon {
                width: 40px;
                span {
                    height: 5px;
                }
            }
        }
    }

    @media screen and (max-width: 500px) {
        .navigation-trigger {
            margin: 15px;
            .nav-icon {
                width: 35px;
                margin: 5px;
                span {
                    height: 4px;
                }
            }
        }
    }
</style>