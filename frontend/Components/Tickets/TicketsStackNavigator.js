import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import TicketsScreen from './TicketsScreen';
import QRCodeScreen from './QRCodeScreen';
import { Header, HeaderLeft, HeaderRight } from '../Header/Header';
import LeftChevron from '../Header/LeftChevron';
import colors from '../../theme/colors';
import { Alert } from 'react-native';

const Stack = createStackNavigator();

const TicketsStackNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.neutral_50,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen
        name="TicketsScreen"
        component={TicketsScreen}
        options={({ route }) => ({
          headerLeft: () => <HeaderLeft onPress={() => Alert.alert('Search')} />,
          title: <Header />,
          headerRight: () => <HeaderRight onPress={() => Alert.alert('Sort')} />
        })}

      />
      <Stack.Screen
        name="QRCodeScreen"
        component={QRCodeScreen}
        options={({ route }) => ({
          title: `Details #${route.params.tokenId}`,
          // TODO: use headerBackImageSource to get the back icon
          headerLeft: () => <LeftChevron onPress={() => props.navigation.goBack()} />
        })}
      />
    </Stack.Navigator>
  )
};

export default TicketsStackNavigator;