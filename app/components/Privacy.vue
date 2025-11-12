<template>
  <section class="py-16">
    <div class="container text-center">
      <h2 class="text-3xl font-bold leading-10 text-neutral-500 mb-12">PRIVACY E PROTEZIONE DEI DATI</h2>

      <ClientOnly>
        <Swiper class="swiper-privacy max-w-[648px]" :modules="modules" :breakpoints="breakpoints" :lazy="true"
          :pagination="{ clickable: true }" :centeredSlides="false">
          <SwiperSlide>
            <a href="/pdf/codice-etico.pdf" target="_blank">
              <img class="rounded-lg" src="~assets/img/codigo-de-conduta-etica.webp" alt="Codice Etico" loading="lazy">
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/pdf/politica-sulla-privacy.pdf" target="_blank">
              <img class="rounded-lg" src="~assets/img/politica-de-privacidade-de-dados.webp"
                alt="politica sulla privacy" loading="lazy">
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/pdf/politica-di-risposta-agli-incidenti.pdf" target="_blank">
              <img class="rounded-lg" src="~assets/img/comunicacao-de-incidente-de-seguranca-com-dados-pessoais.webp"
                alt="politica di risposta agli incidenti" loading="lazy">
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/pdf/politica-di-responsabilita-sociale.pdf" target="_blank">
              <img class="rounded-lg" src="~assets/img/politica-de-responsabilidade-social-ambiental-e-climatica.webp"
                alt="politica di responsabilita sociale" loading="lazy">
            </a>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<style>
.swiper-privacy {
  margin: 0px auto;
  padding-bottom: 32px;
}

.swiper-privacy .swiper-pagination {
  top: 210px;
}

.swiper-privacy .swiper-pagination-bullet-active {
  background-color: #2EA7AF;
}

.swiper-privacy .swiper-slide {
  width: 100% !important;
  max-width: 147px !important;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
      breakpoints: {
        '1': {
          slidesPerView: 'auto',
          spaceBetween: 20,
          navigation: true,
        },
        '480': {
          slidesPerView: 3,
          spaceBetween: 20,
          navigation: true,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 20,
          navigation: true,
        },
        // '982': {
        //   slidesPerView: 6,
        //   spaceBetween: 20,
        //   navigation: true,
        // },
      }
    }
  }
};
</script>
