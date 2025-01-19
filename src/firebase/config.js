import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4OA3y-WfGCJqHSHcXjhgk45WuUTJW2tQ",
  authDomain: "event-management-1c99b.firebaseapp.com",
  projectId: "event-management-1c99b",
  storageBucket: "event-management-1c99b.firebasestorage.app",
  messagingSenderId: "674964882833",
  appId: "1:674964882833:web:e04dbc77f0d2f579c3c630"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);