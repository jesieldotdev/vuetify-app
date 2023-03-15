<template>
<v-menu>
  <template v-slot:activator="{ props }">
    <v-btn icon="mdi-menu-down-outline" v-bind="props"></v-btn>
  </template>

  <v-list>
    <v-list-item v-for="(item, i) in items" :key="i" >
      <v-list-item-title @click="excluir" >{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Editar', action: 'editar' },
        { title: 'Excluir', action: 'excluir'  }
      ],
    }),
    
    methods: {
        excluir() {
          console.log('Excluir')
        },
        editar() {
          console.log('Editar')
        },
        
  }
  }
</script>