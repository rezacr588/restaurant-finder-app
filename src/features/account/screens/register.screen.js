import React, {
  useContext,
  useState
} from "react"
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title
} from "../components/styles.component"
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator } from "react-native";
import { Colors } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState("")
  
  const [password, setPassword] = useState("")
  
  const [repeatedPassword, setRepeatedPassword] = useState("")

  const { onRegister, error, isLoading } = useContext(AuthenticationContext)
  
  return (
    <AccountBackground>
      <AccountCover />
      <Title>
        Register
      </Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={u => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeated Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(rp) => setRepeatedPassword(rp)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {
            isLoading ?
              <ActivityIndicator animating={true} color={Colors.blue300} /> :
                <AuthButton
                  icon="email"
                  mode="contained"
                  onPress={() => onRegister(email, password, repeatedPassword)}
                >
                  Register
                </AuthButton>
          }
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  )
}