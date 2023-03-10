
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZzE8gcc84ewvfAQTaZUSe0I_t3ygNh6c",
  authDomain: "vue-fire-auth-74f30.firebaseapp.com",
  projectId: "vue-fire-auth-74f30",
  storageBucket: "vue-fire-auth-74f30.appspot.com",
  messagingSenderId: "61148941006",
  appId: "1:61148941006:web:7ad0b63df3a9fb80031e9f"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);