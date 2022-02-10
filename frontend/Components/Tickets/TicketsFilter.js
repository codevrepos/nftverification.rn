import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';

const TicketsFilter = (props) => {
  return (
    <Box backgroundColor='white' height='100%'>
      <Typography>Sort by Collection</Typography>
      <Box as={TouchableOpacity} onPress={() => console.log('asdf')}>
        <Typography>Close Modal</Typography>
      </Box>
    </Box>
  )
}

export default TicketsFilter;