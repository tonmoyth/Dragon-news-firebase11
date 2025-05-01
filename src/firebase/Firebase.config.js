
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG2G9ZWDQ2CTnN5wfX0Q6wsEG2tlwwCZw",
  authDomain: "dragon-news-e0721.firebaseapp.com",
  projectId: "dragon-news-e0721",
  storageBucket: "dragon-news-e0721.firebasestorage.app",
  messagingSenderId: "285785673267",
  appId: "1:285785673267:web:cfa7b855d532eddb1fdd46"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);