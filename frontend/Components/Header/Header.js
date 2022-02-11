import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import Search from './Search';
import Sort from './Sort';
import { TouchableOpacity } from 'react-native';
import BottomModal from '../Modals/BottomModal';
import TicketsFilter from '../Tickets/TicketsFilter';

const Header = () => {
  // TODO: Finish header
  return (
    <Box flex={1} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
      <Box>
        <Typography>
            Logo Pass
        </Typography>
      </Box>
    </Box>
  );
};

const HeaderSearch = (props) => {
  const { onPress } = props;

  return (
    <Box as={TouchableOpacity} ml='10px' p='5px' onPress={() => onPress()}>
      <Search />
    </Box>
  )
}

const HeaderFilter = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <Box as={TouchableOpacity} mr='10px' p='5px' onPress={() => openModal()}>
      <Sort />
      <BottomModal
        isVisible={isVisible}
        height={300}
        closeModal={closeModal}
      >
        <TicketsFilter height={300}/>
      </BottomModal>
    </Box>
  )
}

export {
  Header,
  HeaderSearch,
  HeaderFilter
}