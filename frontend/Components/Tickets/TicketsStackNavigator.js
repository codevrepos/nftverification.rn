import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import TicketsScreen from './TicketsScreen';
import QRCodeScreen from './QRCodeScreen';

const Stack = createStackNavigator();

const TicketsStackNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TicketsScreen"
        component={TicketsScreen}

      />
      <Stack.Screen
        name="QRCodeScreen"
        component={QRCodeScreen}
        options={({ route }) => ({
          title: `Details #${route.params.tokenId}`,
        })}
      />
    </Stack.Navigator>
  )
};

export default TicketsStackNavigator;