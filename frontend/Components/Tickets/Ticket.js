import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import colors from '../../theme/colors';
import text from '../../theme/text';
import { Typography } from '../Typography/Typography';

export const TicketLoading = (props) => {
  return (
    <Box
      backgroundColor='white'
      border='1px'
      borderColor={colors.neutral_200}
      borderRadius='8px'
      mx='16px'
      p='16px'
      display='flex'
      flexDirection='row'
      mt='8px'
    >
      <Box
        height='76px'
        width='76px'
        borderRadius='8px'
        overflow="hidden"
        backgroundColor='grey'
      />
      <Box ml='16px' mt='10px'>
        <Box height='14px' width='160px' backgroundColor='grey' borderRadius='2px' />
        <Box height='14px' width='125px' backgroundColor='grey' borderRadius='2px' mt='8px' />
        <Box height='14px' width='175px' backgroundColor='grey' borderRadius='2px' mt='8px' />
      </Box>
    </Box>
  )
}

export const Ticket = (props) => {
  const { collection, name, tokenId, imageUrl } = props;

  return (
    <Box
      as={TouchableOpacity}
      backgroundColor='white'
      border='1px'
      borderColor={colors.neutral_200}
      borderRadius='8px'
      mx='16px'
      p='16px'
      display='flex'
      flexDirection='row'
      mt='8px'
      onPress={() => props.navigation.navigate('QRCodeScreen', {
        collection,
        name,
        tokenId,
        imageUrl
      })}
    >
      <Box
        height='76px'
        width='76px'
        borderRadius='8px'
        overflow="hidden"
      >
        <Image
          style={{ width: '100%', height: '100%'}}
          source={{ uri: imageUrl }}
          resizeMode="cover"
        />
      </Box>
      <Box ml='16px' mt='10px'>
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