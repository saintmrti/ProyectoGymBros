import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwId0B9H2M7q8JjqzcM1_Xc_EuVX9RheE",
  authDomain: "proyectogymbase.firebaseapp.com",
  projectId: "proyectogymbase",
  storageBucket: "proyectogymbase.appspot.com",
  messagingSenderId: "58777112709",
  appId: "1:58777112709:web:6df25de449f191483659ec"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
