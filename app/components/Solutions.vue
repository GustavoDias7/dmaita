<template>
  <section
    style="background: linear-gradient(270deg, #661845 0.63%, #752A55 9.18%, #7A315B 17.56%, #7A315B 44.91%, #661845 98.89%);"
    class="text-white overflow-hidden">
    <div class="relative container md:h-[985px] mx-auto pt-10 pb-6 md:pb-20">
      <div class="max-w-[592px] mx-auto text-center">
        <h2 class="text-2xl leading-10 font-bold mb-2">SOLUZIONI</h2>
        <p class="text-base mb-6">
          DMA ha un portafoglio completo di prodotti nelle aree del Servizio e della Sicurezza per migliorare la
          soddisfazione e la protezione dei suoi clienti.
        </p>
      </div>
      <nav class="max-w-[862px] mx-auto">
        <div class="flex justify-center gap-6 border-b mb-6">
          <input class="hidden" type="radio" v-model="solutions" id="solution-1" :value="1"
            @change="() => handleOption(1)">
          <label
            class="flex items-center h-12 px-6 pb-4 cursor-pointer hover:font-bold hover:border-b-4 hover:border-white hover:pb-4 transition-all duration-200 ease-in-out"
            :class="handleSolution(1)" for="solution-1">Assistenza</label>
          <input class="hidden" type="radio" v-model="solutions" id="solution-2" :value="2"
            @change="() => handleOption(6)">
          <label
            class="flex items-center h-12 px-6 pb-4 cursor-pointer hover:font-bold hover:border-b-4 hover:border-white hover:pb-4 transition-all duration-200 ease-in-out"
            :class="handleSolution(2)" for="solution-2">Sicurezza</label>
        </div>

        <p class="text-base mb-6 text-center md:text-left">
          <template v-if="solutions === 1">

            La tecnologia DMA offre esperienze diverse per digitalizzare il rapporto con il tuo cliente rendendolo
            più
            semplice, veloce e risolutivo.
          </template>
          <template v-else-if="solutions === 2">
            La tecnologia DMA offre soluzioni esclusive e brevettate con un focus preventivo ed educativo per
            prevenire l'insorgere di truffe.
          </template>
        </p>

        <div class="flex flex-col-reverse md:flex-row gap-8">
          <div class="w-full max-w-[390px] lg:max-w-[490px] mx-auto md:mx-0 ">
            <div :class="solutions === 1 ? '' : 'md:hidden'" class="md:mb-6">
              <div class="max-w-[490px]">
                <button class="solution-button" :class="active(1)" @click="() => handleOption(1)">
                  <h3 class="solution-button-title">Chiamata Digitale</h3>
                  <div class="solution-button-description">
                    <p class="text-left max-w-[300px] lg:max-w-[335px]">Digitalizzazione della chiamata vocale
                      indirizzata al call center
                      con
                      presentazione del menu visivo
                      diself-service.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="solution-button" :class="active(2)" @click="() => handleOption(2)">
                  <h3 class="solution-button-title">Chiamata Brandizzata</h3>
                  <div class="solution-button-description">
                    <p>Chiamata attiva identificata con logo
                      e nome
                      dell'azienda.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="solution-button" :class="active(3)" @click="() => handleOption(3)">
                  <h3 class="solution-button-title">Parla e basta</h3>
                  <div class="solution-button-description">
                    <p>Menu con interazione vocale tramite
                      Intelligenza
                      Artificiale.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="solution-button" :class="active(4)" @click="() => handleOption(4)">
                  <h3 class="solution-button-title">Collegamento Sociale</h3>
                  <div class="solution-button-description">
                    <p>Menu visivo che apre un link per l'uso
                      sui social
                      network.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="solution-button" :class="active(5)" @click="() => handleOption(5)">
                  <h3 class="solution-button-title">Menu QR Code</h3>
                  <div class="solution-button-description">
                    <p>Opzione di canale self-service per
                      negozi fisici.</p>
                    <ArrowRight />
                  </div>
                </button>
                <a href="/"
                  class="hidden md:flex items-center justify-center w-fit h-12 px-8 md:px-14 mx-auto text-base text-black font-bold bg-lime-500 hover:bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out">
                  Voglio conoscere le soluzioni DMA
                </a>

              </div>
            </div>

            <div :class="solutions === 2 ? '' : 'md:hidden'" class="mb-6">
              <div class="max-w-[490px]">
                <button class="solution-button" :class="active(6)" @click="() => handleOption(6)">
                  <h3 class="solution-button-title">Chiamata Protetta</h3>
                  <div class="solution-button-description">
                    <p>Interrompe le chiamate da numeri
                      fraudolenti evitando
                      truffe.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="solution-button" :class="active(7)" @click="() => handleOption(7)">
                  <h3 class="solution-button-title">Avviso Chiamata Protetta</h3>
                  <div class="solution-button-description">
                    <p>Informa il cliente del rischio e offre
                      l'opzione di
                      rispondere o
                      meno alla
                      chiamata. Si differenzia
                      da Chiamata Protetta perché non interrompe la chiamata.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="solution-button" :class="active(8)" @click="() => handleOption(8)">
                  <h3 class="solution-button-title">Messaggio Chiamata Protetta</h3>
                  <div class="solution-button-description">
                    <p>Impedisce all'utente di chiamare
                      numeri fraudolenti
                      dopo aver
                      ricevuto un
                      messaggio di testo
                      sospetto.</p>
                    <ArrowRight />
                  </div>
                </button>
                <button class="solution-button" :class="active(9)" @click="() => handleOption(9)">
                  <h3 class="solution-button-title">Chiamata Sicura</h3>
                  <div class="solution-button-description">
                    <p>Invia allo smartphone della persona in
                      chiamata una
                      richiesta, in
                      tempo reale,
                      per confermare
                      l'autenticità di questa comunicazione con test di sicurezza aggiuntivi.</p>
                    <ArrowRight />
                  </div>
                </button>
                <a href="/"
                  class="flex items-center justify-center w-fit h-12 px-8 md:px-14 mx-auto text-base text-black font-bold bg-lime-500 hover:bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out">
                  Voglio conoscere le soluzioni DMA
                </a>
              </div>
            </div>
          </div>

          <div class="relative md:w-[338px] mx-auto lg:mx-0">
            <img class="hidden md:block absolute top-0 left-0 max-w-[505px] h-[736px] z-20"
              src="~assets/img/cell-mask.png" alt="cell-mask" />
            <template v-for="(asset, index) in assets">
              <video v-if="asset.type === 'video/mp4'" autoplay muted loop
                class="md:absolute h-[416px] md:h-auto w-[254px] mx-auto lg:mx-0 z-10 top-3.5 left-14"
                :class="activeVideo(index + 1)" :src="asset.src" :type="asset.type">
              </video>
              <img v-else-if="asset.type === 'image'" :src="asset.src" alt=""
                class="md:absolute h-[416px] md:h-auto w-[254px] mx-auto lg:mx-0 z-10 top-3.5 left-14"
                :class="activeVideo(index + 1)">
            </template>
            <div class="hidden md:block absolute w-[254px] h-[550px] bg-black z-0 top-3.5 left-14"></div>
          </div>

          <div class="solutions-mobile-controls">
            <ArrowRight class="arrow-left" @click="prev" />
            <ArrowRight @click="next" />
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<style>
.solution-button,
.solution-button svg {
  display: none;
  cursor: unset;
}

