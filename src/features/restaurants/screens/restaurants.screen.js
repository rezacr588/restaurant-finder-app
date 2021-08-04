import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, SafeAreaView } from 'react-native';
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`

const ListWrapper = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`

const SearchWrapper = styled.View`
  padding: ${props => props.theme.space[3]};
`

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchWrapper>
      <Searchbar />
    </SearchWrapper>
    <ListWrapper>
      <RestaurantsInfoCard />
    </ListWrapper>
  </SafeArea>
);