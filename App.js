import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/infrastructure"
import AppLoading from 'expo-app-loading';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { SafeArea } from './src/components/utility/safe-area.component'
import { Ionicons } from "@expo/vector-icons";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Tab = createBottomTabNavigator()

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
)

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
)

const Screens = [
  {
    name: "Map",
    component: Map
  },
  {
    name: "Settings",
    component: Settings
  },
  {
    name: "Restaurants",
    component: RestaurantsScreen
  },
]

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}

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
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
            >
              {Screens.map(screen => (
                <Tab.Screen key={screen.name} component={screen.component} name={screen.name} />
              ))}
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    )
  }
}
