<template>
    <div id="mapContainer">
      <l-map ref="map" v-model:zoom="zoom" :center="[-7.3998791,112.6844688]">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base" name="OpenStreetMap">
        </l-tile-layer>
        <l-marker :lat-lng="[-5.7237193,112.6774171]"></l-marker>
        <l-marker :lat-lng="[-7.0242357,113.8877015]"></l-marker>
        <l-marker :lat-lng="[-8.2415534,113.6912688]"></l-marker>
      </l-map>
    </div>
  </template>
  <script>
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    data() {
      return {
        zoom: 7,
      };
    },
  };
  </script>
  
  <style scoped>
  #mapContainer {
    height: 100vh;
    width: 100vw;
    z-index: 0;
  }
  </style>
  