import React from 'react';
import text from '../../theme/text';
import colors from '../../theme/colors';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box';

const Setting = (props) => {
  const { leftIcon, rightIcon, children } = props;

  return (
    <Box p='16px' flexDirection='row' justifyContent='space-between'>
      <Box flex={1}>
        {leftIcon}
      </Box>
      <Box flex={5} display='flex' justifyContent='center'>
        <Typography
          {...text.body_medium_14_14}
          color={colors.alert_400}
          border={1}
        >
          {children}
        </Typography>
      </Box>
      <Box flex={1} display='flex' justifyContent='center' alignItems='center'>
        {rightIcon}
      </Box>
    </Box>
  )
};

export default Setting;