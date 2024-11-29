
import { initializeApp } from "firebase/app"; 
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdegRH4QcxjwC_79LpxedU-PAs9P7C-R4",
  authDomain: "fireboom-a029d.firebaseapp.com",
  projectId: "fireboom-a029d",
  storageBucket: "fireboom-a029d.appspot.com",
  messagingSenderId: "108999100473",
  appId: "1:108999100473:web:29a7d70816632540c225e8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);