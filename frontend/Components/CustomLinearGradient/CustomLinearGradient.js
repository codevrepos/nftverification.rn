import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import Gradient from 'react-native-linear-gradient'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

const CustomLinearGradient = (props) => {
  const {color1, color2, height} = props;
  return (
    <Gradient style={{height: height}} 
      colors={ [color1, color2] }
      start={{ x: 0, y: 0}}
      end={{ x:1, y: 1}}
      locations={[0.18, 1, 1]}>
      <Svg
          height={height}
          width={width}
          viewBox="0 0 1440 320"
          style={{ position: 'relative', top: height * .069 }}
        >
        <Defs>
        <LinearGradient id="path" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={color1} stopOpacity="1" />
            <Stop offset="1" stopColor={color2} stopOpacity="1" />
          </LinearGradient>
        </Defs>
          <Path fill="url(#path)"
            d="M0,96L48,133.3C96,171,192,245,288,229.3C384,213,480,107,576,74.7C672,43,768,85,864,133.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
      </Svg>
    </Gradient>
  )
}

export default CustomLinearGradient;