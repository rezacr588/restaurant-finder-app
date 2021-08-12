import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant, map = false }) => {
  const Image = map ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image
        source={{ uri: restaurant.photos[0] }}
      />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};