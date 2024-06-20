
import { initializeApp } from "firebase/app";
import {getFirestore,collection,doc,deleteDoc, addDoc} from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjtbSk0Grn2U1Tci_ctlpauy2SzX8vFcU",
  authDomain: "projeto-mobile-87bfb.firebaseapp.com",
  projectId: "projeto-mobile-87bfb",
  storageBucket: "projeto-mobile-87bfb.appspot.com",
  messagingSenderId: "381944219031",
  appId: "1:381944219031:web:040cff234490566b5630d2"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app) 
const auth = getAuth(app)
export {database, collection, doc, deleteDoc, addDoc, auth, onAuthStateChanged};