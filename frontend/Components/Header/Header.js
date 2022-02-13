import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import Search from '../../../assets/icons/Search';
import Sort from '../../../assets/icons/Sort';
import { Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import BottomModal from '../Modals/BottomModal';
import TicketsFilter from '../Tickets/TicketsFilter';
import HeaderModal from './HeaderFilter';
import colors from '../../theme/colors';

const Header = (props) => {
  const { isSearchVisible, openSearch, closeSearch, isFilterVisible, openFilter, closeFilter } = props;

  return (
    <Box as={SafeAreaView} flexDirection='row' justifyContent='space-between' backgroundColor={colors.neutral_50}>
      <Box as={Pressable} p='10px' onPress={() => openSearch()} zIndex={1}>
        <Search color='#363636' />
        {isSearchVisible && <HeaderModal closeSearch={closeSearch} />}
      </Box>
      <Box flex={1} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Typography>
              Logo Pass
          </Typography>
        </Box>
      </Box>
      <Box as={TouchableOpacity} p='10px' onPress={() => openFilter()}>
        <Sort />
        <BottomModal
          isVisible={isFilterVisible}
          height={300}
          closeModal={closeFilter}
        >
          <TicketsFilter height={300}/>
        </BottomModal>
      </Box>
    </Box>
  );
};

export default Header;
