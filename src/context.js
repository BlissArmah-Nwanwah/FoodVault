import React, { useState, useEffect, useContext } from "react";
import { useCallback } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import { auth } from './firebase-config'
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])


  const fetchData = async () => {
    setLoading(true)
    try {
      const resp = await axios.get(`${url}`)
      const { drinks } = resp.data;
      if (drinks) {
        const newData = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
          return ({
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          })
        })
        setData(newData)
      }
      else {
        setData([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <AppContext.Provider value={{ loading, data, createUser, user, logout, signIn }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
