import React from "react"
import { ScrollView , TouchableOpacity } from "react-native"
import styled from "styled-components"
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component"
import { Spacer } from "../spacer/spacer.component"
import { Text } from "../typography/text.component"

const FavouritesWrapper = styled.View`
  padding: 4px;
`
export const FavouritesBar = ({ favouriteRestaurants, onNavigate }) => {
  if (!favouriteRestaurants.length) return null;
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          favouriteRestaurants.map(
            restaurant =>
              <Spacer
                position="left"
                size="medium"
                key={restaurant.name}
              >
                <TouchableOpacity
                  onPress={
                    () =>
                      onNavigate(
                        "RestaurantDetail",
                        {
                          restaurant: restaurant
                        }
                      )
                  }
                >
                  <CompactRestaurantInfo
                    restaurant={restaurant}
                  />
                </TouchableOpacity>
              </Spacer>
          )
        }
      </ScrollView>
    </FavouritesWrapper>
  )
}