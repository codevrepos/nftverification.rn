import React, { useState } from 'react';
import { SafeAreaView, FlatList, Alert } from 'react-native';
import { Box } from '../Box/Box';
import colors from '../../theme/colors';
import Ticket from './Ticket';
import { Typography } from '../Typography/Typography';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SwipeablePanel } from 'rn-swipeable-panel';
import TicketsFilter from './TicketsFilter';

const TicketsScreen = (props) => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    onlySmall: true,
    closeOnTouchOutside: true,
    scrollViewProps: {
      scrollEnabled: false
    },
    style: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    barStyle: {
      width: 56,
      height: 4,
      color: colors.neutral_200,
      marginTop: 12
    },
    smallPanelHeight: 250
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
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
      <TouchableOpacity onPress={() => openPanel()}>
        <Typography>Testing</Typography>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <TicketsFilter />
      </SwipeablePanel>
    </Box>
  )
}

export default TicketsScreen;