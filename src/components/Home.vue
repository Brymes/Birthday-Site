<template>
  <div class="hero min-h-screen">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <Carousel />
      <div>
        <h1 class="mb-4 text-3xl font-bold">
          Drop A Message
        </h1>

        <textarea
          class="mb-5 textarea h-20 w-max text-white"
          placeholder="Bio"
        />

        <button class="btn btn-primary">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
export default { name: "Home", components: { Carousel } };
</script>
