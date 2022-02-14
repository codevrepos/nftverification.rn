import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { TicketsScreen } from './TicketsScreen';
import { QRCodeScreen } from './QRCodeScreen';
import Header from '../Header/Header';
import LeftChevron from '../../../assets/icons/LeftChevron';
import colors from '../../theme/colors';
import { TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';

const Stack = createStackNavigator();

const TicketsStackNavigator = (props) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const openSearch = () => {
    setIsSearchVisible(true);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
  }

  const openFilter = () => {
    setIsFilterVisible(true);
  };

  const closeFilter = () => {
    setIsFilterVisible(false);
  };

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
          header: () => (
            <Header
              isSearchVisible={isSearchVisible}
              openSearch={openSearch}
              closeSearch={closeSearch}
              isFilterVisible={isFilterVisible}
              openFilter={openFilter}
              closeFilter={closeFilter} />
            ),
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