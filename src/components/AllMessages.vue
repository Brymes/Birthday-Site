<template>
  <div class="w-full mx-4">
    <p class="text-2xl font-bold uppercase">
      Birthday Wishes
    </p>

    <span
      class="bg-green-400 py-2"
      @click="addMessage"
    >
      <button class="btn btn-xs md:btn-sm lg:btn-md xl:btn-lg">
        {{ buttonText }}
      </button>
    </span>
    <div>
      <AddMessage v-if="messageInput" />
    </div>
    <div v-if="!messageInput">
      <div class="card shadow-sm bg-yellow-400 text-red-900 my-8Î">
        <div class="card-body">
          <p class="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            fugiat repellat eos mollitia quibusdam, sequi quaerat vel qui rem et
            provident voluptas quisquam odit obcaecati assumenda repellendus
            neque possimus soluta a, corporis harum quas amet sit.
            Necessitatibus incidunt laboriosam voluptatibus?
          </p>
          <p class="card-title font-bold text-2xl text-right capitalize">
            oladunni odetunde
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
