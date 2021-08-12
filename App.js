import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/infrastructure"
import AppLoading from 'expo-app-loading';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation"
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
 
export default function App() {

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  if(!latoLoaded || !oswaldLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <ThemeProvider theme={theme} >
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    )
  }
}
