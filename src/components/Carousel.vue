<template>
  <CCarousel
    class="object-scale-down"
    controls
    dark
    wrap
    pause
    :interval="15000"
    transition="crossfade"
  >
    <CCarouselItem>
      <div>
        <CImage
        
          align="center"
          fluid
          src="pic1.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
        
          align="center"
          fluid
          src="pic12.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic2.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic4.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic5.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic10.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic6.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic7.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic10.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic8.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic12.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic9.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic10.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic11.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic12.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic13.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic14.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic15.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic16.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
    <CCarouselItem>
      <div>
        <CImage
          align="center"
          fluid
          src="pic17.jpeg"
          height="600"
        />
      </div>
    </CCarouselItem>
  </CCarousel>
</template>

<script>
import { CCarousel, CCarouselItem, CImage } from "@coreui/vue";

export default {
  fluidname: "Caorusel",
  components: { CCarousel, CCarouselItem, CImage },
  data() {
    return {
      fluidinterval: 1000,
    };
  },
};
</script>
