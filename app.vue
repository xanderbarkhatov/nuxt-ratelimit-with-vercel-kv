<script setup lang="ts">
const { data } = await useFetch("/api/ratelimit");
</script>

<template>
  <div>{{ data }}</div>
</template>
