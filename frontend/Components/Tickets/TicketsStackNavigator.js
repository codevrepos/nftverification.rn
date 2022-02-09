import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import TicketsScreen from './TicketsScreen';
import QRCodeScreen from './QRCodeScreen';
import { Header, HeaderLeft, HeaderRight } from '../Header/Header';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCreditCard,
  faCoins,
  faUser,
  faPaperPlane,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import LeftChevron from '../Header/LeftChevron';

const Stack = createStackNavigator();

const TicketsStackNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TicketsScreen"
        component={TicketsScreen}
        options={({ route }) => ({
          headerLeft: () => <HeaderLeft />,
          title: <Header />,
          headerRight: () => <HeaderRight />
        })}

      />
      <Stack.Screen
        name="QRCodeScreen"
        component={QRCodeScreen}
        options={({ route }) => ({
          title: `Details #${route.params.tokenId}`,
          // TODO: use headerBackImageSource to get the back icon
          headerLeft: () => <LeftChevron />
        })}
      />
    </Stack.Navigator>
  )
};

export default TicketsStackNavigator;