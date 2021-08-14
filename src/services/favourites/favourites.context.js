import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites(prevFavourites => [...prevFavourites, restaurant]);
  };

  const storeFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@favourites1', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favourites1')
      jsonValue && setFavourites(JSON.parse(jsonValue))
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadFavourites()
  }, [])
  
  useEffect(() => {
    storeFavourites(favourites)
  },[add, remove])

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