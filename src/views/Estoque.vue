<template>
  <div id="bt-top" class="">
  <v-btn
      class=" mt-3 "
      color="blue-grey"
      prepend-icon="mdi-cloud-upload"
      :to="{path: '/addproduto'}" >
   Adicionar produto

  </v-btn>
</div>

<!-- <alertComp /> -->

  <v-container>
    <!-- <v-row> -->
    <v-row v-for="item in prods" >
      <v-card style='width: 100%;' class='mx-2 mb-2 mt-2'>


        <v-card-title>{{ item.cod }}</v-card-title>
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
            <tr>
              <td class="font-weight-bold">{{ item.qtde }}</td>
              <td>1</td>
              <td>
                <p class="font-weight-bold">R${{ item.preco }}</p>
              </td>
              <td>{{ item.marca }}</td>
            </tr>
          </tbody>
        </v-table>
        <!-- <v-divider></v-divider> -->

        <v-card-actions>
          <v-row justify="space-between" class="text-center">
            <v-col>
              
              <Editar :my-prop="item" />
              
            </v-col>


            <v-col>
              <v-btn icon="mdi-barcode-scan" color="secondary"></v-btn>
            </v-col>



            <v-col>
              <v-btn icon="mdi-cached" color="info"></v-btn>
            </v-col>


            <v-col> 
 

   
 
<div class="text-center">

<deleteComp :my-prop="item"></deleteComp>

  </div>

     
              <!--<Menu />-->
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<style scoped>
#btn {
  width: 200px;


}
</style>

<script>
import Menu from '../components/Menu.vue'
import Editar from '../components/Editar.vue'
import deleteComp from '../components/deleteComp.vue'
import alertComp from '../components/alertComp.vue'

import prodColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      prods: [],
      selectedDoc: null,
      dialog: false,
    };
  },
  methods: {
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
    async deleteProd(prod) {
      let prodRef = doc(prodColRef, prod.id);
      alert("Deletando o produto: " + prod.desc)
      await deleteDoc(prodRef);
      alert("Produto excluido com sucesso!");

      
    },
  },

  created() {
    this.fetchProds();
  },
  

  components: {
    Menu,
    Editar,
    deleteComp,
    alertComp
    
  },


};
</script>

<style>
  #bt-top{
    margin: 0 auto;
    width: 250px;
  }
</style>