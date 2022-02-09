import React from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import Search from './Search';
import Sort from './Sort';
import { TouchableOpacity } from 'react-native';

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

const HeaderLeft = (props) => {
  const { onPress } = props;

  return (
    <Box as={TouchableOpacity} ml='10px' p='5px' onPress={() => onPress()}>
      <Search />
    </Box>
  )
}

const HeaderRight = (props) => {
  const { onPress } = props;

  return (
    <Box as={TouchableOpacity} mr='10px' p='5px' onPress={() => onPress()}>
      <Sort />
    </Box>
  )
}

export {
  Header,
  HeaderLeft,
  HeaderRight
}