import React , {useContext} from 'react';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const {restaurants, error, isLoading} = useContext(RestaurantContext)
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchWrapper>
        <Searchbar />
      </SearchWrapper>
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => (
          <Spacer position="bottom" size="large">
            <RestaurantsInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  )
};