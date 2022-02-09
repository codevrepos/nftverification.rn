import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import TicketsScreen from './TicketsScreen';
import QRCodeScreen from './QRCodeScreen';

const Stack = createStackNavigator();

const TicketsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TicketsScreen"
        component={TicketsScreen}
      />
      <Stack.Screen
        name="QRCodeScreen"
        component={QRCodeScreen}
      />
    </Stack.Navigator>
  )
};

export default TicketsStackNavigator;