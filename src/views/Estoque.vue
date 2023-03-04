<template>
  <v-btn class="mx-auto mt-3 ms-3" id="btn" variant="flat" to="/addproduto" color="info">Adicionar produto

  </v-btn>

  <v-container >
    <!-- <v-row> -->
      <v-row v-for="item in items" :key="items" >
        <v-card style='width: 100%;'  class='mx-2 mb-2 mt-2' >


          <v-card-title>{{item.cod}}</v-card-title>
          <v-card-text>{{ item.desc }}</v-card-text>

          <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Estoque
        </th>
        <th class="text-left">
          A comprar
        </th>
        <th class="text-left">
          Vlr. unit.
        </th>
        <th class="text-left">
          Marca
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        
      >
        <td class="font-weight-bold">{{ item.qtde }}</td>
        <td>1</td>
        <td><p  class="font-weight-bold">R${{item.preco}}</p></td>
        <td>{{item.marca}}</td>
      </tr>
    </tbody>
          </v-table>
          <!-- <v-divider></v-divider> -->

          <v-card-actions>
            <v-row justify="space-between" class="text-center">
      <v-col>
        <v-btn
          icon="mdi-pencil"
          color="primary"
        ></v-btn>
      </v-col>

      <v-col>
        <v-btn
          icon="mdi-barcode-scan"
          color="secondary"
        ></v-btn>
      </v-col>

      <v-col>
        <v-btn
          icon="mdi-cached"
          color="info"
        ></v-btn>
      </v-col>

      <v-col>
        <v-btn
          icon="mdi-menu-down-outline"
          color="light"
        ></v-btn>
      </v-col>
    </v-row>
          </v-card-actions>
        </v-card>
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<style scoped>
  #btn{
    width: 200px;
 
    
  }
</style>

<script>
export default {
  data: () => ({
    items: [{
      cod: '336256AM',
      desc: 'fghfgfh',
      preco: '456',
      marca: 'hjk',
      qtde: 23,
      qtde_und: 1,

      
    },]
  })
}
</script>