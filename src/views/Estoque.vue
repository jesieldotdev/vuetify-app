<template>
  <v-btn class="mx-auto mt-3 ms-3" id="btn" variant="flat" @click='verBanco' color="info">Adicionar produto

  </v-btn>

  <v-container>
    <!-- <v-row> -->
    <v-row v-for="item in prods" :key="prods">
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
              <v-btn icon="mdi-pencil" color="primary"></v-btn>
            </v-col>

            <v-col>
              <v-btn icon="mdi-barcode-scan" color="secondary"></v-btn>
            </v-col>

            <v-col>
              <v-btn icon="mdi-cached" color="info"></v-btn>
            </v-col>

            <v-col>
              <v-btn icon="mdi-menu-down-outline" color="light"></v-btn>
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
import prodColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      prods: [],
      selectedDoc: null,
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
      console.log(prods);
      this.prods = prods;
    },
    async deleteCity(prodId) {
      let prodRef = doc(prodColRef, prodId);
      await deleteDoc(prodRef);
      alert("City deleted successully!");
      this.$router.go();
    },
  },
  created() {
    this.fetchProds();
  },
};
</script>