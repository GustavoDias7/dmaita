<template>
    <header class="bg-white border-b border-cyan-500 fixed top-0 left-0 right-0 z-40 shadow-lg">
        <div class="px-4 md:px-0 h-14 md:h-16 flex items-center justify-between md:justify-center gap-4 lg:gap-16
        transition-[height] duration-500 ease-in-out" :class="!isScroll() ? 'lg:h-18' : 'lg:h-24'">
            <a href="/" class="text-[0px]  md:block" :class="!isScroll() ? 'md:hidden' : 'md:block'">
                <img class="header-logo w-28 lg:w-40 xl:w-[200px]" src="~/assets/img/dma-logo.svg" alt="DMA logo">
            </a>
            <nav class="self-end hidden md:block">
                <ul class="flex items-center h-16">
                    <li><a href="#community" class="header-link">Comunità</a></li>
                    <li><a href="#solutions" class="header-link">Soluzioni</a></li>
                    <li><a href="#clients" class="header-link">Clienti</a></li>
                    <li><a href="#media" class="header-link">Media</a></li>
                    <li><a href="#award" class="header-link">Premi</a></li>
                    <li><a href="#map" class="header-link">DMA nel Mondo</a></li>
                    <li><a href="mailto:contato@dma4all.com" class="header-link">Contattaci</a></li>
                    <li><a href="#" class="header-link">Chi Siamo</a></li>
                </ul>
            </nav>
            <button class="menu-button" :class="menu ? 'open' : 'close'" @click="toggleMenu">Menu button</button>
        </div>
    </header>
    <Menu :menu="menu" :closeMenu="closeMenu" />
</template>
<style>
.header-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    color: #000000;
    transition: all 0.2s ease-in-out;
}

.header-link:hover,
.header-link:focus {
    font-weight: bold;
    border-bottom-width: 0.25rem;
    border-color: #06b6d4;
    color: #06b6d4;
    padding-top: 0.25rem;
}

.menu-button {
    display: none;
    font-size: 0px;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.menu-button.open {
    background-image: url("assets/img/close.svg");
}

.menu-button.close {
    background-image: url("assets/img/burguer.svg");
}

@media (max-width: 1360px) {
    .header-link {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

@media (max-width: 982px) {
    .header-link {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        font-size: 0.75rem;
    }
}

@media (max-width: 767px) {

    .menu-button {
        display: block;
    }
}
</style>
<script>
export default {
    data() {
        return {
            scrollPosition: 0,
            menu: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            this.scrollPosition = window.scrollY;
        },
        isScroll() {
            return this.scrollPosition >= 96;
        },
        toggleMenu() {
            this.menu = !this.menu;
        },
        closeMenu() {
            this.menu = false;
        }
    },
}
</script>