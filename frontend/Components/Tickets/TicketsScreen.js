import React, { useContext, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Box } from '../Box/Box';
import colors from '../../theme/colors';
import Ticket from './Ticket';
import { ModalContext } from '../../providers/ModalProvider';
import { Typography } from '../Typography/Typography';
import text from '../../theme/text';

const NoResults = (props) => {
  const { search } = props;

  return (
    <Box height='100%' flexDirection='row' justifyContent='center' alignItems='center'>
      <Box mx='16px'>
          <Typography textAlign='center' fontSize='30px'>😓</Typography>
          <Typography
            {...text.headline_medium_18_18} color={colors.neutral_700}
            textAlign='center'
            mt='16px'>No Results</Typography>
          <Typography
            {...text.body_medium_14_14} color={colors.neutral_500}
            textAlign='center'
            mt='16px'
            lineHeight='25px'
          >
            {`There were no results for "${search}".`}
          </Typography>
          <Typography
            {...text.body_medium_14_14}
            color={colors.neutral_500}
            textAlign='center'
            lineHeight='25px'
          >
            Try a new search.
          </Typography>
      </Box>
    </Box>
  )
}

const TicketsScreen = (props) => {
  const { data, filter, search } = useContext(ModalContext);

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

  useEffect(() => {
    console.log(filter);
  }, [filter])

  const filteredData = !!filter ? data.filter(el => el.collection === filter) : data;
  console.log(filteredData);
  console.log(`filter ${filter}`);

  const searchData = filteredData.filter(el => {
    const collectionLowerCase = el.collection?.toLowerCase();
    const nameLowerCase = el.name?.toLowerCase();
    const searchLowerCase = search?.toLowerCase();

    const collectionFoundIndex = collectionLowerCase.search(searchLowerCase);
    const nameFoundIndex = nameLowerCase.search(searchLowerCase);

    if(collectionFoundIndex > -1 || nameFoundIndex > -1) {
      return el;
    }
  });

  return (
    <Box as={SafeAreaView} backgroundColor={colors.neutral_50} pt='10px' height='100%'>
      <FlatList
        data={!!search ? searchData : filteredData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
      />

      {filteredData?.length === 0 && <NoResults search={search}/>}
    </Box>
  )
}

export default TicketsScreen;