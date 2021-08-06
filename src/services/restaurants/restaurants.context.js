import React, { useEffect, useMemo, createContext, useState } from "react"
import { restaurantRequest, restaurantsTransform } from "./restaurants.service"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {

  const [restaurants, setRestaurants] = useState([])
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const retrieveRestaurants = () => {
    setIsLoading(true)
    setTimeout(
      () => {
        restaurantRequest()
          .then(restaurantsTransform)
          .then((results) => {
            setIsLoading(false)
            setRestaurants(results)
          })
          .catch(e => {
            setIsLoading(false)
            setError(e)
          })
      }
      , 2000)
  };

  useEffect(() => {
    retrieveRestaurants()
  }, [])

  return (
    <RestaurantContext.Provider value={{
      restaurants,
      isloading,
      error
    }} >
      { children }
    </RestaurantContext.Provider>
  );
}