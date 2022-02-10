import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';

const TicketsFilter = (props) => {
  return (
    <Box backgroundColor='white'>
      <Typography>Sort by Collection</Typography>
      <Box as={TouchableOpacity} onPress={() => props.navigation.goBack()}>
        <Typography>Close Modal</Typography>
      </Box>
    </Box>
  )
}

export default TicketsFilter;