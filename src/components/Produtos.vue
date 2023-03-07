<template>
  <v-card class="mx-auto" max-width="">
    <v-toolbar color="transparent" height="88" flat>
      <!-- <template v-slot:prepend>
        <v-btn icon="mdi-arrow-left">
        </v-btn>
      </template> -->

      <v-text-field class="ms-4" v-model="search" clearable hide-details label="Pesquisar Produto"
        prepend-inner-icon="mdi-magnify" single-line></v-text-field>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-toolbar>

    <div v-if="keywords.length > 0" class="py-3 px-4">
      <v-chip v-for="(keyword, i) in keywords" :key="i" class="me-2">
        {{ keyword }}
      </v-chip>

    </div>

    <v-divider></v-divider>

    <v-list lines="three">
      <v-list-item v-for="(item, i) in searching" :key="i"  link @click="addItem(item)">
        <template v-slot:prepend>
          <!-- <v-avatar
            class="me-4 mt-2"
            rounded="0"
          >
            <v-img :src="item.image" cover></v-img>
          </v-avatar> -->
        </template>

        <v-list-item-title class="text-uppercase font-weight-regular text-caption" v-text="`cod: ${item.cod}`"
        ></v-list-item-title>

        <div v-text="`desc: ${item.desc}`"></div>
      </v-list-item>
    </v-list>

    <v-list lines="three">
      <v-list-item v-for="(item, i) in cart" :key="i"  link >
        <template v-slot:prepend>
  
        </template>

        <v-list-item-title class="text-uppercase font-weight-regular text-caption" v-text="item"></v-list-item-title>

        <div v-text="item"></div>
      </v-list-item>
    </v-list>

    
  </v-card>

</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
        cod: '336226AM',
        desc: 'Cabo Embreagem NXR200',
        preco: '87,80',
        keyword: 'Drinks',

      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
        cod: '347582',
        desc: 'Chave de Luz Titan KS',
        preco: '34,50',
        keyword: 'Drinks',

      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
        cod: 'K432550',
        desc: 'Kit Carenagem Biz125',
        preco: '150,89',
        keyword: 'Drinks',

      },


    ],
    search: '',
    
   


  }),
  methods: {
    
    addItem(item) {
      const cart = []
      
      alert(item.cod)
      cart.push(item.desc)
   
      if (item) {
        alert(cart)
      }

      return cart
    }
    
  }
  ,

  computed: {
    keywords() {
      if (!this.search) return []

      const keywords = []

      

      for (const search of this.searching) {
        keywords.push(search.desc)
      }

      return keywords
    },
    searching() {
      if (!this.search) return this.items

      const search = this.search.toLowerCase()

      return this.items.filter(item => {
        const text = item.desc.toLowerCase()

        return text.indexOf(search) > -1
      })
    },
  },
}
</script>