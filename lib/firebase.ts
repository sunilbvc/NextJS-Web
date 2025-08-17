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

// Initialize Firebase Storage
const storage = getStorage(app);

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

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: string;
  authorId: string;
  authorName: string;
  tags: string[];
  status: 'draft' | 'published';
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  readTime: number;
  views: number;
}

export interface BlogCategory {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  createdAt: Date;
}

export interface BlogAuthor {
  id?: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  role: 'admin' | 'editor' | 'author';
  createdAt: Date;
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

// Blog Functions
export async function createBlogPost(postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt' | 'views'>) {
  try {
    const post: Omit<BlogPost, 'id'> = {
      ...postData,
      createdAt: new Date(),
      updatedAt: new Date(),
      views: 0
    };
    
    const docRef = await addDoc(collection(db, 'blogs'), post);
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to create blog post' };
  }
}

export async function getBlogPosts(limitCount: number = 10, lastDoc?: any) {
  try {
    let q = query(
      collection(db, 'blogs'),
      where('status', '==', 'published'),
      orderBy('publishedAt', 'desc'),
      limit(limitCount)
    );
    
    if (lastDoc) {
      q = query(q, startAfter(lastDoc));
    }
    
    const querySnapshot = await getDocs(q);
    const posts: BlogPost[] = [];
    
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() } as BlogPost);
    });
    
    return { success: true, posts, lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1] };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to fetch blog posts' };
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const q = query(collection(db, 'blogs'), where('slug', '==', slug), where('status', '==', 'published'));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return { success: false, error: 'Blog post not found' };
    }
    
    const post = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as BlogPost;
    return { success: true, post };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to fetch blog post' };
  }
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>) {
  try {
    const postRef = doc(db, 'blogs', id);
    await updateDoc(postRef, {
      ...updates,
      updatedAt: new Date()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to update blog post' };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    const postRef = doc(db, 'blogs', id);
    await deleteDoc(postRef);
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to delete blog post' };
  }
}

export async function getBlogCategories() {
  try {
    const querySnapshot = await getDocs(collection(db, 'blog_categories'));
    const categories: BlogCategory[] = [];
    
    querySnapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() } as BlogCategory);
    });
    
    return { success: true, categories };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to fetch categories' };
  }
}

export async function createBlogCategory(categoryData: Omit<BlogCategory, 'id' | 'createdAt'>) {
  try {
    const category: Omit<BlogCategory, 'id'> = {
      ...categoryData,
      createdAt: new Date()
    };
    
    const docRef = await addDoc(collection(db, 'blog_categories'), category);
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to create category' };
  }
}

export async function incrementBlogViews(id: string) {
  try {
    const postRef = doc(db, 'blogs', id);
    await updateDoc(postRef, {
      views: increment(1)
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Failed to increment views' };
  }
} 