import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Box } from '../Box/Box';
import colors from '../theme/colors';
import Ticket from './Ticket';

const TicketsScreen = (props) => {
  const renderItem = ({ item, index }) => {
    return (
      <Ticket
        key={index}
        collection={item.collection}
        name={item.name}
        tokenId={item.tokenId}
        {...props}
      />
    )
  }

  // TODO: replace with API data
  const data = [
    {collection: "Bored Ape Yacht Club", name: "#1", tokenId: 1},
    {collection: "Bored Ape Yacht Club", name: "#2", tokenId: 2},
    {collection: "Bored Ape Yacht Club", name: "#3", tokenId: 3}
  ];

  return (
    <Box as={SafeAreaView} backgroundColor={colors.neutral_50} height='100%'>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />
    </Box>
  )
}

export default TicketsScreen;