import React, { useContext, useEffect } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import { Dimensions } from 'react-native';
import colors from '../../theme/colors';
import text from '../../theme/text';
import { ModalContext } from '../../providers/ModalProvider';
import Search from '../Header/Search';
const { width } = Dimensions.get('window')

const HeaderModal = (props) => {
  const { search, setSearch } = useContext(ModalContext);
  const { closeSearch } = props;

  const closeAndResetSearch = () => {
    closeSearch();
    setSearch(undefined);
  };

  return (
    <Box
      position={'absolute'}
      backgroundColor={colors.neutral_50}
      width={width}
      height='45px'
      flexDirection='row'
    >
      <Box
        flex={5}
        px='16px'
        flexDirection='row'
        justifyContent='flex-start'
        alignItems='center'
        backgroundColor={colors.neutral_50}
      >
        <Box
          flexDirection='row'
          backgroundColor={colors.neutral_100}
          height='36px'
          borderRadius='8px'
          width='100%'
        >
          <Box
            flexDirection='row'
            justifyContent='flex-start'
            alignItems='center'
            mx='12px'
          >
            <Search color={colors.neutral_400} />
          </Box>
          <TextInput
            background
            onChangeText={setSearch}
            value={search}
            placeholder="Search for events..."
            width='100%'
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 14,
              color: colors.neutral_800
            }}
          />
        </Box>
      </Box>
      <Box
        as={TouchableOpacity}
        flex={1}
        pr='16px'
        flexDirection='row'
        justifyContent='flex-end'
        alignItems='center'
        onPress={() => closeAndResetSearch()}
      >
        <Typography {...text.body_medium_14_14} color={colors.info_500}>Cancel</Typography>
      </Box>
    </Box>
  )
};

export default HeaderModal;