<template>
  <aside
    class="menu flex pt-16 pb-2 px-4 fixed md:top-[-100vh] left-0 right-0 h-screen z-30 bg-white transition-[top] duration-300 ease-in-out"
    :class="menu ? 'top-0' : 'top-[-100vh]'">
    <ul class="overflow-y-auto w-full">
      <li><a href="#community" class="menu-link" @click="closeMenu">Comunità</a></li>
      <li><a href="#solutions" class="menu-link" @click="closeMenu">Soluzioni</a></li>
      <li><a href="#clients" class="menu-link" @click="closeMenu">Clienti</a></li>
      <li><a href="#media" class="menu-link" @click="closeMenu">Media</a></li>
      <li><a href="#award" class="menu-link" @click="closeMenu">Premi</a></li>
      <li><a href="#map" class="menu-link" @click="closeMenu">DMA nel Mondo</a></li>
      <li><a href="mailto:contato@dma4all.com" class="menu-link" @click="closeMenu">Contattaci</a></li>
      <li><a href="https://www.linkedin.com/company/dma4all/about/" class="menu-link" @click="closeMenu">Chi Siamo</a>
      </li>
    </ul>
  </aside>
</template>

<style>
.menu-link {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #000000;
  transition: all 0.2s ease-in-out;
  border-bottom-width: 1px;
  border-color: #06b6d4;
}

.menu ul li:first-of-type .menu-link {
  border-top-width: 1px;
}

.menu-link:hover,
.menu-link:focus {
  font-weight: bold;
  border-bottom-width: 4px;
  border-color: #06b6d4;
  color: #06b6d4;
  padding-top: 0.25rem;
}
</style>

<script>
export default {
  props: ['menu', 'closeMenu'],
}
</script>