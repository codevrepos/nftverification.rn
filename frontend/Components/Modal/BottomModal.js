import React from 'react';
import Modal from 'react-native-modal';
import { Box } from '../Box/Box';

const BottomModal = (props) => {
  const { isVisible, height, closeModal, children } = props;

  return (
    <Modal
        isVisible={isVisible}
        onSwipeComplete={closeModal}
        onBackdropPress={closeModal}
        useNativeDriverForBackdrop
        swipeDirection={['down']}
        style={{ margin: 0 }}
      >
        <Box
          backgroundColor='white'
          position='absolute'
          bottom={0}
          height={height}
          width='100%'
          borderTopLeftRadius={12}
          borderTopRightRadius={12}
        >
          {children}
        </Box>
      </Modal>

  )
}

export default BottomModal;