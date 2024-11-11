import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const HomeScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  // Exit function for Android back button
  const exitApp = () => {
    Alert.alert('Exit App', 'Do you want to exit?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Exit',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {/* Therapy Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Donate')}>
          <Text style={styles.buttonText}>Donate</Text>
        </TouchableOpacity>

        {/* Buy NFT Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BuyNFT')}>
          <Text style={styles.buttonText}>Buy NFT</Text>
        </TouchableOpacity>

        {/* Button to start playing */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlayToEarn')}>
          <Text style={styles.buttonText}>Play to Earn</Text>
        </TouchableOpacity>

        {/* Button to exit the app */}
        <TouchableOpacity style={styles.button} onPress={exitApp}>
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#BAACCD', // Updated background color
  },
  container: {
    flex: 1,
    justifyContent: 'center',    // Center content vertically
    alignItems: 'center',        // Center content horizontally
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4948A6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginVertical: 10,
    width: 300,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
