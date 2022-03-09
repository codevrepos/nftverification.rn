import React, {Component, useCallback, useState} from 'react';

import {
  StyleSheet,
  Linking,
  View,
  Dimensions,
  StatusBar,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {useFocusEffect} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';

const Camera = props => {
  const closeIcon = require('../../../assets/image/closeIcon.png');
  const flashOnIcon = require('../../../assets/image/flashOnIcon.png');
  const flashOffIcon = require('../../../assets/image/flashOffIcon.png');
  const squareSize = Dimensions.get('window').width * 0.8;
  const topBottomHeight =
    (Dimensions.get('window').height -
      (!Platform.isPad ? 29 : 49) -
      squareSize) /
    2;
  const leftRightWidth = (Dimensions.get('window').width - squareSize) / 2;

  const [flashState, setFlashState] = useState(false);

  console.log(topBottomHeight);
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }, []),
  );
  const onSuccess = e => {
    console.log(e.data);
  };

  const marker = (
    <View style={styles.markerOuter}>
      <View style={{...styles.markerInnerTop, height: topBottomHeight}} />
      <View style={styles.markerInnerMiddle}>
        <View
          style={[
            styles.markerInnerLeft,
            {height: squareSize, width: leftRightWidth},
          ]}
        />
        <View style={styles.markerTransparent}>
          <View style={styles.borderSquareTop} />
          <View style={styles.borderSquareBottom} />
        </View>
        <View
          style={[
            styles.markerInnerRight,
            {height: squareSize, width: leftRightWidth},
          ]}
        />
      </View>
      <View style={[styles.markerInnerBottom, {height: topBottomHeight}]} />
    </View>
  );
  return (
    <View style={styles.scannerWrapper}>
      <QRCodeScanner
        onRead={onSuccess}
        topContent={null}
        bottomContent={null}
        cameraStyle={{height: '100%', width: '100%'}}
        showMarker={true}
        reactivate={true}
        flashMode={
          flashState
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        customMarker={marker}
      />
      <View style={styles.topElements}>
        <View style={styles.closeIcon}>
          <Image source={closeIcon} style={styles.icon} />
        </View>
        <View style={styles.topText}>
          <Text style={styles.topTextBig}>Scan QR-Сode</Text>
          <Text style={styles.topTextSmall}>
            Hover over the QR code you want to scan
          </Text>
        </View>
        <TouchableOpacity
          style={styles.flashToggle}
          onPress={() => setFlashState(!flashState)}>
          <Image
            source={flashState ? flashOnIcon : flashOffIcon}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scannerWrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  markerOuter: {
    position: 'absolute',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  markerInnerMiddle: {
    flexDirection: 'row',
  },
  markerInnerBottom: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
  },
  markerInnerTop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
  },
  markerInnerLeft: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  markerInnerRight: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  markerTransparent: {
    position: 'relative',
    flex: 1,
  },
  borderSquareTop: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: -2,
    left: -2,
    borderTopColor: 'white',
    borderTopWidth: 3,
    borderLeftColor: 'white',
    borderLeftWidth: 3,
    zIndex: 2,
  },
  borderSquareBottom: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: -2,
    right: -2,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    borderRightColor: 'white',
    borderRightWidth: 3,
    zIndex: 2,
  },
  topElements: {
    position: 'absolute',
    top: StatusBar.currentHeight,
    width: '100%',
    height: 200,
    flexDirection: 'row',
    zIndex: 2,
    paddingTop: 40,
  },
  closeIcon: {
    width: '15%',
    alignItems: 'center',
  },
  topText: {
    flex: 1,
    height: 40,
    flexDirection: 'column',
  },
  topTextBig: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  topTextSmall: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  flashToggle: {
    width: '15%',
    alignItems: 'center',
  },
  icon: {
    transform: [
      {
        scale: 1.5,
      },
    ],
  },
});

export default Camera;
