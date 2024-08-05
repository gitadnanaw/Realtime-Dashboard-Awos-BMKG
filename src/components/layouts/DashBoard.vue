<template>
    <NavBarComponents/>
    <div class="app">
      <div class="main flex">
        <SideBarComponents class="SideBar">
        </SideBarComponents>
        <router-view/>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import SideBarComponents from "../comp/SideBar.vue";
  import NavBarComponents from "../comp/NavBar.vue";
  </script>
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  
  #gfg {
    color: black;
  }
  
  .main {
    background-image: linear-gradient(to right, #314f79, #223653);
  }
  .SideBar{
    z-index: 9999;
  }
  </style>
  