import React from 'react';
import { Box } from './Box/Box';
import { Typography } from './Typography/Typography';

export default function Header() {
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
}