import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen"
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen"

const SettingsStack = createStackNavigator()

export const SettingsNavigator = () => (
  <SettingsStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerMode: "screen",
      headerShown: false,
    }}
  >
    <SettingsStack.Screen
      component={SettingsScreen}
      options={{headerShown: false}}
      name="Settings"
    />
    <SettingsStack.Screen
      component={FavouritesScreen}
      name="Favourites"
    />
  </SettingsStack.Navigator>
)