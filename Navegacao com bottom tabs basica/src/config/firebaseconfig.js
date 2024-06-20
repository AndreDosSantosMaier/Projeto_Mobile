import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkXbgO3fQ77K3b-GPs8-9pxw_JuWpkkMY",
  authDomain: "skibidibased.firebaseapp.com",
  projectId: "skibidibased",
  storageBucket: "skibidibased.appspot.com",
  messagingSenderId: "819347258725",
  appId: "1:819347258725:web:bc28deb2d225a3e618f58c"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database