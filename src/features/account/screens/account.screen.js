import React from "react"
import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title } from "../components/styles.component"
import {Spacer} from "../../../components/spacer/spacer.component"

export const AccountScreen = ({navigation}) => (
  <AccountBackground>
    <AccountCover />
    <Title>
      Restaurant
    </Title>
    <AccountContainer>
      <AuthButton
        mode="contained"
        icon="lock-open-outline"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer size="large"> 
        <AuthButton
          mode="contained"
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
)