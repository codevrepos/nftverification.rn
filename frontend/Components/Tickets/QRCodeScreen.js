import React from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import colors from '../../theme/colors';
import text from '../../theme/text';
import QRCode from 'react-native-qrcode-svg';
import CustomLinearGradient from '../CustomLinearGradient/CustomLinearGradient';

export const QRCodeScreenLoading = (props) => {
  return (
    <Box height=' 100%' backgroundColor={colors.neutral_50}>
      <Box mt='20px' mx='36px' backgroundColor='white' borderRadius='8px' borderRadius='8px'>
        <Box mt='24px' width='196px' height='14px' backgroundColor='grey' ml='auto' mr='auto' borderRadius='2px' />
        <Box top='24px' borderRadius='8px' width='256px' height='256px' ml='auto' mr='auto' backgroundColor='grey' />
        <Box
          mt='45px'
          height='35px'
          width='100%'
          backgroundColor='grey'
        >
        </Box>
        <Box
          mx='24px'
          mt='15px'
          mb='24px'
        >
          <Box width='160px' height='24px' borderRadius='4px' backgroundColor='grey' />
          <Box width='125px' height='14px' borderRadius='2px' mt='12px' backgroundColor='grey'/>
          <Box width='175px' height='14px' borderRadius='2px' mt='12px' backgroundColor='grey'/>
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
        <Box width='262px' height='14px' borderRadius='2px' backgroundColor='grey'/>
      </Box>
    </Box>
  )
};

export const QRCodeScreen = (props) => {
  const { collection, name, tokenId, imageUrl } = props.route.params;
  
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