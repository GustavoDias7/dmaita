<template>
  <section
    style="background: linear-gradient(270deg, #661845 0.63%, #752A55 9.18%, #7A315B 17.56%, #7A315B 44.91%, #661845 98.89%);"
    class="text-white overflow-hidden">
    <div class="container max-w-[862px] h-[985px] mx-auto pt-10 pb-20">
      <div class="max-w-[592px] mx-auto text-center">
        <h2 class="text-2xl leading-10 font-bold mb-2">SOLUZIONI</h2>
        <p class="text-base mb-6">
          DMA ha un portafoglio completo di prodotti nelle aree del Servizio e della Sicurezza per migliorare la
          soddisfazione e la protezione dei suoi clienti.
        </p>
      </div>
      <nav>
        <div class="flex justify-center gap-6 border-b mb-6">
          <input class="hidden" type="radio" v-model="solutions" id="solution-1" :value="1"
            @change="() => handleOption(1)">
          <label class="flex items-center h-12 px-6 pb-4" :class="handleSolution(1)" for="solution-1">Assistenza</label>
          <input class="hidden" type="radio" v-model="solutions" id="solution-2" :value="2"
            @change="() => handleOption(6)">
          <label class="flex items-center h-12 px-6 pb-4" :class="handleSolution(2)" for="solution-2">Sicurezza</label>
        </div>

        <p class="text-base mb-6" v-if="solutions === 1">
          La tecnologia DMA offre esperienze diverse per digitalizzare il rapporto con il tuo cliente rendendolo
          più
          semplice, veloce e risolutivo.
        </p>
        <p class="text-base mb-6" v-else-if="solutions === 2">
          La tecnologia DMA offre soluzioni esclusive e brevettate con un focus preventivo ed educativo per
          prevenire l'insorgere di truffe.
        </p>

        <div class="flex gap-8">
          <div class="w-full max-w-[490px]">
            <div v-if="solutions === 1" class="mb-6">
              <div class="max-w-[490px]">
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(1)"
                  @click="() => handleOption(1)">
                  <h3 class="text-left text-xl leading-6 font-bold">Chiamata Digitale</h3>
                  <div class="flex items-center justify-between ">
                    <p class="text-left max-w-[335px]">Digitalizzazione della chiamata vocale indirizzata al call center
                      con
                      presentazione del menu visivo
                      diself-service.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(2)"
                  @click="() => handleOption(2)">
                  <h3 class="text-left text-xl leading-6 font-bold">Chiamata Brandizzata</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-left text-base max-w-[335px]">Chiamata attiva identificata con logo e nome
                      dell'azienda.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(3)"
                  @click="() => handleOption(3)">
                  <h3 class="text-left text-xl leading-6 font-bold">Parla e basta</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-left text-base max-w-[335px]">Menu con interazione vocale tramite Intelligenza
                      Artificiale.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(4)"
                  @click="() => handleOption(4)">
                  <h3 class="text-left text-xl leading-6 font-bold">Collegamento Sociale</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-left text-base max-w-[335px]">Menu visivo che apre un link per l'uso sui social
                      network.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(5)"
                  @click="() => handleOption(5)">
                  <h3 class="text-left text-xl leading-6 font-bold">Menu QR Code</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-left text-base max-w-[335px]">Opzione di canale self-service per negozi fisici.</p>
                    <ArrowRight />
                  </div>
                </button>
                <a href="/"
                  class="flex items-center justify-center w-fit h-12 px-14 mx-auto text-base text-black font-bold bg-lime-500 hover:bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out">
                  Voglio conoscere le soluzioni DMA
                </a>

              </div>
            </div>

            <div v-else-if="solutions === 2" class="mb-6">
              <div class="max-w-[490px]">
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(6)"
                  @click="() => handleOption(6)">
                  <h3 class="text-left text-xl leading-6 font-bold">Chiamata Protetta</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-left text-base max-w-[335px]">Interrompe le chiamate da numeri fraudolenti evitando
                      truffe.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(7)"
                  @click="() => handleOption(7)">
                  <h3 class="text-left text-xl leading-6 font-bold">Avviso Chiamata Protetta</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-left text-base max-w-[335px]">Informa il cliente del rischio e offre l'opzione di
                      rispondere o
                      meno alla
                      chiamata. Si differenzia
                      da Chiamata Protetta perché non interrompe la chiamata.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(8)"
                  @click="() => handleOption(8)">
                  <h3 class="text-left text-xl leading-6 font-bold">Messaggio Chiamata Protetta</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-left text-base max-w-[335px]">Impedisce all'utente di chiamare numeri fraudolenti
                      dopo aver
                      ricevuto un
                      messaggio di testo
                      sospetto.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="w-full mb-6 border-l-2 border-lime-500 pl-4" :class="active(9)"
                  @click="() => handleOption(9)">
                  <h3 class="text-left text-xl leading-6 font-bold">Chiamata Sicura</h3>
                  <div class="flex items-center justify-between">
                    <p class="text-left text-base max-w-[335px]">Invia allo smartphone della persona in chiamata una
                      richiesta, in
                      tempo reale,
                      per confermare
                      l'autenticità di questa comunicazione con test di sicurezza aggiuntivi.</p>
                    <ArrowRight />
                  </div>
                </button>
                <a href="/"
                  class="flex items-center justify-center w-fit h-12 px-14 mx-auto text-base text-black font-bold bg-lime-500 hover:bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out">
                  Voglio conoscere le soluzioni DMA
                </a>
              </div>
            </div>
          </div>

          <div class="relative w-[338px]">
            <img class="block absolute top-0 left-0 max-w-[505px] h-[736px] z-20" src="~assets/img/cell-mask.png"
              alt="" />
            <video autoplay muted loop class="absolute w-[254px] z-10 top-3.5 left-14" ref="videoPlayer">
              <source :src="video" type="video/mp4">
            </video>
          </div>
        </div>

      </nav>
    </div>
  </section>
</template>

<style>
.active-option h3 {
  color: #BCF132;
}

.active-option svg rect {
  stroke: #fff;
  fill: #fff;
}

.active-option svg path {
  fill: #E74A00;
}
</style>

<script>
import video1 from "assets/video/4286357231597991.mp4";

export default {
  data() {
    return {
      solutions: 1,
      option: 1,
      video: video1,
    }
  },
  methods: {
    handleOption(props) {
      this.option = props;
    },
    active(id) {
      return id === this.option ? "active-option" : "";
    },
    handleSolution(id) {
      return this.solutions === id ? "font-bold border-b-4 border-white pb-3" : "";
    },
  },
}
</script>
