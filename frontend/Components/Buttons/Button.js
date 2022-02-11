import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import text from '../../theme/text';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';

const Button = (props) => {
  const { children, width } = props;

  return (
    <Box
      as={TouchableOpacity}
      width={width}
      backgroundColor={colors.info_500}
      p='12px'
      borderRadius='8px'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Typography
        // textAlign='center'
        {...text.body_medium_14_14}
        color='white'
      >
        {children}
      </Typography>
    </Box>
  )
}

export default Button;