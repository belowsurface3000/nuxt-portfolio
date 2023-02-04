// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {    
        head: {      
            charset: 'utf-8',      
            viewport: 'width=device-width,initial-scale=1.0',      
            title: 'Below Surface Medien',   
            link: [ { rel: 'icon', href: './images/icons/favicon.png' } ],
            meta: [        
                // <meta name="description" content="My amazing site">        
                { name: 'description', content: 'My amazing site.' }      
            ],    
        }  
    },
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
