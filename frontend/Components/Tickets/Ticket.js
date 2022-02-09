import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import colors from '../theme/colors';
import text from '../theme/text.js';
import { Typography } from '../Typography/Typography';

const Ticket = (props) => {
  const { collection, name, tokenId } = props;
  return (
    <Box
      as={TouchableOpacity}
      backgroundColor={'white'}
      border={1}
      borderColor={colors.neutral_200}
      borderRadius='8px'
      mx='16px'
      p='16px'
      display='flex'
      flexDirection='row'
      mb='16px'
    >
      <Box
        height='76px'
        width='76px'
        borderRadius='16px'
        overflow="hidden"
      >
        <Image
          style={{ width: '100%', height: '100%'}}
          source={{ uri: 'https://www.penthousepantherclub.com/fur_paisley_small.png'}}
          resizeMode="cover"
        />
      </Box>
      <Box ml='16px'>
        <Box>
          <Typography {...text.body_semibold_14_14}>{collection}</Typography>
        </Box>
        <Box mt='8px'>
          <Typography {...text.body_semibold_14_14}>{name}</Typography>
        </Box>
        <Box mt='8px'>
          <Typography
            color={colors.neutral_500}
            {...text.caption_medium_12_12}
          >Token ID: {tokenId}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Ticket;