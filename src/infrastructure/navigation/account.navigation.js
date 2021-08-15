import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";

const Stack = createStackNavigator()

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        component={() => (
          <View>
            <Text>Account Screen</Text>
          </View>
        )}
        name="Main"
      />
      <Stack.Screen
        component={() => (
          <View>
            <Text>Login Screen</Text>
          </View>
        )}
        name="Login"
      />
    </Stack.Navigator>
  )
}