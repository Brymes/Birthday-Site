<template>
  <Splide :options="{ rewind: true }">
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic1.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic2.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic3.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic4.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic5.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic6.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic7.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic8.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic9.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic10.jpeg">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="mx-auto">
        <img src="../assets/pic11.jpeg">
      </div>
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  name: "Caorusel",
  components: { Splide, SplideSlide },
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
