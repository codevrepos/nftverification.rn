import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Box } from '../Box/Box';
import { TouchableOpacity } from 'react-native';

const LeftChevron = (props) => {
  return (
    <Box as={TouchableOpacity} py='10px' px='20px' ml='5px' onPress={() => props.onPress()}>
      <Svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M8.76415 0.229995L9.46735 0.897995C9.60795 1.07369 9.60795 1.35499 9.46735 1.49559L3.10405 7.89399L9.46735 14.2573C9.60795 14.398 9.60795 14.6792 9.46735 14.855L8.76415 15.523C8.58845 15.6987 8.34235 15.6987 8.16655 15.523L0.783748 8.17529C0.643048 7.99949 0.643048 7.75339 0.783748 7.57759L8.16655 0.229995C8.34235 0.0541945 8.58845 0.0541945 8.76415 0.229995Z" fill="black"/>
      </Svg>
    </Box>
  )
}

export default LeftChevron;