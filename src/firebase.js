// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyZusiagk1um9nut1GrGpSnzHC6-SF9F0",
  authDomain: "mrp-red.firebaseapp.com",
  projectId: "mrp-red",
  storageBucket: "mrp-red.firebasestorage.app",
  messagingSenderId: "465096765845",
  appId: "1:465096765845:web:6a395d172c137be5d2869c",
  measurementId: "G-KKV12P3QMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Function to add a new client
export const addClient = async (clientData) => {
  try {
    const docRef = await addDoc(collection(db, "clientes"), clientData);
    console.log("Cliente adicionado com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar cliente: ", e);
  }
};

// Function to get all clients
export const getClients = async () => {
  const querySnapshot = await getDocs(collection(db, "clientes"));
  const clients = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return clients;
};

// Function to update a client
export const updateClient = async (clientId, updatedData) => {
  const clientRef = doc(db, "clientes", clientId);
  await updateDoc(clientRef, updatedData);
};

// Function to delete a client
export const deleteClient = async (clientId) => {
  await deleteDoc(doc(db, "clientes", clientId));
};
