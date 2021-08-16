import React, { useContext } from "react"
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator"
import { AuthenticationContext } from "../../services/authentication/authentication.context"
import { AccountNavigator } from "./account.navigation";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext)
  const renderNavigation = isAuthenticated ? <AppNavigator /> : <AccountNavigator />
  return (
    <NavigationContainer>
      { renderNavigation }
    </NavigationContainer> 
  ) 
}