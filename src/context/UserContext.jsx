import { createContext, useContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import React from "react";

export const UserContext = createContext({});
UserContext.displayName = "userContext";

export const UserProvider = ({ children }) => {
    // const [data, setData] = React.useState([]);
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // ↓ Get from Firestore ↓ //

    React.useEffect(() => {
        const db = getFirestore();
        const userCollection = db.collection("usuarios")
        // .where("categoriaId", "==", 1); // FILTRO
        
        userCollection
          .get()
    
        const getUsersFromFirestore = async () => {
          setIsLoading(true);
          try {
          const response = await userCollection.get();
          if(response.empty) {
            console.log("No hay Usuarios");
          }
          setUser(response.docs.map((doc) => ({...doc.data(), id: doc.id })));
          } catch (err) {
            setError(err);
          } finally {
            setIsLoading(false);
          }
        };
        getUsersFromFirestore();

        // ↑ Get from Firestore ↑ //

        ////////////////////////////////////////////////

    }, []);      
    
    
    return (
    <UserContext.Provider value={{user, error, isLoading  }}>
        {children}
    </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);