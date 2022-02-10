import React from 'react';
import { Typography } from '../Typography/Typography';

const Button = (props) => {
  const { children, width } = props;

  return (
    <Box width={width}>
      <Typography>
        {children}
      </Typography>
    </Box>
  )
}

export default Button;