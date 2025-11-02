<template>
  <section id="just-talk">
    <div class="container">
      <div
        class="flex items-center md:items-start md:justify-center flex-col-reverse md:flex-row gap-8 pt-6 md:pt-0 h-auto md:h-[440px] lg:h-[600px] xl:h-[768px]">
        <div class="self-center md:self-end">
          <img class="mt-[-48px] sm:mt-0 block 
         w-[360px] h-auto 
         md:w-[338px] md:h-[420px] 
         lg:w-[450px] lg:h-[560px] 
         xl:w-[563px] xl:h-[700px]" src="~assets/img/woman-talking-on-phone.png" alt="Woman talking on phone" />
        </div>
        <div class="md:pt-20 lg:pt-28 xl:pt-36">
          <img class="mb-4 lg:mb-10 h-[72px] lg:h-[74px]" src="~assets/img/just-talk.svg" alt="Just Talk">
          <p class="max-w-96 lg:max-w-[488px] text-base lg:text-[22px] leading-8 mb-4 lg:mb-10">
            Una soluzione innovativa che trascende le barriere linguistiche, trasformando ogni interazione in una
            conversazione efficiente, con feedback vocali istantanei e conversione automatica da voce a testo.
          </p>
          <a href="/"
            class="flex items-center justify-center w-fit h-12 px-14 text-base text-white hover:text-black font-bold bg-orange-500 hover:bg-lime-500 rounded-full cursor-pointer transition-all duration-200 ease-in-out">
            Guarda Just Talk in azione
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#just-talk {
  background-image: url("assets/img/bg-desktop-2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 480px) {
  #just-talk {
    background-image: url("assets/img/bg-mobile-2.png");
  }
}
</style>