import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/infrastructure/theme"
import AppLoading from 'expo-app-loading';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from "./src/services/locations/location.context";
import { Navigation } from "./src/infrastructure/navigation"
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyD78j_dckakL36TkI8kpJ0ZMps7OjIS1po",
  authDomain: "restaurant-19ba0.firebaseapp.com",
  projectId: "restaurant-19ba0",
  storageBucket: "restaurant-19ba0.appspot.com",
  messagingSenderId: "875326891819",
  appId: "1:875326891819:web:e8a987a061dc5c53b3476e"
};

firebase.initializeApp(firebaseConfig);

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
