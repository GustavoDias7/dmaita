<template>
  <section id="just-talk">
    <div class="container">
      <div class="flex gap-8 h-[768px]">
        <div class="self-end">
          <img class="block max-w-[563px] h-[700px]" src="~assets/img/woman-talking-on-phone.png"
            alt="woman-talking-on-phone">
        </div>
        <div class="pt-[146px]">
          <img class="mb-10" src="~assets/img/just-talk.svg" alt="Just Talk">
          <p class="max-w-[488px] text-[22px] leading-8 mb-10">
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