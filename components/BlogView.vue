<template>
  <div class="blog" id="blog">
    <h2>The Be Sure Blog</h2>
    <div class="blog-flexbox">
      <p>For documenting and gathering useful and efficient solutions to coding problems, the Be Sure Blog was founded in 2023. Its goal is to help somewhat exeperienced developers out with short code snippets that helped fixing bugs or switching from one technology to another. Topics include JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, Nginx, GitHub and many more. How about the four latest posts? Here you go:</p>
    </div>
    <section>
      <div v-for="p in data">
        <a :href="`http://besure.blog/post/${p.postUrl}`">{{ p.postTitle }}</a>
      </div>
    </section>
  </div>

</template>

<script lang="ts" setup>
  const { data } = useFetch(() => "https://www.besure.blog/posts/light");
</script>

