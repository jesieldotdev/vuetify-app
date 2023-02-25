<template>
    <v-card
      class="mx-auto"
      
    >
      <v-toolbar color="dark">
        <!-- <v-btn icon="mdi-menu"></v-btn> -->
  
        <v-toolbar-title>Configurações</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon="mdi-magnify"></v-btn>
      </v-toolbar>
  
      <v-list lines="three">
        <v-list-subheader>Filtros de vendas</v-list-subheader>
  
        <v-list-item :to="{path: '/'}">
          <v-list-item-title>Emissão de nota fiscal</v-list-item-title>
  
          <v-list-item-subtitle>
            Configurar cnpj...
          </v-list-item-subtitle>
        </v-list-item>
  
        <v-list-item>
          <v-list-item-title>Senha</v-list-item-title>
  
          <v-list-item-subtitle>
            Requerir senha ao realizar pagamentos
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
  
      <v-divider></v-divider>
  
      <v-list lines="three" select-strategy="classic">
        <v-list-subheader>Geral</v-list-subheader>
  
        <v-list-item value="notifications">
          <template v-slot:prepend="{ isActive }">
  
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
  
          <v-list-item-title>Notificações</v-list-item-title>
  
          <v-list-item-subtitle>
            Me notificar sobre atualizações
          </v-list-item-subtitle>
        </v-list-item>
  
        <v-list-item value="sound">
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
  
          <v-list-item-title>Sons</v-list-item-title>
  
          <v-list-item-subtitle>
            Automaticamente receber atualizações
          </v-list-item-subtitle>
        </v-list-item>
  
        <!-- <v-list-item value="widgets">
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>
  
          <v-list-item-title>Auto-add widgets</v-list-item-title>
  
          <v-list-item-subtitle>
            Automatically add home screen widgets when downloads complete
          </v-list-item-subtitle>
        </v-list-item> -->
      </v-list>
    </v-card>
  </template>