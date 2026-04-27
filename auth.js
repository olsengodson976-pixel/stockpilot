// Purpose: Gérer l'authentification et le cycle de vie de l'utilisateur
import { auth, db } from './firebase-config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Inscription d'un nouveau commerçant
export async function registerUser(email, password, shopName, name) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name: name,
            email: email,
            shopName: shopName,
            plan: "free",
            role: "owner",
            whatsappNumber: "",
            createdAt: serverTimestamp(),
            lastSeen: serverTimestamp()
        });

        window.location.href = "dashboard.html";
    } catch (error) {
        throw error.message;
    }
}

// Connexion
export async function loginUser(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "dashboard.html";
    } catch (error) {
        throw error.message;
    }
}

// Déconnexion
export async function logoutUser() {
    await signOut(auth);
    window.location.href = "login.html";
}

// Protection des pages : Vérifier si l'utilisateur est connecté
export function checkAuth(redirectIfLoggedOut = true) {
    onAuthStateChanged(auth, (user) => {
        if (!user && redirectIfLoggedOut) {
            window.location.href = "login.html";
        }
    });
}
