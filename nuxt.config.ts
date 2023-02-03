// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "~/assets/styles/style.scss",
    ],
    modules: [
        '@pinia/nuxt'
    ],
    runtimeConfig: {
        public: {
            emailService: process.env.EMAIL_SERVICE,
            emailTemplate: process.env.EMAIL_TEMPLATE,
            emailUser: process.env.EMAIL_USER
        }
    }
})
