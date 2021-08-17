import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen"

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
      component={() => null}
      name="Favourites"
    />
  </SettingsStack.Navigator>
)