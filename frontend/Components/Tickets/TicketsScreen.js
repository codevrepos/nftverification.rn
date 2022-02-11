import React, { useState } from 'react';
import { SafeAreaView, FlatList, Alert } from 'react-native';
import { Box } from '../Box/Box';
import colors from '../../theme/colors';
import Ticket from './Ticket';
import { Typography } from '../Typography/Typography';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SwipeablePanel } from 'rn-swipeable-panel';
import TicketsFilter from './TicketsFilter';
import Modal from 'react-native-modal';
import BottomModal from '../Modals/BottomModal';

const TicketsScreen = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

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
      <TouchableOpacity onPress={() => openModal()}>
        <Typography>Test open modal</Typography>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />
      <BottomModal
        isVisible={isVisible}
        height={300} // TODO: Change height based on # of items or use Scrollview
        closeModal={closeModal}
      >
        <TicketsFilter height={300}/>
      </BottomModal>

    </Box>
  )
}

export default TicketsScreen;