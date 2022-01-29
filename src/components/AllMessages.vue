<template>
  <div>
    <div class="flex flex-col justify-center items-start">
       <p class="text-2xl font-bold">
      Birthday Wishes
    </p>

    <div
      @click="addMessage"
    >
      <button class="bg-green-200 h-12 w-48 rounded uppercase">
        {{ buttonText }}
      </button>
    </div>
    </div>
   

    <div>
      <AddMessage v-if="messageInput" />
    </div>
    <div v-if="!messageInput">
      <div
        v-for="data in messages"
        :key="data.id"
        class="card shadow-xl my-8"
      >
        <div class="card-body">
          <p class="text-lg">
            {{ data.message }}
          </p>
          <p class="card-title font-bold text-2xl text-right capitalize">
            {{ data.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddMessage from "./AddMessage.vue";

export default {
  components: { AddMessage },
  props: {
    messages: {
      required: true,
      type: Array,
    },
  },

  data() {
    return {
      messageInput: false,
      buttonText: "Drop a Message",
    };
  },
  methods: {
    addMessage() {
      this.messageInput = this.messageInput ? false : true;
      this.buttonText = this.messageInput
        ? "See all Messages"
        : "Drop a Message";
    },
  },
};
</script>
