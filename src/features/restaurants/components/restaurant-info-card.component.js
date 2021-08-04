import React from "react"
import { SvgXml } from "react-native-svg"
import starSVG from "../../../../assets/star";
import openSVG from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component"
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";


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

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => <SvgXml xml={starSVG} height={20} width={20} />)}
          </Rating>
          <SectionEnd>
            <Spacer size="medium" position="left">
              {isClosedTemprorarly && <Text variant="error">CLOSED TEMPORARILY</Text>}
            </Spacer>
            <Spacer size="medium" position="left">
              {isOpenNow && <SvgXml height={20} width={20} xml={openSVG} />}
            </Spacer>
            <Spacer size="medium" position="left">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};