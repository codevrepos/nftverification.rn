import React, { useState } from 'react';
import { SafeAreaView, FlatList, Alert } from 'react-native';
import { Box } from '../Box/Box';
import colors from '../../theme/colors';
import Ticket from './Ticket';
import Modal from '../Modal/Modal';
import { Typography } from '../Typography/Typography';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TicketsScreen = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const renderItem = ({ item, index }) => {
    return (
      <Ticket
        key={index}
        collection={item.collection}
        name={item.name}
        tokenId={item.tokenId}
        imageUrl={item.imageUrl}
        {...props}
      />
    )
  }

  // TODO: replace with API data
  const data = [
    {imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png', collection: "Bored Ape Yacht Club", name: "#1", tokenId: 1},
    {imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png', collection: "Bored Ape Yacht Club", name: "#2", tokenId: 2},
    {imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png', collection: "Bored Ape Yacht Club", name: "#3", tokenId: 3}
  ];

  return (
    <Box as={SafeAreaView} backgroundColor={colors.neutral_50} pt='10px' height='100%'>
      <Box as={TouchableOpacity} onPress={() => setIsVisible(true)}>
        <Typography>Open Modal</Typography>
      </Box>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />
      <Modal isVisible={isVisible} toggle={() => setIsVisible(false)}>
        <Box backgroundColor='white'>
          <Typography>Sort by Collection</Typography>
            <Box as={TouchableOpacity} onPress={() => setIsVisible(false)}>
          <Typography>Close Modal</Typography>
        </Box>
        </Box>
        
      </Modal>
    </Box>
  )
}

export default TicketsScreen;