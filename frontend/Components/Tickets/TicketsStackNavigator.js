import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import TicketsScreen from './TicketsScreen';
import QRCodeScreen from './QRCodeScreen';
import { Header, HeaderLeft, HeaderRight } from '../Header/Header';
import LeftChevron from '../Header/LeftChevron';
import colors from '../../theme/colors';
import { Alert } from 'react-native';
import TicketsFilter from './TicketsFilter';
import { TransitionPresets } from '@react-navigation/stack';

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
          headerRight: () => <HeaderRight onPress={() => props.navigation.navigate('TicketsFilter')} />
        })}

      />
      <Stack.Screen
        name="QRCodeScreen"
        component={QRCodeScreen}
        options={({ route }) => ({
          title: `Details #${route.params.tokenId}`,
          headerLeft: () => <LeftChevron onPress={() => props.navigation.goBack()} />
        })}
      />
      <Stack.Screen
        name="TicketsFilter"
        component={TicketsFilter}
        options={({ route }) => ({
          presentation: 'transparentModal',
          cardStyle: { top: 500 },
          gestureResponseDistance: 1000,
          headerShown: false,
          gestureEnabled: true,
          // Transition Presets: https://reactnavigation.org/docs/stack-navigator/#transitionpresets
          ...TransitionPresets.ModalSlideFromBottomIOS,
        })}
      />
    </Stack.Navigator>
  )
};

export default TicketsStackNavigator;