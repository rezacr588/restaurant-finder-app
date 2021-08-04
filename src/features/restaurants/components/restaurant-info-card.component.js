import React from "react"
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg"
import starSVG from "../../../../assets/star";
import openSVG from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component"

const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.title};
  color: ${props => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`

const CardWrapper = styled(Card)`
  background-color: white;
`

const CardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: white;
`

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[3]};
  padding-bottom: ${props => props.theme.space[3]};
`

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'some restaurant',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    rating = 4,
    isOpenNow = true,
    isClosedTemprorarly = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return <CardWrapper elevation={5}>
    <CardCover key={name} source={{ uri: photos[0] }} />
    <Info>
      <Title>{name}</Title>
      <Section>
        <Rating>
          {ratingArray.map(() => <SvgXml xml={starSVG} height={20} width={20} />)}
        </Rating>
        <SectionEnd>
          <Spacer size="medium" position="left">
            {isClosedTemprorarly && <Text variant="label" style={{ color: "red" }}>
              CLOSED TEMPORARILY
            </Text>}
          </Spacer>
          <Spacer size="medium" position="left">
            {isOpenNow && <SvgXml height={20} width={20} xml={openSVG} />}
          </Spacer>
          <Spacer size="medium" position="left">
            <Image style={{ width: 15 , height: 15 }} source={{ uri: icon }} />
          </Spacer>
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </Info>
  </CardWrapper>;
};