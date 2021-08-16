import React from "react"
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title
} from "../components/styles.component"
import { Spacer } from "../../../components/spacer/spacer.component"
import LottieView from 'lottie-react-native';

export const AccountScreen = ({navigation}) => (
  <AccountBackground>
    <AccountCover />
    <AnimationWrapper>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/watermelon.json")}
      />
    </AnimationWrapper>
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
          icon="email"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
)