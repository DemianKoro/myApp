import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import React from "react";
import swal from 'sweetalert';


export const LoginContext = createContext({});
LoginContext.displayName = "LoginContext";

export const LoginProvider = ({children}) => {

    const [loger, setLoger] = React.useState([""]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const email =  sessionStorage.getItem("email");
    const password =  sessionStorage.getItem("password");
    console.log(email);
    console.log(password);

    // ↓ Get Loger from Firestore ↓ //

    React.useEffect(() => {
        const db = getFirestore();
        const userCollection = db.collection("usuarios")
        .where("email", "==", email ).where("password", "==", password); // FILTRO
        
        userCollection
          .get()
    
        const getLogerFromFirestore = async () => {
          setIsLoading(true);
          try {
          const response = await userCollection.get();
          if(response.empty) {
            console.log("No hay Usuarios");
            
           
          }
          setLoger(response.docs.map((doc) => ({...doc.data(), id: doc.id })));
          } catch (err) {
            setError(err);
          } finally {
            setIsLoading(false);
          }
        };
        getLogerFromFirestore();

        // ↑ Get from Firestore ↑ //

    }, [email, password]);  

    return (
    <LoginContext.Provider value={{loger, }}>
        {children}
    </LoginContext.Provider>
    );
}

export const useLogin = () => useContext(LoginContext);