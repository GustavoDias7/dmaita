<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <Hero />
    <Topics />
    <Community />
    <CompanyLogos />
    <CTA2 />
    <Solutions :option="option" :handleOption="handleOption" :solutions="solutions" />
    <Companies />
    <JustTalk :handleOption="handleOption" />
    <Award />
    <Map />
    <Privacy />
    <Footer />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import logo from "assets/img/dma-logo.png";

const option = ref(1);
const solutions = ref(1);

function handleOption(option1, solution1 = null) {
  if (solution1 != null)
    solutions.value = solution1;
  option.value = option1;
}

useSeoMeta({
  // 🔹 Basic SEO
  title: 'DMA - Digital Made Accessible',
  description: 'DMA è la trasformazione digitale che accelera le tue prestazioni, aumenta il tuo fatturato e il tuo NPS. E riduce anche i tuoi costi.',
  applicationName: 'DMA - Digital Made Accessible',
  keywords: 'marketing digitale, email marketing, comunicazione aziendale, gestione campagne email, infrastruttura di hosting, sistema di invio email, automazione del marketing, interfaccia utente semplice, sicurezza dei dati, costi ridotti, piattaforma di marketing, assistenza clienti efficace, monitoraggio delle email, report delle prestazioni, soluzione di messaggistica professionale',
  author: 'DMA - Digital Made Accessible',
  robots: 'index, follow',
  canonical: 'https://dmaita.com/',

  // 🔹 Open Graph (Facebook, LinkedIn, etc.)
  ogTitle: 'DMA - Digital Made Accessible',
  ogDescription: 'DMA è la trasformazione digitale che accelera le tue prestazioni, aumenta il tuo fatturato e il tuo NPS. E riduce anche i tuoi costi.',
  ogImage: logo,
  ogType: 'website',
  ogUrl: 'https://dmaita.com/',
  ogSiteName: 'DMA - Digital Made Accessible',
  ogLocale: 'it_IT',

  // 🔹 Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'DMA - Digital Made Accessible',
  twitterDescription: 'DMA è la trasformazione digitale che accelera le tue prestazioni, aumenta il tuo fatturato e il tuo NPS. E riduce anche i tuoi costi.',
  twitterImage: logo,
  // twitterSite: '@your_twitter_handle',
  // twitterCreator: '@your_twitter_handle',

  // 🔹 Additional meta
  themeColor: '#2EA7AF',
  // colorScheme: 'light dark',
  viewport: 'width=device-width, initial-scale=1.0',
})
</script>