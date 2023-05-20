<script setup lang="ts">
const { data, pending, refresh } = await useFetch("/api/ratelimit", {
  transform: (v) => ({ ...v, reset: new Date(v.reset).toUTCString() }),
});
</script>

<template>
  <UContainer as="main" class="min-h-screen py-6 grid place-items-center gap-5">
    <h1 class="text-4xl lg:text-7xl font-semibold text-center">
      <template v-if="data!.success">
        <p class="text-primary-500">Nuxt</p>
        +
        <p>@upstash/ratelimit</p>
        +
        <p>Vercel KV</p>
      </template>

      <template v-else>
        You have reached the limit,
        <br />
        please come back later
      </template>
    </h1>

    <div>
      <UButton size="lg" :loading="pending" class="transition" @click="refresh()">Refresh</UButton>
    </div>

    <div class="grid lg:grid-cols-4 gap-4">
      <UCard v-for="(value, key) in data" :key="key" class="text-center">
        <template #header>
          <p class="text-xl capitalize">{{ key }}</p>
        </template>
        {{ value }}
      </UCard>
    </div>
  </UContainer>
</template>
