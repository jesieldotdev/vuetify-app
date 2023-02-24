<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
  export default {
    data: () => ({ drawer: null }),
  }
</script>