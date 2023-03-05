<template>
  <div class="container">
    <h1>Adicionar cliente</h1>

    <!-- <v-img class="mx-auto" height="300"
      lazy-src="https://www.shutterstock.com/image-vector/picture-icon-260nw-323592404.jpg"
      src="https://images.unsplash.com/photo-1677629322846-606e5b24d718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80 "
      max-width="500">
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img> -->

    <form @submit.prevent="submit">
      <v-text-field v-model="cod.value.value" :counter="8" :error-messages="cod.errorMessage.value"
        label="Código"></v-text-field>

      <v-text-field v-model="nome.value.value" :counter="100" :error-messages="nome.errorMessage.value"
        label="Nome"></v-text-field>

      <v-text-field v-model="fantasia.value.value" :counter="100" :error-messages="fantasia.errorMessage.value"
        label="Nome fantasia"></v-text-field>

      <v-text-field type="email" v-model="email.value.value" :counter="100" :error-messages="email.errorMessage.value"
        label="Email"></v-text-field>

      <v-text-field :counter="11" v-model="numero.value.value" :error-messages="numero.errorMessage.value"
        label="Número de telefone" type="phone"></v-text-field>

      <v-select v-model="tipoDoc.value.value" :items="tipos" :error-messages="tipoDoc.errorMessage.value"
        label="Tipo doc."></v-select>

      <v-text-field :counter="20" v-model="doc.value.value" :error-messages="doc.errorMessage.value"
        label="Número do documento" type="text"></v-text-field>


      <v-text-field v-model="credito.value.value" :error-messages="credito.errorMessage.value" label="Limite de crédito"
        prefix="R$" type="number"></v-text-field>

      <v-select v-model="formaPag.value.value" :items="forma_de_pagamento" :error-messages="formaPag.errorMessage.value"
        label="Forma de pagamento padrão"></v-select>

      <v-select v-model="ativo.value.value" :items="items" :error-messages="ativo.errorMessage.value"
        label="Ativo"></v-select>

      <v-divider class="mx-3"></v-divider>

      <h3>Endereço</h3>
      <v-btn class="me-4" type="submit">
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

export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        cod(value) {
          if (value?.length <= 3) return true

          return 'O código precisa de no máximo 8 números.'

        },
        nome(value) {
          if (value?.length != null) return true

          return 'O nome não pode estar vazio!'
        },

        fantasia(value) {
          if (value?.length != null) return true

          return 'O nome fantasia não pode estar vazio!'
        },
        email(value) {
          if (value?.length != null) return true

          return 'O email não pode estar vazio!'
        },
        numero(value) {
          if (value?.length <= 11) return true

          return "O número de telefone não pode exceder 11 digitos!"
        },
        tipoDoc(value) {
          if (value?.length <= 11) return true

          return "Escolha um tipo de documento"
        },
        doc(value) {
          if (value?.length != 0) return true

          return "Número inválido!"
        },
        credito(value) {
          if (value === true) return true

          return true
        },
        formaPag(value) {
          if (value === true) return true

          return true
        },
        ativo(value) {
          if (value === true) return true

          return true
        },

      },
    })
    const cod = useField('cod')
    const nome = useField('nome')
    const fantasia = useField('fantasia')
    const email = useField('email')
    const numero = useField('numero')
    const tipoDoc = useField('tipoDoc')
    const doc = useField('doc')
    const credito = useField('credito')
    const formaPag = useField('formaPag')
    const ativo = useField('ativo')


    const tipos = ref([
      'CNPJ',
      'CPF'
    ])

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

    return { cod, nome, fantasia, email, numero, tipoDoc, tipos, doc, credito, formaPag, forma_de_pagamento, ativo, items, submit, handleReset }
  },
}
</script>
    
<style scoped>
.container {
  /*display: flex;*/
  margin: 40px;
}
</style>