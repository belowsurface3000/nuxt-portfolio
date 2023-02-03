<template>
    <div class="background-color"></div>
</template>

<style lang="scss">
    @import "../styles/reset.scss";
    @import "../styles/variables.scss";
    @import "../styles/mixins.scss";

    .background-color {
        height: 100vh;
        width: 100%;
        background: linear-gradient($prim-bg, $sec-bg);
        position: fixed;
        top: 0;
        z-index: -100;
    }
</style>