import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import text from '../../theme/text';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';

const Select = (props) => {
  const { isSelected, children, onPress } = props;
  return (
    <Box
      as={TouchableOpacity}
      p='10px'
      borderRadius='6px'
      mr='8px'
      mb='8px'
      border={1}
      backgroundColor={isSelected ? colors.info_50 : 'white'}
      borderColor={isSelected ? colors.info_200 : colors.neutral_200}
      onPress={() => onPress()}
    >
      <Typography
        {...text.body_medium_14_14}
        color={isSelected ? colors.info_500 : colors.neutral_900}
        >{children}</Typography>
    </Box>
  )
}

export default Select;