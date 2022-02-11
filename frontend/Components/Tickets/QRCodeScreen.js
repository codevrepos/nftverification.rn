import React from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import colors from '../../theme/colors';
import text from '../../theme/text';
import QRCode from 'react-native-qrcode-svg';
import CustomLinearGradient from '../CustomLinearGradient/CustomLinearGradient';
// import Animated, {
//   useSharedValue,
//   useAnimatedProps,
//   withTiming,
//   Easing,
// } from 'react-native-reanimated'

// const AnimatedTypography = Animated.createAnimatedComponent(Typography);

const QRCodeScreen = (props) => {
  const { collection, name, tokenId, imageUrl } = props.route.params;
  
  // TODO: Change with real wallet address data
  const wallet = '0xf4a726c2dea3860b6fce8e9fa85d7c508441c150';
  const walletTruncated = `${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4, wallet.length)}`;
  //TODO: Animation
  // const vOffset = useSharedValue(-900)

  // const config = {
  //   duration: 1500,
  //   easing: Easing.bezier(0.5, 0.01, 0, 1),
  // }

  // const animatedProps = useAnimatedProps(() => {
  //   return {
  //     translateY: withTiming(vOffset.value, config),
  //   }
  // })

  // const animateIn = () => {
  //   vOffset.value = 0
  // }

  // useEffect(() => {
  //   animateIn()
  // }, [])

  return (
    <Box height=' 100%' backgroundColor={colors.neutral_50}>
      {/* <Typography>
        {collection}, {name}, {tokenId}
      </Typography> */}
      <Box mt='20px' mx='36px' backgroundColor='white' borderRadius='8px'>
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
          {[...Array(7)].map(el => {
            return (
              <>
                <Typography {...text.body_semibold_14_14} mx='9px' color='white'>{collection}</Typography>
                <Typography fontSize='5px' color='white'>{'\u2B24'}</Typography>
              </>
            )
          })}
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
    </Box>
  )
};

export default QRCodeScreen;


