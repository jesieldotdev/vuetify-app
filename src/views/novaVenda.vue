<template>
  
   <div class="container">
       <h1 class=text-center>Nova venda</h1>
       
       
  <form @submit.prevent="submit">

  <v-card class="">
    <v-tabs
      v-model="tab"
      bg-color="dark"
    >
      <v-tab value="one">Geral</v-tab>
      <v-tab value="two">Items</v-tab>
      <v-tab value="three">Obs.</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
         

<v-select
v-model="cliente.value.value"
      :items="clientes"
      label="Cliente"
      density="compact"
      :error-messages="cliente.errorMessage.value"
    ></v-select>
    
   
      <v-text-field :counter="11" v-model="numero.value.value" :error-messages="numero.errorMessage.value"
        label="Contato" type="phone"></v-text-field>
        
        <v-text-field 
        v-model="calendar.value.value" 
        type='date'
        :error-messages="calendar.errorMessage.value"
        label="Data"
></v-text-field>

<v-select
v-model="formaCob.value.value"
      :items="forma_de_pagamento"
      label="Forma de cobrança"
      density="compact"
      :error-messages="formaCob.errorMessage.value"
    ></v-select>
  
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  
        
    <v-btn class="me-4 mt-4" type="submit">
        Salvar
      </v-btn>

      <v-btn class="mt-4" @click="handleReset">
        Limpar
      </v-btn>
      </form>
      
  </div>
</template>


<script>
import Calendar from '../components/Calendar.vue'
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        numero(value) {
          if (value?.length != null) return true

          return 'Digite um número de telefone'

        },
        cliente(value) {
          if (value?.length != null) return true

          return 'Selecione o cliente'

        },
        calendar(value) {
          if (value?.length != null) return true

          return 'Selecione uma data'

        },
        formaCob(value) {
          if (value?.length != null) return true

          return 'Selecione uma forma'

        }
        }
        })
        const cliente = useField('cliente')
        const numero = useField('numero')
        const calendar = useField('calendar')
        const formaCob = useField('formaCob')
        
        const clientes = ref([
      'Joãozinho',
      'Stefanny'
    ])
    

    const forma_de_pagamento = ref([
      'Dinheiro',
      'Débito',
      'Cartão',
      'Cheque',
      'Pix',
      'Boleto'
    ])
 const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })
    
    return {numero, cliente, clientes, calendar, forma_de_pagamento, formaCob, submit, handleReset}
        },
          components: {
    Calendar,
  },
  data: () => ({
      tab: null,
    }),
  
        }
        
  </script>
  
  <style scoped>
.container {
  /*display: flex;*/
  margin: 20px;
}
</style>