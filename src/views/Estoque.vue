<template>
 
 <!-- <ProdutosComp /> -->
  <v-list lines="two">
      <div class="d-flex justify-space-around align-center flex-column flex-sm-row">
<v-btn
      variant="flat"
      to="/addproduto"
      color="info"
      
    >Adicionar produto 
      
    </v-btn>
    </div>
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



<script>
// import ProdutosComp from '../components/ProdutosComp.vue'
export default {
  data: () => ({
  
    locacoes: [{
      title: '01A001',
      desc: '01A001'
    },
    {
      title: '01A002',
      desc: '01A002'
    }
  ],
  })
}

</script>