import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut} from 'firebase/auth';

import React, {createContext, useContext, useState, useEffect} from 'react';
import {auth} from '../components/Firebase/config';

export const authContext = createContext();

export const useAuth = () => {
    
    const context = useContext(authContext)
    if(!context){
        throw new Error ('useAuth must be used in AuthProvider')
    }
    return context
}

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [load, setload] = useState(true);


    const signUp = async (email, password) => 
        await createUserWithEmailAndPassword(auth, email, password);


    const signIn = async (email, password) => 
        await signInWithEmailAndPassword (auth, email, password);
            

    const logOut = () => 
        signOut(auth);

    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
        setUser(user)
        setload(false)
        }); 
    }, []);

    return (

        <authContext.Provider 
            value= {{
                signUp,
                signIn,
                user,
                load,
                logOut
                }}
                >
                {children}
        </authContext.Provider>
    
)}

export default AuthProvider
