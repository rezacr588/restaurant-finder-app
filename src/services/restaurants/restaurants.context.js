import React, { useEffect, useMemo, createContext, useState } from "react"
import { restaurantRequest, restaurantsTransform } from "./restaurants.service"
import { LocationContext } from "../locations/location.context"
import { useContext } from "react"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {

  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { location } = useContext(LocationContext)
  
  const retrieveRestaurants = (loc) => {
    setIsLoading(true)
    setRestaurants([])
    setTimeout(
      () => {
        restaurantRequest(loc)
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
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString)
    }
  }, [location])

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