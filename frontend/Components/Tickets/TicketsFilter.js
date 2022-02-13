import React, { useContext, useState } from 'react';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box'
import text from '../../theme/text';
import colors from '../../theme/colors';
import Select from '../Buttons/Select';
import Button from '../Buttons/Button';
import { ScrollView, TouchableHighlight } from 'react-native';
import { ModalContext } from '../../providers/ModalProvider';
import { dedupe } from '../../utils/dedupe';

const TicketsFilter = (props) => {
  const { closeFilter, height } = props;
  const { data, filter, setFilter } = useContext(ModalContext);
  const [selectedFilter, setSelectedFilter] = useState(filter);
  
  const dedupedFilters = dedupe('collection', data);

  const saveSelectionAndCloseModal = () => {
    setFilter(selectedFilter);
    closeFilter();
  };

  return (
    <Box height={height-100} m='16px' display='flex' flexDirection='column' justifyContent='space-between'>
      <Typography
        {...text.headline_semibold_18_18}
        color={colors.neutral_900}
        mb='8px'
      >Filter by Collection</Typography>
      {/* TODO: Fix scrolling bug */}
      <ScrollView>
        <TouchableHighlight>
          <Box onStartShouldSetResponder={() => true}>
            <Box mt='24px' flexDirection='row' flexWrap='wrap'>
              <Select isSelected={!selectedFilter} onPress={() => setSelectedFilter(undefined)}>All</Select> 
              {dedupedFilters?.map((el) => (
                <Select isSelected={selectedFilter === el} onPress={() => setSelectedFilter(el)}>{el}</Select>
              ))}
            </Box>
          </Box>
        </TouchableHighlight>
      </ScrollView>
      <Box mt='16px'>
        <Button onPress={() => saveSelectionAndCloseModal()}>Apply</Button>
      </Box>
    </Box>
  )
}

export default TicketsFilter;