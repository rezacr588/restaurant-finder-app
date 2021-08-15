import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {AccountScreen} from "../../features/account/screens/account.screen"
import {LoginScreen} from "../../features/account/screens/login.screen"
import {RegisterScreen} from "../../features/account/screens/register.screen"
const Stack = createStackNavigator()

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        component={AccountScreen}
        name="Main"
      />
      <Stack.Screen
        component={LoginScreen}
        name="Login"
      />
      <Stack.Screen
        component={RegisterScreen}
        name="Register"
      />
    </Stack.Navigator>
  )
}