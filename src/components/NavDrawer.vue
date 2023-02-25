<template>
    <v-navigation-drawer v-model="drawer"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" :to="{path: '/'}" title="Menu" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" :to="{path: '/sobre'}" title="Sobre" value="supervisors"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Estoque</v-toolbar-title>
      
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
  </script>