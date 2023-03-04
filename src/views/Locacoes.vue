<template>
      <v-list lines="two">
    <v-list-subheader inset>Locações</v-list-subheader>

    <v-list-item v-for="loc in locacoes" :key="loc.title" :title="loc.title" :subtitle="loc.desc">
      <template v-slot:prepend>
        <v-avatar color="blue">
          <v-icon color="white">mdi-package</v-icon>
        </v-avatar>
      </template>

      <template v-slot:append>
        <v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
      </template>
    </v-list-item>

    <v-divider inset></v-divider>


  </v-list>
</template>