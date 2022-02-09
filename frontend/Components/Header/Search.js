import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Box } from '../Box/Box';

const Search = () => {
  return (
    <Box>
      <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M20.8418 20.6484L16.9868 16.7866L20.8418 20.6484ZM19.1231 11.6255C19.1231 13.5627 18.3536 15.4206 16.9838 16.7904C15.6139 18.1602 13.7561 18.9298 11.8189 18.9298C9.88168 18.9298 8.02382 18.1602 6.65401 16.7904C5.2842 15.4206 4.51465 13.5627 4.51465 11.6255C4.51465 9.68832 5.2842 7.83046 6.65401 6.46065C8.02382 5.09084 9.88168 4.32129 11.8189 4.32129C13.7561 4.32129 15.6139 5.09084 16.9838 6.46065C18.3536 7.83046 19.1231 9.68832 19.1231 11.6255V11.6255Z" stroke="#363636" stroke-width="1.5" stroke-linecap="round"/>
      </Svg>
    </Box>
  )
}

export default Search;