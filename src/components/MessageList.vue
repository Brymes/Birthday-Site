<template>
  <div
    v-for="mess in allMessages"
    :key="mess.name"
  >
    <div class="card shadow-lg">
      <div class="card-body">
        <h2 class="card-title">
          {{ mess.name }}
        </h2>
        <p>{{ mess.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Fetch all messages
};
</script>

<style></style>
