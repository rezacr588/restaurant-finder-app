import { Button } from "react-native-paper";
import {theme} from "../../../infrastructure/theme"
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