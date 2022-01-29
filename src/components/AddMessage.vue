<template>
  <div class="card mt-8 mb-6">
    <Form
      :validation-schema="yupSchema"
      @submit="submitMessage"
    >
      <div>
        <label
          class="
            block
            uppercase
            text-slate
            label-text
            text-black
            font-bold
            py-2
            ml-4
          "
        >
          Full Name
        </label>
        <Field
          name="name"
          type="text"
          class="
            px-3
            py-3
            placeholder-slate
            text-slate
            bg-gray-300
            text-sm
            w-60
            ml-4
          "
          placeholder="John"
        />
        <ErrorMessage
          name="name"
          class="error-feedback text-red-600"
        />
      </div>
      <label class="label">
        <span
          class="
            block
            uppercase
            text-slate
            label-text
            text-black
            font-bold
            mb-2
            ml-4
          "
        >Enter Message</span>
      </label>
      <Field
        class="textarea ml-3 h-40 w-60 bg-gray-300"
        type="text"
        placeholder="Enter Your message"
        name="message"
      />
      <ErrorMessage
        name="message"
        class="error-feedback text-red-600"
      />
      <button class="mt-4 max-w-60 btn btn-secondary btn-block">
        Submit
      </button>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { messageSchema } from "./formValidators.js";

import ApiService from "../services/api.service";

export default {
  components: { Form, Field, ErrorMessage },
  data() {
    return {
      yupSchema: messageSchema,
    };
  },

  methods: {
    async submitMessage(payload) {
      console.error(payload);
      try {
        await ApiService.addWish(payload);
        window.location.reload();
      } catch (error) {
        window.location.reload();
      }
    },
  },
};
</script>
