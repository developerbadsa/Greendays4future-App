import React, {createContext, useContext, useState, useEffect} from 'react';
import {
   auth,
   signOut,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from '../firebaseConfig';
import {onAuthStateChanged} from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({children}) {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
         setUser(user);
         setLoading(false);
      });

      return () => unsubscribe();
   }, []);
   console.log('user');
   console.log(user);

   const Register = async (email, password) => {
      await createUserWithEmailAndPassword(auth, email, password);
   };

   const login = async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password);
   };

   const logout = async () => {
      await signOut(auth);
   };

   return (
      <AuthContext.Provider value={{user, loading, Register, login, logout}}>
         {children}
      </AuthContext.Provider>
   );
}

export function useAuth() {
   return useContext(AuthContext);
}
