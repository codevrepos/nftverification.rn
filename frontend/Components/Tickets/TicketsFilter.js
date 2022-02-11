import React, { useEffect } from 'react';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box'
import text from '../../theme/text';
import colors from '../../theme/colors';
import Select from '../Buttons/Select';
import Button from '../Buttons/Button';
import { ScrollView } from 'react-native';

const TicketsFilter = (props) => {
  const { height } = props;
  return (
    <Box height={height-100} m='16px' display='flex' flexDirection='column' justifyContent='space-between'>
      <Typography
        {...text.headline_semibold_18_18}
        color={colors.neutral_900}
      >Sort by Collection</Typography>
      <ScrollView>
        <Box mt='24px' flexDirection='row' flexWrap='wrap'>
          <Select>Test</Select>
          <Select>Test</Select>
          <Select>Test</Select>
          <Select>Test</Select>
          <Select>Test</Select>
          <Select>Test</Select>
          <Select>Test</Select>
          <Select>Test</Select>
          <Select>Test</Select>
          <Select isSelected>All</Select>
        </Box>
      </ScrollView>
      <Box mt='16px'>
        <Button>Apply</Button>
      </Box>
    </Box>
  )
}

export default TicketsFilter;