<template>
  <section id="companies" class="h-[856px]">
    <div class="bg-blue-800/[0.90]">
      <div class="container py-6">
        <h2 class="text-base sm:text-2xl text-white font-bold text-center">DMA è un nuovo modo di relazionarsi con le
          aziende!</h2>
      </div>
    </div>
  </section>
</template>

<style>
#companies {
  background-image: url("assets/img/bg-desktop.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 480px) {
  #companies {
    background-image: url("assets/img/bg-mobile.png");
  }
}
</style>