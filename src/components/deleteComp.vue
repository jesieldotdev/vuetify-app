<template>

    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-delete-outline" color="primary"
          v-bind="props" 
        >
         
        </v-btn>
      </template>
      <v-card>
      
       
          
         
                <v-card-text>

          Certeza que você deseja remover {{myProp.desc}} do inventário?
        </v-card-text>

        <v-card-actions>

        

          <v-btn :disabled="loading" :loading="loading" @click="deleteProd(myProp)" color="primary">Sim</v-btn>
          <v-btn @click="dialog = false"  color="primary">Não</v-btn>
          <!--<v-btn :disabled="loading" :loading="loading" @click="enviarDados()">Load</v-btn>-->

         
        </v-card-actions>
                
            
       
        
   
        
      </v-card>
    </v-dialog>

</template>

<script>
import prodColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";

  export default {
    data: () => ({
      loading: false,
      dialog: false,
      marcas: ["RIFFEL", "TORK", "VEI", "EVOL"]
    }),
    props: {
    myProp: {
      type: String,
      required: true
    }
  },
  methods: {
    async deleteProd(myProp) {
      
      this.loading = true;
      
      let prodRef = doc(prodColRef, myProp.id);

      
      await deleteDoc(prodRef);
      this.loading = false
      this.dialog= false
      await new Promise(r => setTimeout(r, 2000));
      window.location.reload()
     

      
    },
    enviarDados() {
      this.loading = true;
      // chamar sua função aqui
      
    }
  }
  }
</script>