<template>
    <h1 class=text-center>Vendas</h1>
     <v-btn class="mt-3" id="btn" variant="flat" to="/novavenda" color="info">Nova venda

  </v-btn>
  
  <v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              left
              fab
            >
              <v-icon>add</v-icon>
            </v-btn>
</template>

<style scoped>
#btn {
  width: 180px;
  display: flex;
  margin: 0 auto;
}
</style>