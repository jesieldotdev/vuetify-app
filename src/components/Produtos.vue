<template>
  <v-card class="mx-auto" max-width="">
    <v-toolbar color="dark" height="88" flat>
      <!-- <template v-slot:prepend>
        <v-btn icon="mdi-arrow-left">
        </v-btn>
      </template> -->

      <v-text-field class="ms-4" v-model="search" clearable hide-details label="Pesquisar Produto"
        prepend-inner-icon="mdi-magnify" single-line></v-text-field>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-toolbar>

    <div v-if="keywords.length > 0" class="py-3 px-4">
      <v-chip v-for="(keyword, i) in keywords" :key="i" class="me-2">
        {{ keyword }}
      </v-chip>

    </div>

    <v-divider></v-divider>

    <v-list lines="three">
      <v-list-item v-for="(item, i) in prods" :key="i"  link @click="addItem(item)">
        <template v-slot:prepend>
          <!-- <v-avatar
            class="me-4 mt-2"
            rounded="0"
          >
            <v-img :src="item.image" cover></v-img>
          </v-avatar> -->
        </template>

        <v-divider></v-divider>


        <v-list-item-title class="text-uppercase font-weight-regular text-caption" v-text="`cod: ${item.cod}`"
        ></v-list-item-title>

        <div v-text="`desc: ${item.desc}`"></div>
      </v-list-item>
    </v-list>
  </v-card>

  <!-- <v-card color="" title="Carrinho"  class="mt-5"> -->
    <v-divider></v-divider>

    <v-row color="secondary" class="mt-5" v-for="item in cart" :key="items" >
        <v-card  style='width: 100%;'  class='mx-2 mb-2 mt-2' >


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
  <!-- </v-card> -->
</template>

<script>


export default {
  data: () => ({
    cart: []
 ,
    
    
    items: prods
,
    search: '',
    
    
   


  })
  ,

  computed: {
    keywords() {
      if (!this.search) return []

      const keywords = []

      

      for (const search of this.searching) {
        keywords.push(search.desc)
      }

      return keywords
    },
    searching() {
      if (!this.search) return this.items

      const search = this.search.toLowerCase()

      return this.items.filter(item => {
        const text = item.desc.toLowerCase()

        return text.indexOf(search) > -1
      })
    },
  } ,
  methods: {
    
    addItem(item) {
      
      
      alert(item.cod)
      this.cart.push(item)
   
      if (item) {
        alert(this.cart)
      }
      
    },
    async fetchProds() {

      let prodsSnapShot = await getDocs(prodColRef);

      let prods = [];
      prodsSnapShot.forEach((prod) => {
        let prodData = prod.data();
        prodData.id = prod.id;
        prods.push(prodData);
      });
      // console.log(prods);
      this.prods = prods;
    },
    
  }
}
</script>