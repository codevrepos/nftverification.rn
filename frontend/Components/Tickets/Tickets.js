import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'twrnc';
import { Box } from '../Box/Box';

const Tickets = () => {
  return (
    <SafeAreaView>
      <Box
        border={1}
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
            <Text>Bored Ape Yacht Club</Text>
          </Box>
          <Box>
            <Text>#8179</Text>
          </Box>
          <Box>
            <Text>Token ID: 4671</Text>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Tickets;