<template>
  <div class="card lg:card-side bordered">
    <div class="card-body">
      <h2 class="card-title">
        {{ data.name }}
      </h2>
      <p>{{ data.message }}</p>
      <!-- <div class="card-actions">
        <button class="btn btn-primary">
          Get Started
        </button>
        <button class="btn btn-ghost">
          More info
        </button>
      </div> -->
    </div>
  </div>
</template>
Î

<script>
const Message = {
  name: "Message",
  props: {
    data: {
      required: true,
      type: Object,
    },
  },

  /* methods: {
    handleShow() {
      this.show = false;
      if (this.nxtRoute) {
        this.$router.push(`/${this.nxtRoute}`);
      } else {
        window.location.reload();
      }
    },
  }, */
};
export default Message;
</script>
