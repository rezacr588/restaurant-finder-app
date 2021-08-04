import React from "react"
import styled, { useTheme } from "styled-components/native"

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom"
}

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3
}

const getVariant = (size, position, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
}

export const SpacerView = styled.View`
  ${({variant}) => variant};
`

export const Spacer = ({size, position, children}) => {
  const theme = useTheme();
  const variant = getVariant(size, position, theme)
  return <SpacerView variant={variant}>{children}</SpacerView>
}

Spacer.defaultProps = {
  position: "top",
  size: "small"
}