import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box';
import colors from '../../theme/colors';
import Wallet from '../../../assets/icons/Wallet';
import text from '../../theme/text';
import MetaMask from '../../../assets/icons/MetaMask';
const Coinbase =  require('../../../assets/image/coinbase.png');
const TrustWallet = require('../../../assets/image/trustwallet.png');
import WalletConnectLogo from '../../WalletConnect/components/WalletConnectLogo';

import {
  useMoralis,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from 'react-moralis';
import { useWalletConnect } from '../../WalletConnect';

const GenerateIcon = (props) => {
  const { image } = props;
  return (
    <Box
      border={1}
      borderColor={colors.neutral_200}
      backgroundColor='white'
      width={25}
      height={25}
      borderRadius={12.5}
      overflow='hidden'
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
      ml='3px'
    >
      <Image source={image} style={{width: 20, height: 20, borderRadius: 12 }} />
    </Box>
  )
}

const WalletButton = (props) => {
  const { name, icon, loading, last, onPress } = props;
  return (
    <Box
      as={TouchableOpacity}
      flexDirection='row'
      borderBottomWidth={!!last ? 0 : 1}
      borderColor={colors.neutral_200}
      p='14px'
      onPress={() => onPress()}
    >
      <Box flex={1} flexDirection='row' justifyContent='flex-start' alignItems='center' >
        {icon}
      </Box>
      <Box flex={5} flexDirection='row' justifyContent='flex-start' alignItems='center'>
        <Typography>{name}</Typography>
      </Box>
      <Box flex={1} flexDirection='row' justifyContent='flex-end' alignItems='center' >
        {loading && <ActivityIndicator />}
      </Box>
    </Box>
  )
}

const LoginScreen = () => {
  const connector = useWalletConnect();
  const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();

  const onPressWalletConnect = () => {
    authenticate({ connector })
      .then(() => {
        if (authError) {
          Alert.alert(`authError: ${authError}`);
        } else {
          if (isAuthenticated) {
            Alert.alert(`isAuthenticated: ${isAuthenticated}`);
            navigation.replace("DrawerNavigationRoutes");
          }
        }
      })
      .catch(() => {});
  }

  return (
    <Box as={SafeAreaView} backgroundColor={colors.neutral_50} height='100%'>
      <Typography mt='25px' textAlign='center'>LOGO PASS</Typography>

      <Box mt='100px' mx='30px'>
        <Box ml='auto' mr='auto'>
          <Wallet />
        </Box>
        <Box mt='26px'>
          <Typography {...text.headline_medium_18_18} textAlign='center'>Connect Wallet</Typography>
        </Box>
        <Box mt='26px'>
          <Typography {...text.body_medium_14_14} color={colors.neutral_600} lineHeight='25px' textAlign='center'>
            Please login with your wallets to access your NFTs/ Tickets.
          </Typography>
        </Box>
      </Box>

      <Box mt='36px' border={1} mx='36px' borderRadius='8px' borderColor={colors.neutral_200} overflow='hidden'>
        {/* <WalletButton
          icon={<MetaMask />}
          name='MetaMask'
          loading={false}
          onPress={() => {
            authenticate({ provider: "metamask" });
          }}
        />
        <WalletButton
          icon={<GenerateIcon image={require('../../../assets/image/trustwallet.png')} />}
          name='TrustWallet'
          loading={false}
          onPress={() => console.log('Trust Wallet')}
        />
        <WalletButton
          icon={<GenerateIcon image={require('../../../assets/image/coinbase.png')} />}
          name='Coinbase'
          loading={false}
          onPress={() => console.log('Coinbase')}
        /> */}
        <WalletButton
          icon={null}
          name='Other wallets'
          loading={false}
          onPress={onPressWalletConnect}
          // if last, don't show bottom border
          last
        />
      </Box>
    </Box>
  )
};

export default LoginScreen;