// Purpose: Configuration et initialisation de Firebase (SDK version ESM)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBBequxsf8RHW6Jq34BbynD-sDXsTjxqI0",
    authDomain: "stockpilot-app-4f328.firebaseapp.com",
    projectId: "stockpilot-app-4f328",
    storageBucket: "stockpilot-app-4f328.firebasestorage.app",
    messagingSenderId: "620424720730",
    appId: "1:620424720730:web:619838111d2cf5f0b18363"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Mode debug pour développement
const DEBUG = true;

export { auth, db, DEBUG };
