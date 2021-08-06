import React, { useEffect, useMemo, createContext, useState } from "react"
import { restaurantRequest, restaurantsTransform } from "./restaurants.service"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {

  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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
      isLoading,
      error
    }} >
      { children }
    </RestaurantContext.Provider>
  );
}