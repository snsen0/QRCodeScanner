import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import 'react-native-get-random-values';
import '@ethersproject/shims';

const ButtonApp = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const scannerRef = useRef(null);

  const handleButtonPress = () => {
    setIsCameraOpen(true);
  };

  const handleScan = async (event: any) => {
    const { data } = event;
    setIsCameraOpen(false);
    console.log(data);
  };

  const handleCloseButtonPress = () => {
    setIsCameraOpen(false);
  };

  return (
    <View style={styles.container}>
      {isCameraOpen ? (
        <View style={styles.cameraContainer}>
          <QRCodeScanner
            onRead={handleScan}
            ref={scannerRef}
            cameraStyle={StyleSheet.absoluteFillObject}
            showMarker={true}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseButtonPress}
          >
            <Text style={styles.closeButtonText}>Kamerayı kapat</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Kamerayı Aç</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  cameraContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  closeButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    margin: 20,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ButtonApp;
