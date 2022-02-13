import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, Easing, withTiming, withRepeat } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Box } from '../Box/Box';
import colors from '../../theme/colors';

const PULSE_WIDTH = 150;

const Shimmer = (props) => {
  const pulse = useSharedValue(-PULSE_WIDTH);
  useEffect(() => {
    pulse.value = withRepeat(withTiming(500, { duration: 4000, easing: Easing.bezier(0, 0, 1, 1) }), -1, false, null);
  }, []);

  const pulseAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: pulse.value,  
    };
  });

  return (
    <Box
      {...props}
      overflow='hidden'
    >
      <Box as={Animated.View} position='absolute' borderRadius='4px' width={`${PULSE_WIDTH}px`} height='100%' style={pulseAnimatedStyle}>
        <Box flex={1} as={LinearGradient}
          colors={[colors.neutral_100, 'white', colors.neutral_100]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </Box>
    </Box>
  );
};

export default Shimmer;