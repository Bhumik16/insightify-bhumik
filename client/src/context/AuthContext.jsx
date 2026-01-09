// client/src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../lib/firebase"; // Importing from the file you just made!
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Login Function
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // 2. Logout Function
  const logout = () => {
    return signOut(auth);
  };

  // 3. Listen for login state changes automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = { user, loginWithGoogle, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook so we can just call useAuth() later
export function useAuth() {
  return useContext(AuthContext);
}