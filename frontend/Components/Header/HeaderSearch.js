import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';
import colors from '../../theme/colors';
import text from '../../theme/text';
import { ModalContext } from '../../providers/ModalProvider';
import Search from '../../../assets/icons/Search';
import Close from '../../../assets/icons/Close';
const { width } = Dimensions.get('window')

const HeaderSearch = (props) => {
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
            ml='12px'
            mr='6px'
            flex={1}
          >
            <Search color={colors.neutral_400} />
          </Box>
          <Box
            flexDirection='row'
            justifyContent='flex-start'
            alignItems='center'
            flex={8}
          >
            <TextInput
              background
              onChangeText={setSearch}
              value={search}
              placeholder="Search for events..."
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 14,
                color: colors.neutral_800
              }}
            />
          </Box>
          <Box
            as={TouchableOpacity}
            flex={1.2}
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            onPress={() => setSearch(undefined)}
          >
            {search?.length > 0 && <Close color={colors.neutral_400} />}
          </Box>
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

export default HeaderSearch;