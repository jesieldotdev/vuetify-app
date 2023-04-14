<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">

              <v-btn
        class="me-4" type="submit"
         v-bind="props"
        >
          Salvar
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          {{ myProp }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },

    props: {
      myProp: {
        type: String,
        required: true
      }
    },

  }
</script>