<template>
    <div class="background-color"></div>
</template>

<style lang="scss">
    @import "../assets/styles/reset.scss";
    @import "../assets/styles/variables.scss";
    @import "../assets/styles/mixins.scss";

    .background-color {
        height: 100vh;
        width: 100%;
        background: linear-gradient($prim-bg, $sec-bg);
        position: fixed;
        top: 0;
        z-index: -100;
    }
</style>