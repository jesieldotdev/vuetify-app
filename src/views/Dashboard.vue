

<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" :key="items" cols="4">
        <v-card height="200">
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
</template>

<script>
export default {
  data: () => ({
    items: [{
      title: 'Vendas',
      text: 'Realize o efetuamento de suas vendas',
      pic: '../public/venda.jpg'
    },
    {
      title: 'Estoque',
      text: 'Organize o seu inventário',
      pic: '../public/estoque.jpg'
    }
    ]
  }),
}
</script>