

<template>
  <div class="bg-image">
  <v-container>
    <v-row>
      <v-col v-for="item in items" :key="items" cols="6">
        <v-card :to="item.link" height="200">
          <v-img
              :src="item.pic"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
            
            <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
            </v-img>
       
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [{
      title: 'Vendas',
      text: 'Realize o efetuamento de suas vendas',
      pic: '../src/assets/shopping-bag.png',
      link: {path: '/vendas'}
    },
    {
      title: 'Estoque',
      text: 'Organize o seu inventário',
      pic: '../src/assets/estoque.png',
      link: {path: '/estoque'}
    },
    {
      title: 'Clientes',
      text: 'Cadastro de clientes',
      pic: '../src/assets/team.png',
      link: {path: '/clientes'}
    },
    {
      title: 'Adicionar Produto',
      text: 'Cadastre produtos',
      pic: '../src/assets/box.png',
      link: {path: '/addproduto'}
    },
    {
      title: 'Configuração',
      text: '',
      pic: '../src/assets/product-management.png',
      link: {path: '/config'}
    }
    ]
  }),
}
</script>

<style>
.bg-image {
  background-image: url('/assets/bg_drawer.jpg');
}

</style>