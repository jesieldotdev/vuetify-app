<template>
  <div>
    <ul>
      <li v-for="documento in documentos" :key="documento.id">{{ documento.nome }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from '@/main'

export default {
  name: 'MeuComponente',
  data() {
    return {
      documentos: []
    }
  },
  firestore() {
    return {
      documentos: db.collection('produtos')
    }
  }
}
</script>
