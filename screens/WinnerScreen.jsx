import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WinnerScreen = () => {
  const navigation = useNavigation();

  const handleAdWatch = () => {
    // Logic to show ad would go here
    Alert.alert('Instelar Ad', 'Ad watching logic goes here.');
    navigation.navigate('PlayToEarn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.message}>You've won!</Text>

      <TouchableOpacity style={styles.button} onPress={handleAdWatch}>
        <Text style={styles.buttonText}>Watch an Ads to continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BAACCD', // Background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4948A6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WinnerScreen;