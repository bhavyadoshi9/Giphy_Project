import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDk4LFqlgnIQyRcMQ9IwL79MKXOgsfQbQE",
    authDomain: "giphy---authentication.firebaseapp.com",
    projectId: "giphy---authentication",
    storageBucket: "giphy---authentication.appspot.com",
    messagingSenderId: "237471636311",
    appId: "1:237471636311:web:8e58b1ac77f9835b607c12",
    measurementId: "G-HFL6GTDS4R"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)