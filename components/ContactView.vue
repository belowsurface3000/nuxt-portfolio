<template>
  <div class="contact" id="contact">
    <h2>Contact 💌</h2>
    <p>It's getting serious! Please use the contact form to get in touch! You can use the contact form for questions, interest in our products or if you want to collaborate. We look forward hearing from you!</p>
    
    <form v-if="unlockField == 'okay'" @submit.prevent="(e) => sendEmail(e)">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" :value="name" placeholder="Please type in your name here" required />

      <label for="email">Your Email:</label>
      <input type="email" id="email" name="email" :value="email" placeholder="Please type in your email here" required />

      <label for="message">Your Message:</label>
      <textarea id="message" name="message" :value="message"></textarea>

      <button type="submit" value="Send" class="submit-button">Send!</button>
    </form> 
  
    <form v-else>
      <p>Please note that spam and advertising are strictly forbidden. Type "okay" to unlock the contact form:</p>
      <label for="riddle"></label>
      <input type="text" id="riddle" name="riddle" placeholder="Just type 'okay' in here" v-model="unlockField" required />
    </form>
  </div>
</template>

<script lang="ts">

  import emailjs from 'emailjs-com';

  const unlockField = "";

  export default {
    data() {
      return {
        unlockField,
        name: "",
        email: "",
        message: ""
      }
    },
    methods: {
      sendEmail(e: HTMLFormElement) {
        try {
          emailjs.sendForm(process.env.VUE_APP_EMAIL_SERVICE, process.env.VUE_APP_EMAIL_TEMPLATE, e.target, process.env.VUE_APP_EMAIL_USER)
        } catch(error) {
          console.log({ error })
        }
      }
    }
  }
</script>

