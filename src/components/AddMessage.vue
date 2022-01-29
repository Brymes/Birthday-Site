<template>
  <div class="card mt-8 mb-6 w-full p-6">
    <Form
      :validation-schema="yupSchema"
      @submit="submitMessage"
    >
      <div class="">
        <label
          class="
            block
            uppercase
            text-slate
            label-text
            text-black
            font-bold
            py-2
            sm:ml-4
            ml-0
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
            sm:ml-4
            ml-0
          "
          placeholder="John"
        />
        <p>
        <ErrorMessage
          name="name"
          class="error-feedback text-red-600"
        />
      </p>
        
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
            sm:ml-4
            ml-0

          "
        >Enter Message</span>
      </label>
      <Field
        class="textarea sm:ml-3
            ml-0 h-40 w-60 bg-gray-300 w-full"
        type="text"
        placeholder="Enter Your message"
        name="message"
      />
      <p>
        <ErrorMessage
        name="message"
        class="error-feedback text-red-600"
      />
      </p>
      
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
