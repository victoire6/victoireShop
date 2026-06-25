// firebase.js offline 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,

  collection,
  addDoc,
  getDocs,
  setDoc,
  updateDoc,
  orderBy,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
  runTransaction,
  writeBatch,
  increment,
  arrayUnion,
  limit

} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBUs10iujGySTIH1c1mK1YDhT3Q0g52yG8",
    authDomain: "vicky-shop-db.firebaseapp.com",
    projectId: "vicky-shop-db",
    storageBucket: "vicky-shop-db.firebasestorage.app",
    messagingSenderId: "865639144154",
    appId: "1:865639144154:web:b8295dd4e99ce3dd9163e3",
    measurementId: "G-KP8Z6X3RZW"
  };

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

const enableIndexedDbPersistence = async () => true;

export {
  db,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  serverTimestamp,
  Timestamp,
  runTransaction,
  limit,
  orderBy,
  writeBatch,
  increment,
  arrayUnion,
  enableIndexedDbPersistence
};
