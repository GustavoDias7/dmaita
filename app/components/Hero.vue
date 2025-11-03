<template>
  <main>
    <div class="container mb-6 md:mb-12 pt-14 sm:pt-8 lg:pt-12">
      <video autoplay muted loop class="mx-auto hidden sm:block sm:h-[185px] md:h-[294px] lg:h-[378px]">
        <source src="~assets/video/main-hero-image-dma.mp4" type="video/mp4">
      </video>
      <div class="banner"></div>
      <div class="flex flex-col md:flex-row max-w-[800px] gap-2 md:gap-8 mx-auto">
        <h1 class="text-xl font-bold md:text-right">
          TRASFORMA L'ESPERIENZA DEL SERVIZIO E LA SICUREZZA DEI <br class="hidden md:block"> TUOI CLIENTI.
        </h1>
        <p class="text-base">
          DMA è la trasformazione digitale che accelera le tue prestazioni, aumenta il tuo fatturato e il tuo <br
            class="hidden md:block"> NPS.
          E riduce anche i tuoi costi.
        </p>
      </div>
    </div>
  </main>
</template>

<style>
.banner {
  display: none;
}

@media (max-width: 480px) {
  .banner {
    display: block;
    height: 168px;
    background-image: url("assets/img/banner-mobile.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>