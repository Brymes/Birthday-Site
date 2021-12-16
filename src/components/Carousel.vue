<template>
  <div
    v-for="pic in picsList"
    :key="pic.id"
    class="w-full carousel"
  >
    <div
      v-if="pic.id == btnCount"
      :id="`slide${pic.id}`"
      class="relative w-full carousel-item"
    >
      <img
        :src="pic.pic"
        class="w-full"
      >
      <div
        class="
          absolute
          flex
          justify-between
          transform
          -translate-y-1/2
          left-5
          right-5
          top-1/2
        "
      >
        <a
          v-if="pic.id > 0"
          :href="`#slide${pic.id - 1}`"
          class="btn btn-lg btn-circle"
          @click="btnCount -= 1"
        >❮</a>
        <a
          v-if="pic.id < picsList.length"
          :href="`#slide${pic.id + 1}`"
          class="btn btn-lg btn-circle"
          @click="btnCount += 1"
        >❯</a>
      </div>
    </div>
    <!-- <div
      id="slide2"
      class="relative w-full pt-20 carousel-item"
    >
      <img
        src="https://picsum.photos/id/501/800/300"
        class="w-full"
      >
      <div
        class="
          absolute
          flex
          justify-between
          transform
          -translate-y-1/2
          left-5
          right-5
          top-1/2
        "
      >
        <a
          href="/components/carousel#slide1"
          class="btn btn-circle"
        >❮</a>
        <a
          href="/components/carousel#slide3"
          class="btn btn-circle"
        >❯</a>
      </div>
    </div>
    <div
      id="slide3"
      class="relative w-full pt-20 carousel-item"
    >
      <img
        src="https://picsum.photos/id/502/800/300"
        class="w-full"
      >
      <div
        class="
          absolute
          flex
          justify-between
          transform
          -translate-y-1/2
          left-5
          right-5
          top-1/2
        "
      >
        <a
          href="/components/carousel#slide2"
          class="btn btn-circle"
        >❮</a>
        <a
          href="/components/carousel#slide4"
          class="btn btn-circle"
        >❯</a>
      </div>
    </div>
    <div
      id="slide4"
      class="relative w-full pt-20 carousel-item"
    >
      <img
        src="https://picsum.photos/id/503/800/300"
        class="w-full"
      >
      <div
        class="
          absolute
          flex
          justify-between
          transform
          -translate-y-1/2
          left-5
          right-5
          top-1/2
        "
      >
        <a
          href="/components/carousel#slide3"
          class="btn btn-circle"
        >❮</a>
        <a
          href="/components/carousebl#slide1"
          class="btn btn-circle"
        >❯</a>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Caorusel",
  data() {
    let picsList = ["pic.jpg"];
    picsList.push({ id: 0, pic: "src/assets/pic.jpg" });
    return {
      picsList,
      btnCount: 0,
    };
  },
  beforeMount() {
    for (let i = 1; i < 10; i++) {
      this.picsList.push({ id: i, pic: `src/assets/pic${i}.jpg` });
    }
  },
};
</script>

<style></style>
