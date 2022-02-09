import React from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';

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

const HeaderLeft = () => {
  return (
    <Box ml='20px'>
      <Typography>
          Search
      </Typography>
    </Box>
  )
}

const HeaderRight = () => {
  return (
    <Box mr='20px'>
      <Typography>
          Sort
      </Typography>
    </Box>
  )
}

export {
  Header,
  HeaderLeft,
  HeaderRight
}