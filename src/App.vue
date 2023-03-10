<template>
  <v-app theme="dark" id="inspire">
   

      <NavDrawer />

 

    <v-main>
   
      <RouterView />
      
    </v-main>
  </v-app>
</template>

<script>

import NavDrawer from './components/NavDrawer.vue'
import { RouterLink, RouterView } from 'vue-router'
  export default {
    
    components: {
    NavDrawer,
  }
  }
</script>