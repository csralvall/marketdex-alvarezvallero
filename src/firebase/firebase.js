import firebase from 'firebase/app';

import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA3y-WRu-2olfBJVfW8sUUP85YJo9c20GQ",
  authDomain: "marketdex-ecommerce.firebaseapp.com",
  projectId: "marketdex-ecommerce",
  storageBucket: "marketdex-ecommerce.appspot.com",
  messagingSenderId: "590253481582",
  appId: "1:590253481582:web:388c085172bea9f432107f"
};

const ap = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

export const getFirebase = () => ap;

export const getFirestore = () => firebase.firestore(ap);
