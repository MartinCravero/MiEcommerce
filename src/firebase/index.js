import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkvoQ3knxKG92mnukuOnqnbbE77c2m4ck",
    authDomain: "coderhouse-ecommerce-c273b.firebaseapp.com",
    projectId: "coderhouse-ecommerce-c273b",
    storageBucket: "coderhouse-ecommerce-c273b.appspot.com",
    messagingSenderId: "166032149799",
    appId: "1:166032149799:web:99ce635c095527457dad02"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };