<template>
  <NuxtLayout name="default">
    <div class="text-center mx-auto">
      <p><a href="mailto:feedback@pushtomac.com">feedback@pushtomac.com</a></p>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Push To Mac",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  htmlAttrs: {
    class: "h-full bg-purple-50 dark:bg-purple-900",
  },
});

definePageMeta({
  layout: false,
});
</script>
