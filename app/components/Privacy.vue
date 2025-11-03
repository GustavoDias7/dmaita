<template>
  <section class="py-16">
    <div class="container text-center">
      <h2 class="text-3xl font-bold leading-10 text-neutral-500 mb-12">PRIVACY E PROTEZIONE DEI DATI</h2>

      <ClientOnly>
        <Swiper class="swiper-privacy max-w-[481px]" :modules="modules" :navigation="true" :breakpoints="breakpoints"
          :spaceBetween="20" :lazy="true">
          <SwiperSlide>
            <a
              href="https://www.dialmyapp.com.br/app/privacidade-e-protecao-de-dados/acesso-a-informacao-titular-de-dados/">
              <img class="rounded-lg" src="~assets/img/Acesso-à-Informação_-Titular-de-Dados-thumbnail.jpg"
                alt="Accesso alle informazioni - Interessato" loading="lazy">
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.dialmyapp.com.br/app/privacidade-e-protecao-de-dados/politica-de-privacidade-de-dados/">
              <img class="rounded-lg" src="~assets/img/Política-de-Privacidade-de-Dados-thumbnail.jpg"
                alt="Informativa sulla privacy dei dati" loading="lazy">
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.dialmyapp.com.br/app/privacidade-e-protecao-de-dados/comunicacao-de-incidente-de-seguranca-com-dados-pessoais/">
              <img class="rounded-lg"
                src="~assets/img/Comunicação-de-Incidente-de-Segurança-com-Dados-Pessoais-thumbnail.jpg"
                alt="Segnalazione di incidenti di sicurezza che coinvolgono dati personali" loading="lazy">
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
}

.swiper-privacy .swiper-slide {
  width: 100% !important;
  max-width: 147px !important;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
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
          slidesPerView: 3,
          navigation: true,
        },
      }
    }
  }
};
</script>
