<template>

    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-pencil" color="primary"
          v-bind="props" 
        >
         
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar Informações</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Descrição"
                  v-bind:value="myProp.desc"
                  required
                ></v-text-field>
                <p>  </p>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Código"
                  
                  v-bind:value="myProp.cod"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field label="Preço da venda"
        prefix="R$" type="number" v-bind:value="myProp.preco" step=0.01></v-text-field>
        
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="marcas"
                  label="Marca"
                  v-bind:value="myProp.marca"
                  
                ></v-autocomplete>
              </v-col>
             
              <v-col cols="12">
               <v-text-field label="Qtde. estoque"
               v-bind:value="myProp.qtde"
        type="number"></v-text-field>
              </v-col>
              
              <v-col
                cols="12"
                sm="6"
              >
<v-text-field  label="Qtde. por Und."
v-bind:value="myProp.qtde_und"
        type="number"></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                 <v-select :items="['SIM', 'NÃO']"
                 v-bind:value="myProp.ativo"
        label="Ativo"></v-select>
                
              
              </v-col>
            </v-row>
          </v-container>
          <small>*Preencha os campos</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      marcas: ["RIFFEL", "TORK", "VEI", "EVOL"]
    }),
    props: {
    myProp: {
      type: String,
      required: true
    }
  }
  }
</script>