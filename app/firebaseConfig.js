import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: 'AIzaSyA9AlJXmKxzRwzgMhDVkIx5Yn1B9Khp7wA',
  authDomain: 'greenday4future.firebaseapp.com',
  projectId: 'greenday4future',
  storageBucket: 'greenday4future.appspot.com',
  messagingSenderId: '966455583800',
  appId: '1:966455583800:web:9dea92b2375d1a2d2af2cd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
