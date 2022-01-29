<template>
  <div v-if="loading">
    <CSpinner />
  </div>
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
      <div v-if="messages">
        <AllMessages :messages="messages" />
      </div>
    </div>
  </div>
</template>

<script>
import { CSpinner } from "@coreui/vue";

import Carousel from "./Carousel.vue";
import AllMessages from "./AllMessages.vue";
import ApiService from "../services/api.service";
export default {
  name: "Home",
  components: { Carousel, CSpinner, AllMessages },
  data() {
    return {
      loading: true,
      messages: false,
    };
  },
  created() {
    this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      this.loading = true;
      console.error(this.messages);
      try {
        await ApiService.fetchWishes().then((res) => {
          console.error(res.data.reverse());
          this.messages = res.data.reverse();
          this.loading = false;
        });
      } catch (error) {
        console.error(error);
        // window.location.reload();
      }
    },
  },
};
</script>
