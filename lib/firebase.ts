import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc, orderBy, limit, startAfter, increment } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

// Export the app for other uses
export { app };

// Interfaces for data types
export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    service: string;
    message: string;
}

export interface EmailSubscription {
    email: string;
    subscribedAt: Date;
}

// Image upload function
export async function uploadImage(file: File, path: string): Promise<string> {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    throw new Error('Failed to upload image');
  }
}

// Contact Form Functions
export async function submitContactForm(formData: ContactFormData) {
    try {
        const docRef = await addDoc(collection(db, 'contact_submissions'), {
            ...formData,
            createdAt: new Date()
        });
        return { success: true, id: docRef.id };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

// Email Subscription Functions
export async function subscribeEmail(email: string) {
    try {
        const docRef = await addDoc(collection(db, 'email_subscriptions'), {
            email,
            subscribedAt: new Date()
        });
        return { success: true, id: docRef.id };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function unsubscribeEmail(email: string) {
    try {
        const q = query(collection(db, 'email_subscriptions'), where('email', '==', email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return { success: false, error: 'Email not found' };
        }
        const docToDelete = querySnapshot.docs[0];
        await deleteDoc(doc(db, 'email_subscriptions', docToDelete.id));
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
} 