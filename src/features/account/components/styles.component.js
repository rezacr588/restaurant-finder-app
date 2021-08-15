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