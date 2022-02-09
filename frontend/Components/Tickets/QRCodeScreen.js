import React from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';

const QRCodeScreen = (props) => {
  const { collection, name, tokenId } = props.route.params;

  return (
    <Box>
      <Typography>
        {collection}, {name}, {tokenId}
      </Typography>
    </Box>
  )
};

export default QRCodeScreen;