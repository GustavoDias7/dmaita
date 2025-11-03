<template>
  <ClientOnly>
    <Swiper class="swiper-logos" :modules="modules" :slidesPerView="'auto'" :spaceBetween="0" :speed="50000"
      :loop="true" :freeMode="false" :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }">
      <SwiperSlide>
        <img class="max-w-[3235px] h-60" src="~assets/img/company-logos.webp" alt="Company logos">
      </SwiperSlide>
      <SwiperSlide>
        <img class="max-w-[3235px] h-60" src="~assets/img/company-logos.webp" alt="Company logos">
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<style lang="css">
.swiper-logos {
  pointer-events: none;
}

.swiper-logos .swiper-slide {
  width: 3235px !important;
  height: 240px;
}

.swiper-logos .swiper-wrapper {
  -webkit-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, FreeMode]
    }
  }
};
</script>
