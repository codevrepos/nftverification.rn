import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  Image,
} from 'react-native';
import BottomModal from '../../Components/Modals/BottomModal';
import {Typography} from '../Typography/Typography';
import {Box} from '../Box/Box';

function ScannerModal(props) {
  const documentIcon = require('../../../assets/image/document.png');
  const closeIcon = require('../../../assets/image/closeIconDark.png');
  const [smartContractInput, setSmartContractInput] = useState('');
  const [isContractValid, setIsContractValid] = useState(false);
  const [recentContracts, setRecentContracts] = useState([
    {address: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B'},
    {address: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B'},
    {address: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B'},
  ]);
  return (
    <BottomModal
      isVisible={props.isCameraTabModalOpen}
      height={undefined}
      closeModal={() => props.setIsCameraTabModalOpen(false)}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalHeader}>Smart Contract</Text>
        <Text style={styles.modalDescription}>
          We need smart contract in order to provide relevant information
          regarding tickets
        </Text>
        <View style={styles.contractInputContainer}>
          <TextInput
            style={styles.contractInput}
            placeholder={'Add smart contract'}
            value={smartContractInput}
            onChangeText={value => {
              const condition = new RegExp('^0x[a-fA-F0-9]{40}$');
              const valid = condition.test(value);
              if (valid) {
                setIsContractValid(true);
                setSmartContractInput(value);
              } else {
                setIsContractValid(false);
                setSmartContractInput(value);
              }
            }}
          />
          <Text style={styles.contractInputIcon}>+</Text>
        </View>
        {!isContractValid && smartContractInput ? (
          <Text style={styles.invalidWarning}>Invalid contract address</Text>
        ) : null}
        {recentContracts && (
          <View style={styles.recentContractsContainer}>
            <Text style={styles.recentlyUsedHeader}>Recently used: </Text>
            {recentContracts.map(contract => (
              <TouchableOpacity
                style={styles.recentContract}
                onPress={() => {
                  setSmartContractInput(contract.address);
                  setIsContractValid(true);
                }}>
                <Image
                  style={styles.recentContractIcon}
                  source={documentIcon}
                />
                <Text style={styles.recentContractAddress} numberOfLines={1}>
                  {contract.address}
                </Text>
                <Image style={styles.recentContractRemove} source={closeIcon} />
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TouchableOpacity
          style={{...styles.confirmButton, opacity: isContractValid ? 1 : 0.5}}
          onPress={() => null}
          disabled={!isContractValid}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 16,
    marginTop: 0,
  },
  modalHeader: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  modalDescription: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 24,
  },
  contractInputContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  contractInput: {
    height: 44,
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 'bold',
    padding: 8,
    paddingLeft: 44,
  },
  contractInputIcon: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 28,
    height: 28,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#fff',
    lineHeight: 28,
    borderRadius: 8,
  },
  invalidWarning: {
    color: 'red',
    fontWeight: 'bold',
  },
  recentlyUsedHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 12,
  },
  recentContractsContainer: {
    flexDirection: 'column',
    marginBottom: 12,
  },
  recentContract: {
    flexDirection: 'row',
    padding: 17,
    borderColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  recentContractIcon: {
    marginRight: 13,
  },
  recentContractAddress: {
    flex: 1,
    textAlignVertical: 'center',
    color: '#000',
  },
  recentContractRemove: {
    resizeMode: 'contain',
    marginLeft: 10,
  },
  confirmButton: {
    backgroundColor: '#41A8F2',
    width: '100%',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ScannerModal;
