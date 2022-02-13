import React from 'react';
import colors from '../../theme/colors';
import text from '../../theme/text';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';

// TODO: Use Toast in this way
// Toast.show({
//   type: 'warning_custom' (ex. 'success_custom' or 'failure_custom')
//   text1: 'This is an info message'
// });

export const toastConfig = {
  warning_custom: ({ text1 }) => (
    <ToastCustom
      text1={text1}
      textColor={'black'}
      backgroundColor={colors.warning_000}
    />
  ),
  success_custom: ({ text1 }) => (
    <ToastCustom
      text1={text1}
      textColor={'white'}
      backgroundColor={'green'}
    />
  ),
  failure_custom: ({ text1 }) => (
    <ToastCustom
      text1={text1}
      textColor={'white'}
      backgroundColor={colors.alert_700}
    />
  ),
};

export const ToastCustom = (props) => {
  const { text1, textColor, backgroundColor } = props;

  return (
    <Box
      width='290px'
      height='34px'
      backgroundColor={backgroundColor}
      borderRadius='4px'
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
    >
      <Typography
        {...text.body_medium_14_14}
        color={textColor}
        p='10px'
      >{text1}</Typography>
    </Box>
  )
}
