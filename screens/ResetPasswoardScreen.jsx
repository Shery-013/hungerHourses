import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ResetPasswordScreen = ({ route, navigation }) => {
  // const { email } = route.params;
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // const handlePasswordReset = async () => {
  //   if (newPassword !== confirmPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   try {
  //     const response = await axios.post('http://localhost:5000/api/auth/reset-password', {
  //       email,
  //       newPassword,
  //       confirmPassword,
  //     });

  //     if (response.data.message === 'Password reset successfully') {
  //       setSuccess('Password has been reset successfully!');
  //       setError('');
  //       navigation.navigate('Login'); // Redirect to login screen
  //     }
  //   } catch (err) {
  //     setError('Something went wrong. Please try again.');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Your Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Submite</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      {success && <Text style={styles.success}>{success}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#BAACCD',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
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
  error: {
    color: 'red',
    marginTop: 10,
  },
  success: {
    color: 'green',
    marginTop: 10,
  },
});

export default ResetPasswordScreen;