.solution-button.active-option {
  display: block;
}

@media (min-width: 768px) {

  .solution-button,
  .solution-button svg {
    display: block;
    cursor: pointer;
  }
}

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

.solution-button {
  text-align: center;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  text-align: center;
}

@media (min-width: 768px) {
  .solution-button {
    text-align: left;
    width: 100%;
    max-width: unset;
    margin-left: unset;
    margin-right: unset;
    margin-bottom: 24px;
    padding-left: 16px;
    border-left: 2px solid #a2e03e;
  }
}

.solution-button-title {
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}

@media (min-width: 768px) {
  .solution-button-title {
    margin-bottom: 0px;
  }
}

.solution-button-description {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.solution-button-description p {
  max-width: 300px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .solution-button-description p {
    max-width: 320px;
    text-align: left;
    font-size: 16px;
    margin-bottom: 0px;
  }
}

@media (min-width: 982px) {
  .solution-button-description p {
    max-width: 335px;
  }
}

.arrow-left {
  transform: rotate(180deg);
}

.solutions-mobile-controls {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 860px;
  left: 16px;
  right: 16px;
}

.solutions-mobile-controls svg {
  cursor: pointer;
}

.solutions-mobile-controls svg rect {
  stroke: #fff;
  fill: #fff;
}

.solutions-mobile-controls svg path {
  fill: #E74A00;
}

@media (min-width: 768px) {
  .solutions-mobile-controls {
    display: none;
  }
}
</style>

<script>
import video1 from "assets/video/chiamata-digitale.mp4";
import video2 from "assets/video/chiamata-brandizzata.mp4";
import video3 from "assets/video/parla-e-basta.mp4";
import image4 from "assets/img/collegamento-sociale.png";
import video5 from "assets/video/menu-qr-code.mp4";
import video6 from "assets/video/chiamata-protetta.mp4";
import video7 from "assets/video/avviso-chiamata-protetta.mp4";
import video8 from "assets/video/messaggio-chiamata-protetta.mp4";
import image9 from "assets/img/chiamata-sicura.png";

export default {
  data() {
    return {
      solutions: 1,
      option: 1,
      maxOption: 9,
      assets: [
        { src: video1, type: "video/mp4" },
        { src: video2, type: "video/mp4" },
        { src: video3, type: "video/mp4" },
        { src: image4, type: "image" },
        { src: video5, type: "video/mp4" },
        { src: video6, type: "video/mp4" },
        { src: video7, type: "video/mp4" },
        { src: video8, type: "video/mp4" },
        { src: image9, type: "image" },
      ],
    }
  },
  methods: {
    handleOption(id) {
      this.option = id;
    },
    active(id) {
      return id === this.option ? "active-option" : "";
    },
    activeVideo(id) {
      return id === this.option ? 'block' : 'hidden';
    },
    handleSolution(id) {
      return this.solutions === id ? "font-bold border-b-4 border-white pb-3" : "";
    },
    prev() {
      console.log(this.option);

      this.option = this.option === 1 ? this.maxOption : this.option - 1;
    },
    next() {
      console.log(this.option);

      this.option = this.option === this.maxOption ? 1 : this.option + 1;
    }
  },
}
</script>
