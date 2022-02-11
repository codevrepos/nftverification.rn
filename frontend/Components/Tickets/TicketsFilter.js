import React, { useContext } from 'react';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box'
import text from '../../theme/text';
import colors from '../../theme/colors';
import Select from '../Buttons/Select';
import Button from '../Buttons/Button';
import { ScrollView } from 'react-native';
import { ModalContext } from '../../providers/ModalProvider';

const TicketsFilter = (props) => {
  const { height } = props;
  const { filter, setFilter } = useContext(ModalContext);

  return (
    <Box height={height-100} m='16px' display='flex' flexDirection='column' justifyContent='space-between'>
      <Typography
        {...text.headline_semibold_18_18}
        color={colors.neutral_900}
      >Sort by Collection</Typography>
      <ScrollView>
        <Box mt='24px' flexDirection='row' flexWrap='wrap'>
          <Select isSelected={filter} onPress={() => setFilter(!filter)}>Test</Select>
          <Select isSelected={filter} onPress={() => setFilter(!filter)}>Test</Select>
          <Select isSelected={filter} onPress={() => setFilter(!filter)}>Test</Select>
          <Select isSelected={filter} onPress={() => setFilter(!filter)}>Test</Select>
          <Select isSelected={filter} onPress={() => setFilter(!filter)}>Test</Select>
          <Select isSelected={filter} onPress={() => setFilter(!filter)}>Test</Select>
          <Select isSelected={filter} onPress={() => setFilter(!filter)}>Test</Select>
          <Select isSelected={filter} onPress={() => setFilter(!filter)}>Test</Select>
          <Select>All</Select>
        </Box>
      </ScrollView>
      <Box mt='16px'>
        <Button>Apply</Button>
      </Box>
    </Box>
  )
}

export default TicketsFilter;