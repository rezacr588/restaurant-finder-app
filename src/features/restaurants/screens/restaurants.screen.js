import React , {useContext} from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native';
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

export const RestaurantsScreen = () => {
  const restaurantsContext = useContext(RestaurantContext)
  return (
      <SafeArea>
        <SearchWrapper>
          <Searchbar />
        </SearchWrapper>
        <RestaurantList
          data={restaurantsContext.restaurants}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
  )
};