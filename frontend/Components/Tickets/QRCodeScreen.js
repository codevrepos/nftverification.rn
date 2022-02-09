import React from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import colors from '../../theme/colors';
import text from '../../theme/text';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = (props) => {
  const { collection, name, tokenId, imageUrl } = props.route.params;
  // TODO: Change with real wallet address data
  const wallet = '0xf4a726c2dea3860b6fce8e9fa85d7c508441c150';
  const walletTruncated = `${wallet.substring(0, 6)}...${wallet.substring(wallet.length - 4, wallet.length)}`;

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
            value="Just some string value"
            size={220}
            logo={imageUrl}
            logoSize={60}
            logoBorderRadius={8}
          />
        </Box>
        {/* TODO: overflow='hidden' once animation is complete */}
        {/* TODO: Add background SVG image https://stackoverflow.com/questions/32027965/does-react-native-styles-support-gradients */}
        <Box mt='45px' height='35px' width='100%' border='1px' display="flex" flexDirection="row" alignItems='center'>
          {[...Array(7)].map(el => {
            return (
              <>
              <Typography {...text.body_semibold_14_14} mx='9px'>{collection}</Typography>
              <Typography fontSize='5px'>{'\u2B24'}</Typography>
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