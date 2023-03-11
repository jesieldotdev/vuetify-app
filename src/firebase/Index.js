import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBKvUeKeagaedzJJlKvDIMMIDZ6lTdRX7I",
  authDomain: "estoque-app-1662a.firebaseapp.com",
  databaseURL: "https://estoque-app-1662a-default-rtdb.firebaseio.com",
  projectId: "estoque-app-1662a",
  storageBucket: "estoque-app-1662a.appspot.com",
  messagingSenderId: "617999548545",
  appId: "1:617999548545:web:5e630852905df3af73cd80"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Iniciar firestore Service
const db = getFirestore(app)
export {
  db
}

