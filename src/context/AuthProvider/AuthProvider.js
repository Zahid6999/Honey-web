import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //-------CreateUser------- 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // -------LogInUser--------
    const LogInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // ------Google LogIn--------
    const googleLogIn = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    // log Out---------
    const logOut = () => {
        return signOut(auth)
    };

    // Manage User----------------
    useEffect(() => {
        setLoading(false)
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user State change', currentUser);
            setUser(currentUser);
        });
        return unSubscribe();
    }, []);

    const authInfo = { user, createUser, googleLogIn, LogInUser, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;