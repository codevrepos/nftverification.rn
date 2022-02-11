import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import text from '../../theme/text';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import Setting from '../Buttons/Setting';
import Exit from '../../../assets/icons/Exit';
import RightChevron from '../../../assets/icons/RightChevron';

const Settings = () => {
  return (
    <Box as={SafeAreaView} backgroundColor={colors.neutral_50} pt='10px' height='100%'>
      <Typography {...text.headline_semibold_16_16} color='black' textAlign='center'>
        Settings
      </Typography>
      <Box as={TouchableOpacity} mt='40px' mx='16px' backgroundColor='white' borderRadius='8px' onPress={() => console.log('Logout')}>
        <Setting leftIcon={<Exit color={colors.alert_400} />} rightIcon={<RightChevron color={colors.neutral_500} />}>
          Logout
        </Setting>
      </Box>
    </Box>
  )
}

export default Settings;