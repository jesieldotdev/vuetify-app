<template>
  <form @submit.prevent="submit">
<v-select
v-model="cliente.value.value"
      :items="items"
      label="Compact"
      density="compact"
      :error-messages="cliente.errorMessage.value"
    ></v-select>
      <v-text-field :counter="11" v-model="numero.value.value" :error-messages="numero.errorMessage.value"
        label="Contato" type="phone"></v-text-field>
         <v-btn class="me-4" type="submit">
        Salvar
      </v-btn>

      <v-btn @click="handleReset">
        Limpar
      </v-btn>
      </form>
</template>

<script>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        numero(value) {
          if (value?.length <= 3) return true

          return 'O código precisa de no máximo 8 números.'

        },
        cliente(value) {
          if (value?.length <= 3) return true

          return 'O código precisa de no máximo 8 números.'

        },
        }
        })
        const cliente = useField('cliente')
        const numero = useField('numero')
        const items = ref([
      'Sim',
      'Não'
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
    
    return {numero, cliente, items, submit, handleReset}
        }
        }
        
  </script>