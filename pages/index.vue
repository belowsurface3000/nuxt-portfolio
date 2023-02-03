<template>
    <main>
        <HeaderView />
        <AboutView />
        <ServicesView />
        <SkillsView />
        <ReferencesView />
        <ContactView />
        <FooterView />
    </main>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import HeaderView from "../components/HeaderView.vue";
    import AboutView from "../components/AboutView.vue";
    import ServicesView from"../components/ServicesView.vue";
    import SkillsView from "../components/SkillsView.vue";
    import ReferencesView from "../components/ReferencesView.vue";
    import ContactView from "../components/ContactView.vue";
    import FooterView from "../components/FooterView.vue";

    export default defineComponent({
    components: {
        HeaderView,
        AboutView,
        ServicesView,
        SkillsView,
        ReferencesView,
        ContactView,
        FooterView
    },
  });
</script>