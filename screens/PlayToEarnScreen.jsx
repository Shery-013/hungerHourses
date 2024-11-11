import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayToEarnScreen = ({ navigation }) => {
  // Function to handle play action
  const handlePlay = () => {
    navigation.navigate('Game');  // Navigate to the Game screen
  };

  return (
    <View style={styles.background}>
      {/* Arrow button for "Back to Home" */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>FIND THE HIDDEN GEMS BEFORE THE CLOCK RUNS OUT!</Text>

        {/* Button to start playing */}
        <TouchableOpacity style={styles.button} onPress={handlePlay}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#BAACCD', // Updated background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',    // Center content vertically
    alignItems: 'center',        // Center content horizontally
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
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
  backButton: {
    position: 'absolute',
    top: 50,         // Position it near the top
    left: 20,        // Position it on the left
    backgroundColor: '#4948A6', // Same color as the "Start Playing" button
    padding: 10,
    borderRadius: 25,
  },
});

export default PlayToEarnScreen;
