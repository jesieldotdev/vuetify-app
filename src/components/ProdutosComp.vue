<template>
     <v-list lines="two">
    <v-list-subheader inset>Consulta de produtos</v-list-subheader>

    <v-list-item v-for="produto in produtos" :key="produtos.title" :title="produto.title" :subtitle="produto.preco">
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

<script>
export default {
    data: () => ({
      produtos: [{
        title: 'Rolamento 6202 - Evol',
        qt: 23,
        preco: '17,50'
      },
      {
        title: 'Cilindro Mestre',
        qt: 5,
        preco: '68,90'
      }
      ],
    })
}
      
      </script>