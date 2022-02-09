import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Box } from '../Box/Box';
import colors from '../theme/colors';
import text from '../theme/text.js';
import { Typography } from '../Typography/Typography';

const Tickets = () => {
  return (
    <SafeAreaView>
      <Box
        border={1}
        borderColor={colors.neutral_200}
        borderRadius='8px'
        mx='16px'
        p='16px'
        display='flex'
        flexDirection='row'
      >
        <Box
          border={1}
          height='76px'
          width='76px'
          borderRadius='16px'
        />
        <Box border={1} ml='16px'>
          <Box>
            <Typography {...text.body_semibold_14_14}>Bored Ape Yacht Club</Typography>
          </Box>
          <Box>
            <Typography {...text.body_semibold_14_14}>#8179</Typography>
          </Box>
          <Box>
            <Typography {...text.caption_medium_12_12}>Token ID: 4671</Typography>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Tickets;