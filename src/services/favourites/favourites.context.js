import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext)

  const add = (restaurant) => {
    setFavourites(prevFavourites => [...prevFavourites, restaurant]);
  };

  const storeFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`)
      jsonValue && setFavourites(JSON.parse(jsonValue))
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if(user && user.uid)
      loadFavourites(user.uid)
  }, [user])
  
  useEffect(() => {
    if(user && user.uid && favourites.length)
      storeFavourites(favourites, user.uid)
  },[add, remove, user])

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};