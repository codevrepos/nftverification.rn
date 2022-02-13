import React from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';
import { Box } from '../../frontend/Components/Box/Box';

const Sort = () => {
  return (
    <Box>
      <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Line x1="6.11377" y1="7.73486" x2="19.2431" y2="7.73486" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
        <Line x1="8.4043" y1="11.7349" x2="16.9529" y2="11.7349" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
        <Line x1="11.1812" y1="15.7349" x2="14.1757" y2="15.7349" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      </Svg>
    </Box>
  )
}

export default Sort;