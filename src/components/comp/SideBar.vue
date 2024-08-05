<template>
  <!-- Sidebar content -->
  <div class="sidebar flex flex-col h-screen p-3 duration-300 shadow" style="background-color: #171d25;">
    <!-- Sidebar header and menu items -->
    <div class="space-y-3">
      <div class="relative">
        <div div class="w-full px-0 py-2 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">
            <marquee width="100%" id="gfg">
              BMKG Juanda I
            </marquee>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-white">Dashboard</h2>
      </div>
      <div class="flex-1">
        <ul class="pt-2 pb-4 space-y-1 text-sm">
          <li class="rounded-sm">
            <router-link to="/realtime" class="flex items-center p-2 space-x-3 rounded-md hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-gray-100">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
              <span class="text-gray-100">Realtime</span>
            </router-link>
          </li>
          <li class="rounded-sm">
            <router-link to="/maps" class="flex items-center p-2 space-x-3 rounded-md hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-gray-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span class="text-gray-100">Maps</span>
            </router-link>
          </li>
          <li class="rounded-sm">
            <button @click="openExportModal" class="flex items-center p-2 space-x-3 rounded-md hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-gray-100">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span class="text-gray-100">Export</span>
            </button>
          </li>
          <li class="rounded-sm">
            <router-link to="/logout" class="flex items-center p-2 space-x-3 rounded-md hover:opacity-75">
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
    <div v-if="isExportModalOpen"
      class="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none"
      style="background-color: rgba(0, 0, 0, 0.7);">
      <div>
        <ExportComp @close="closeExportModal" />
      </div>
    </div>
  </div>
</template>

<script>
import ExportComp from './ExportComp.vue';
export default {
  name: 'SideBarComponents',
  components: {
    ExportComp
  },
  data() {
    return {
      isExportModalOpen: false,
    }
  },
  methods: {
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
@media only screen and (max-width: 878px) {
  .sidebar {
    display: none;
  }
}
</style>
