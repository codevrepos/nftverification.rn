import React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightChevron = (props) => {
  const { color } = props;
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.36816 16.6094L6.78223 16.0527C6.66504 15.9063 6.66504 15.6719 6.78223 15.5547L12.0849 10.2227L6.78223 4.91993C6.66504 4.80273 6.66504 4.56836 6.78223 4.42188L7.36816 3.86523C7.51465 3.71875 7.71973 3.71875 7.86621 3.86523L14.0185 9.98828C14.1358 10.1348 14.1358 10.3399 14.0185 10.4864L7.86621 16.6094C7.71973 16.7559 7.51465 16.7559 7.36816 16.6094Z" fill={color}/>
    </Svg>
  )
}

export default RightChevron;



