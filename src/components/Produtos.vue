<template>


  <v-card v-for="item in produtos" :key="item.cod"  id="prod_card"
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
   
    <v-card-item  id="cont" class="">
      
      <div>
        <div class="text-overline mb-1">
          {{ item.desc }}
        </div>
        <div class="text-h6 mb-1">
          {{ item.cod }}
        </div>
        <!--<div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>-->
        <v-col cols="auto">
          
       
      </v-col>
      </div>
      
    </v-card-item>
    <v-card-actions>
         <div class="qtde">
        <v-btn @click="remover(item.cod)"  class="text-#434343 bg-black" icon="mdi-minus" size="small"></v-btn>
        <span  >{{ item.qt }}</span>

        <v-btn @click="adicionar(item.cod)" class="text-white bg-black" icon="mdi-plus" size="small"></v-btn>
        </div>
     
    </v-card-actions>

    
    
    
  </v-card>


</template>

<script>

export default {
data() {
    return {
      count: 0,
      produtos: [{
        desc: "Frango Assado",
        cod: "111111",
        qt: 0
      },
      {
      desc: "Peixe Assado",
      cod: "111112",
      qt: 0
      }],
      
    }
},

methods: {
  async remover(code) {
    
    this.produtos.forEach((objeto, index) => {
        if(objeto.cod == code){
        
        if(objeto.qt =! 0){
        objeto.qt = objeto.qt -1
        } 
    }
    },)
  },
  
  adicionar(code) {
    
    this.produtos.forEach((objeto, index) => {
        if(objeto.cod == code){
  
        objeto.qt = objeto.qt+1
        
    }
        
    },)
  },
}
}
</script>

<style>
  #prod_card {
   display: flex;
   flex-direction: row;
    background-color: white;
    color: #282828;
    
  }
  
  .qtde {
    
    font-weight: bold;
    font-size: 24px;
   margin: 10px;
  }
  
  .qtde span {
    margin: 5px;
  }
  
  .v-card-actions {
    
   
  }
  
  .cont{
    display: flex;
    flex-direction: column;
    background-color: blue;
    margin: 10px;
   }

</style>