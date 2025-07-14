<script setup lang="ts">
import { ref } from "vue";

const apiBase = import.meta.env.VITE_API_URL;
console.log(apiBase);

const response = ref("");
fetch(`${apiBase}/api`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Data from backend:", data);
    response.value = JSON.stringify(data, null, 2);
  })
  .catch((error) => {
    console.error("Error fetching data from backend:", error);
  });
</script>

<template>
  <pre v-if="response">{{ response }}</pre>
  <span v-else>Loading...</span>
</template>
