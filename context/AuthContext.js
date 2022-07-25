import { createContext, useContext, useEffect, useState } from 'react'
import { auth,db } from '../assets/firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from 'firebase/auth'
import {doc,setDoc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

const [user, setUser] = useState({})

const signUp=(email,password)=>{
    createUserWithEmailAndPassword(auth,email,password);
    setDoc(doc(db,'users',email),{
        savedShows:[]
    })
} 
const logIn=(email,password)=> signInWithEmailAndPassword(auth,email,password)
const logOut=()=>signOut(auth)

useEffect(() => {
  const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
return()=>{
    unsubscribe();
}
})

    return (
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}