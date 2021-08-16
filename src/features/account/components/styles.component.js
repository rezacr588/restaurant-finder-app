import { Button, TextInput } from "react-native-paper";
import { theme } from "../../../infrastructure/theme"
import {Text} from "../../../components/typography/text.component"
import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg")
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const AccountCover = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255,255,255,0.3)
`

export const AccountContainer = styled.View`
  background-color: rgba(255,255,255, 0.7);
  padding: ${props => props.theme.space[4]};
  margin-top: ${props => props.theme.space[2]};
`

export const AuthButton = styled(Button).attrs({
  color: theme.colors.brand.primary
})`
  padding: ${props => props.theme.space[2]}
`

export const AuthInput = styled(TextInput)`
  width: 300px;
`

export const Title = styled(Text)`
  font-size: 30px;
`

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${props => props.theme.space[2]}
  margin-bottom: ${props => props.theme.space[2]}
`

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 0%;
  padding: ${props => props.theme.space[2]}
`