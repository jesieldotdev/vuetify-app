<template>
    <v-navigation-drawer v-model="drawer"
        
        
        theme="dark"
      ><v-list>
          <v-list-item
            prepend-avatar="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            title="John Leider"
            subtitle="john@google.com"
          >
            <template v-slot:append>
              <v-btn
                size="small"
                variant="text"
                icon="mdi-menu-down"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item prepend-icon="mdi-home" :to="{path: '/'}" title="Inicio" ></v-list-item>
          <v-list-item prepend-icon="mdi-cart" :to="{path: '/vendas'}" title="Vendas" ></v-list-item>
          <v-list-item prepend-icon="mdi-package" :to="{path: '/estoque'}" title="Estoque" ></v-list-item>
          <v-list-item prepend-icon="mdi-account" :to="{path: '/clientes'}" title="Clientes" ></v-list-item>
          <v-list-item prepend-icon=" mdi-package-variant-plus" :to="{path: '/addproduto'}" title="Adicionar produto"></v-list-item>
          <v-list-item prepend-icon=" mdi-account-plus" :to="{path: '/addcliente'}" title="Adicionar cliente"></v-list-item>
          <v-divider></v-divider>
          <v-list-item prepend-icon=" mdi-cog" :to="{path: '/config'}" title="Configurações"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Aplicativo de Estoque</v-toolbar-title>
      <v-btn :to="{path: '/'}" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
  </script>