import React, { useEffect } from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import colors from '../../theme/colors';
import text from '../../theme/text';
import QRCode from 'react-native-qrcode-svg';
import CustomLinearGradient from '../CustomLinearGradient/CustomLinearGradient';
import Shimmer from '../Shimmer/Shimmer';
import Animated, { useSharedValue, useAnimatedStyle, Easing, withTiming, withSequence, withRepeat } from 'react-native-reanimated';

export const QRCodeScreenLoading = (props) => {
  return (
    <Box height=' 100%' backgroundColor={colors.neutral_50}>
      <Box mt='20px' mx='36px' backgroundColor='white' borderRadius='8px' borderRadius='8px'>
        <Shimmer mt='24px' width='196px' height='14px' backgroundColor={colors.neutral_100} ml='auto' mr='auto' borderRadius='2px' />
        <Shimmer top='24px' borderRadius='8px' width='256px' height='256px' ml='auto' mr='auto' backgroundColor={colors.neutral_100} />
        <Shimmer
          mt='45px'
          height='35px'
          width='100%'
          backgroundColor={colors.neutral_100}
        />
        <Box
          mx='24px'
          mt='15px'
          mb='24px'
        >
          <Shimmer width='160px' height='24px' borderRadius='4px' backgroundColor={colors.neutral_100} />
          <Shimmer width='125px' height='14px' borderRadius='2px' mt='12px' backgroundColor={colors.neutral_100}/>
          <Shimmer width='175px' height='14px' borderRadius='2px' mt='12px' backgroundColor={colors.neutral_100}/>
      </Box>
      </Box>
      <Box
        mt='24px'
        p='10px'
        border={1}
        borderColor={colors.neutral_200}
        backgroundColor='white'
        borderRadius='8px'
        ml='auto'
        mr='auto'
      >
        <Shimmer width='262px' height='14px' borderRadius='2px' backgroundColor={colors.neutral_100}/>
      </Box>
    </Box>
  )
};

export const QRCodeScreen = (props) => {
  const { collection, name, tokenId, imageUrl } = props.route.params;

  const TRANSLATE_X_DURATION = 90000;
  const PAUSE_DURATION = 5000;
  const offset = useSharedValue(-500);

  useEffect(() => {
    offset.value = withRepeat(
      withSequence(
        withTiming(0, { duration: TRANSLATE_X_DURATION, easing: Easing.bezier(0, 0, 1, 1) }),
        withTiming(0, { duration: PAUSE_DURATION, easing: Easing.bezier(0, 0, 1, 1) }),
        withTiming(-500, { duration: TRANSLATE_X_DURATION, easing: Easing.bezier(0, 0, 1, 1) }),
        withTiming(-500, { duration: PAUSE_DURATION, easing: Easing.bezier(0, 0, 1, 1) }),
      ),
      -1,
      true,
      null
    )
  }, []);

  const offsetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  // TODO: Change with real wallet address data
  const wallet = '0xf4a726c2dea3860b6fce8e9fa85d7c508441c150';
  const walletTruncated = `${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4, wallet.length)}`;

  return (
    <Box height=' 100%' backgroundColor={colors.neutral_50}>
      <Box mt='20px' mx='36px' backgroundColor='white' borderRadius='8px' borderRadius='8px'>
        <Typography
          mt='24px'
          textAlign='center'
          {...text.body_semibold_14_14}
          color={colors.neutral_800}
        >
          QR-Code is valid for 1 minute
        </Typography>
        <Box ml='auto' mr='auto' top='24px' borderRadius='8px' overflow='hidden'>
          <QRCode
            value='Just some string value'
            size={220}
            logo={imageUrl}
            logoSize={60}
            logoBorderRadius={8}
          />
        </Box>
        <Box
          mt='45px'
          height='35px'
          width='100%'
          display='flex'
          flexDirection='row'
          alignItems='center'
          overflow='hidden'
        >
          <Box position={'absolute'} >
            <CustomLinearGradient color1='#1890D3' color2='#2F69C0' height={35} />
          </Box>
          <Box as={Animated.View} width='100%' flexDirection='row' style={offsetStyle}>
            {[...Array(20)].map(el => {
              return (
                <Box flexDirection='row' justifyContent='center' alignItems='center'>
                  <Typography {...text.body_semibold_14_14} mx='9px' color='white'>{collection}</Typography>
                  <Typography fontSize='5px' color='white'>{'\u2B24'}</Typography>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Box mx='24px' mt='15px' mb='24px'>
          <Typography
            {...text.headline_semibold_24_24}
            color={colors.neutral_800}
          >
            {name}
          </Typography>
          <Typography
            {...text.body_medium_14_14}
            color={colors.neutral_500}
            mt='12px'
          >
            Token ID: {tokenId}
          </Typography>
          <Typography
            {...text.body_medium_14_14}
            color={colors.neutral_800}
            mt='12px'
          >
            Wallet address: {walletTruncated}
          </Typography>
        </Box>
      </Box>
      <Box
        mt='24px'
        p='10px'
        border={1}
        borderColor={colors.neutral_200}
        backgroundColor='white'
        borderRadius='8px'
        marginLeft='46px'
        marginRight='46px'
      >
        <Typography
          textAlign='center'
          {...text.body_medium_14_14}
          color='black'
        >
          Last update 04 February 2022 at 13:59
        </Typography>
      </Box>
    </Box>
  )
};