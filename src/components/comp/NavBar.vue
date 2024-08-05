<template>
    <nav class="navbar relative flex flex-wrap items-center justify-between px-2 py-3 mb-0"
        style="background-color: #171d25;">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="#">
                    Dashboard
                </a>
                <button
                    class="text-white cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button" v-on:click="toggleNavbar()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <li class="nav-item">
                        <router-link to="/realtime"
                            class="px-4 py-2 space-x-2 flex items-center text-sm text-white hover:opacity-75 font-normal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-gray-100">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                            </svg>
                            <span class="text-gray-100">Realtime</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/maps"
                            class="px-4 py-2 space-x-2 flex items-center text-sm text-white hover:opacity-75 font-normal">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-gray-100">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span class="text-gray-100">Maps</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <button @click="openExportModal"
                            class="px-4 py-2 space-x-2 flex items-center text-sm text-white hover:opacity-75 font-normal"
                            href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-gray-100">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            <span class="text-gray-100">Export</span>
                        </button>
                    </li>
                    <li class="nav-item">
                        <router-link to="/logout"
                            class="px-4 py-2 space-x-2 flex items-center text-sm text-white hover:opacity-75 font-normal"
                            href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-gray-100">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            <span class="text-gray-100">Logout</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div v-if="isExportModalOpen"
        class="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none"
        style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="absolute inset-0 flex items-center justify-center">
            <div>
                <ExportComp @close="closeExportModal" />
            </div>
        </div>
    </div>
</template>
  
<script>
import ExportComp from './ExportComp.vue';
export default {
    name: "NavBarComponents",
    components: {
        ExportComp
    },
    data() {
        return {
            isExportModalOpen: false,
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function () {
            this.showMenu = !this.showMenu;
        },
        openExportModal() {
            this.isExportModalOpen = true;
        },
        closeExportModal() {
            this.isExportModalOpen = false;
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 878px) {
    .navbar {
        display: none;
    }
}
</style>