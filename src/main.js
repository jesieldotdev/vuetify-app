
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyBKvUeKeagaedzJJlKvDIMMIDZ6lTdRX7I",
  authDomain: "estoque-app-1662a.firebaseapp.com",
  databaseURL: "https://estoque-app-1662a-default-rtdb.firebaseio.com",
  projectId: "estoque-app-1662a",
  storageBucket: "estoque-app-1662a.appspot.com",
  messagingSenderId: "617999548545",
  appId: "1:617999548545:web:5e630852905df3af73cd80"
};

// Initialize Firebase
const fapp = firebase.initializeApp(firebaseConfig);

// Iniciar firestore Service
//const db = getFirestore(fapp)
const vuetify = createVuetify({
  components,
  directives,
})

let app = createApp(App).use(router).use(vuetify)

app.mount('#app')
