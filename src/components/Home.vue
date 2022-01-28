<template>
  <div class="hero min-h-screen mx-auto bg-purple-300 py-8">
    <div
      class="
        flex-col
        hero-content
        w-4/5
        lg:flex-row-reverse
        bg-white
        shadow-xl
        py-6
      "
    >
      <Carousel />

      <AllMessages :messages="messages" />
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
      loading: true,
      messages: [],
    };
  },
  computed() {
    this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      try {
        await ApiService.fetchWishes().then(function (res) {
          this.messages = res.data;
        });
        window.location.reload();
      } catch (error) {
        console.error(error);
        window.location.reload();
      }
    },
  },
};
</script>
