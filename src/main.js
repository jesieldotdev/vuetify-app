
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import {FlashMessage} from '@smartweb/vue-flash-message';
import { firestorePlugin } from 'vuefire'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

let app = createApp(App).use(router).use(vuetify).use(FlashMessage).use(firestorePlugin)


app.mount('#app')

