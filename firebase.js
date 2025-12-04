// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7AVBnd9raULfBcQQLx0iHCTkkLRQrWkI",
  authDomain: "mentorsphere-zeal.firebaseapp.com",
  projectId: "mentorsphere-zeal",
  storageBucket: "mentorsphere-zeal.appspot.com",
  messagingSenderId: "292322652558",
  appId: "1:292322652558:web:3132884fd1eb10c444b4df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);