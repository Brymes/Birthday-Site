<template>
  <div class="hero min-h-screen w-4/5 mx-auto py-8">
    <div class="flex-col hero-content lg:flex-row-reverse bg-white shadow-2xl py-12">
      <Carousel />
      <AllMessages />
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import AllMessages from "./AllMessages.vue";
import ApiService from "../services/api.service";
export default {
  name: "Home",
  components: { Carousel, AllMessages },
  data() {
      return {
          viewAll: true,
      }
  },
  methods: {
    submitMessage(payload) {
      try {
        ApiService.addWish(payload);
      } catch (error) {
        window.location.reload();
      }
    },
  },
};
</script>
