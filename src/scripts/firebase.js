import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Properties
const firebaseConfig = {
  apiKey: "AIzaSyAlxCJRuFYKhHiHqjV_mRGSeHXYZQ2UcaM",
  authDomain: "netflix-gproject.firebaseapp.com",
  projectId: "netflix-gproject",
  storageBucket: "netflix-gproject.appspot.com",
  messagingSenderId: "626553063945",
  appId: "1:626553063945:web:33198a795ad7163b2f46d8",
};

const firebaseApp = initializeApp(firebaseConfig);

export const fireStore = getFirestore(firebaseApp);
export const cloudStorage = getStorage(firebaseApp);
export const authentification = getAuth(firebaseApp);
