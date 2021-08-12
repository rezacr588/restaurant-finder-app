import React , {useContext, useState} from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native';
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native';
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({navigation}) => {
  const { restaurants, isLoading } = useContext(RestaurantContext)
  const [isToggled, setIsToggled] = useState(false)

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        setIsFavouritesBar={() => {
          setIsToggled((prevToggle) => !prevToggle)
        }}
      />
      {isToggled && <FavouritesBar />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={
            () => navigation.navigate("RestaurantDetail", {
              restaurant: item
            })
          }>
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  )
};