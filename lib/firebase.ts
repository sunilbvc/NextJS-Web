import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase only if not already initialized
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firestore
export const db = getFirestore(app);

// Export the app for other uses
export default app;

// Interface for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  createdAt: Date;
}

// Interface for email subscription data
export interface EmailSubscription {
  email: string;
  subscribedAt: Date;
  source?: string; // e.g., 'newsletter', 'footer', 'popup'
  status: 'active' | 'unsubscribed';
}

// Function to submit contact form data to Firestore
export async function submitContactForm(data: Omit<ContactFormData, 'createdAt'>) {
  try {
    // Add timestamp
    const formDataWithTimestamp = {
      ...data,
      createdAt: new Date()
    };
    
    // Add document to Firestore
    const docRef = await addDoc(collection(db, 'contact_submissions'), formDataWithTimestamp);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Function to subscribe email to newsletter
export async function subscribeEmail(email: string, source: string = 'newsletter') {
  try {
    // Check if email already exists
    const emailQuery = query(
      collection(db, 'email_subscriptions'),
      where('email', '==', email),
      where('status', '==', 'active')
    );
    
    const querySnapshot = await getDocs(emailQuery);
    
    if (!querySnapshot.empty) {
      return { success: false, error: 'Email already subscribed' };
    }
    
    // Add new subscription
    const subscriptionData: EmailSubscription = {
      email,
      subscribedAt: new Date(),
      source,
      status: 'active'
    };
    
    const docRef = await addDoc(collection(db, 'email_subscriptions'), subscriptionData);
    
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Subscription failed' };
  }
}

// Function to unsubscribe email
export async function unsubscribeEmail(email: string) {
  try {
    // Find and update the subscription
    const emailQuery = query(
      collection(db, 'email_subscriptions'),
      where('email', '==', email),
      where('status', '==', 'active')
    );
    
    const querySnapshot = await getDocs(emailQuery);
    
    if (querySnapshot.empty) {
      return { success: false, error: 'Email not found or already unsubscribed' };
    }
    
    // Update status to unsubscribed
    const docRef = doc(db, 'email_subscriptions', querySnapshot.docs[0].id);
    await updateDoc(docRef, { status: 'unsubscribed' });
    
    return { success: true, message: 'Successfully unsubscribed' };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unsubscribe failed' };
  }
} 