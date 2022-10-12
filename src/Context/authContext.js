import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut} from 'firebase/auth';

import React, {createContext, useContext, useState, useEffect} from 'react';
import {auth} from '../components/Firebase/config';

export const authContext = createContext();

// custom hook that returns the context object of the AuthProvider component
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
        await createUserWithEmailAndPassword(auth, email, password); // Create a new user with the provided email and password


    const signIn = async (email, password) => 
        await signInWithEmailAndPassword (auth, email, password); //Takes an email and a password, and returns a promise ,If the authentication is successful, the promise resolves to a user.
            

    const logOut = () => 
        signOut(auth); //function to sign off

    useEffect(() => { //if the user is logged in it sets the user as the current user.
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
