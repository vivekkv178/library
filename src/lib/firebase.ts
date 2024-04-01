("use client");
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: process?.env?.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process?.env?.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process?.env?.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process?.env?.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process?.env?.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process?.env?.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebaseApp);

export function getUser() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user ? user.toJSON() : null);
    });
  });
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  try {
    const user = await signInWithPopup(auth, provider);
    return user;
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing in with email:", error);
  }
}

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.error("Error signing up with email:", error);
    throw error;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await sendPasswordResetEmail(auth, email);
    return response;
  } catch (error) {
    console.error("Error in forgot password", error);
  }
};

export const signOut = async () => {
  console.log("insignout");
  try {
    await auth.signOut();
    return;
  } catch (error) {
    console.error("Error signing out", error);
  }
};
