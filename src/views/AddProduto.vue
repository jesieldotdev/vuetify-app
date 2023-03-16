<template>

  <div class="container">
    <h1>Adicionar Produto</h1>

    <form @submit.prevent="submit">
      <v-text-field v-model="cod.value.value" :counter="8" :error-messages="cod.errorMessage.value"
        label="Código"></v-text-field>

      <v-text-field v-model="desc.value.value" :counter="100" :error-messages="desc.errorMessage.value"
        label="Descrição"></v-text-field>

      <v-text-field v-model="preco.value.value" :error-messages="preco.errorMessage.value" label="Preço da venda"
        prefix="R$" type="number" step=0.01></v-text-field>

      <v-select v-model="marca.value.value" :items="items" :error-messages="marca.errorMessage.value"
        label="Marca"></v-select>

      <v-text-field v-model="qtde.value.value" :error-messages="qtde.errorMessage.value" label="Qtde. estoque"
        type="number"></v-text-field>

      <v-text-field v-model="qtde_und.value.value" :error-messages="qtde_und.errorMessage.value" label="Qtde. por Und."
        type="number"></v-text-field>


      <v-select v-model="ativo.value.value" :items="items_ativo" :error-messages="ativo.errorMessage.value"
        label="Ativo"></v-select>

    
         
    
        <v-btn
        class="me-4" type="submit"
        
        >
          Salvar
        </v-btn>




      <v-btn @click="handleReset">
        Limpar
      </v-btn>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import {
  collection, setDoc, addDoc, onSnapshot,
  deleteDoc, updateDoc, doc,
  query, orderBy, limit
} from "firebase/firestore"
import prodColRef from '../firebase/'
// import prodCod from '../firebase/'
import { FlashMessage } from '@smartweb/vue-flash-message';


export default {



  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        cod(value) {
          if (value?.length <= 8) return true

          return 'O código precisa de no máximo 8 números.'

        },
        desc(value) {
          if (value?.length >= 5) return true

          return 'A descrição precisa ter até 9 digitos'
        },
        preco(value) {
          if (value === true) return true

          return true
        },
        qtde(value) {
          if (value === true) return true

          return true
        },
        qtde_und(value) {
          if (value === true) return true

          return true
        },
        marca(value) {
          if (value) return true

          return 'Selecione uma marca'
        },
        ativo(value) {
          if (value != null) return true

          return 'Escolha um item'
        },
      },
    })
    const cod = useField('cod')
    const desc = useField('desc')
    const preco = useField('preco')
    const qtde = useField('qtde')
    const qtde_und = useField('qtde_und')
    const marca = useField('marca')
    const ativo = useField('ativo')



    const items = ref([
      'VEI',
      'EVOL',
      'RIFEL',
      'TORK',
    ])

    const items_ativo = ref([
      'Sim',
      'Não'
    ])


    const submit = handleSubmit(values => {
      
    addDoc(prodColRef, values);
    alert("Document created successfully!");
    console.log(values);
    router.push({ path: '/' });
    
   
    })

    
    return { cod, desc, preco, qtde, qtde_und, marca, ativo, items_ativo, items, submit, handleReset }
  },



 
// methods: {
//   handleSubmit(values => {
//     async createProd() {
//       console.log("Creating t");
//       const addedDoc = await addDoc(prodColRef, values);
//       alert("Document created successfully!");
//       console.log(addedDoc);
//       this.$router.push("/");
//     },
  
//   }

    data () {
      return {
    dialog: false,
  }
  },

}


</script>

<style scoped>
.container {
  /*display: flex;*/
  margin: 20px;
}
</style>