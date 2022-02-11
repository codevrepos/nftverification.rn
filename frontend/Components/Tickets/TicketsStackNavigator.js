import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import TicketsScreen from './TicketsScreen';
import QRCodeScreen from './QRCodeScreen';
import { Header, HeaderSearch, HeaderFilter } from '../Header/Header';
import LeftChevron from '../../../assets/icons/LeftChevron';
import colors from '../../theme/colors';
import { Alert, TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';

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
          headerLeft: () => <HeaderSearch onPress={() => Alert.alert('Search')} />,
          title: <Header />,
          headerRight: () => <HeaderFilter />
        })}
      />
      <Stack.Screen
        name="QRCodeScreen"
        component={QRCodeScreen}
        options={({ route }) => ({
          title: `Details #${route.params.tokenId}`,
          headerLeft: () => (
          <Box as={TouchableOpacity}
            py='10px'
            px='20px'
            ml='5px'
            onPress={() => props.navigation.goBack()}
          >
            <LeftChevron />
          </Box>
        )})}
      />
    </Stack.Navigator>
  )
};

export default TicketsStackNavigator;