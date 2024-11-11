import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import axios from 'axios';

const OTPScreen = ({ navigation, route }) => {
  // const { email } = route.params;
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  // const handleOTPSubmit = async () => {
  //   if (otp.length === 5) {
  //     try {
  //       const response = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
  //       if (response.data.message === 'OTP verified, proceed to reset password') {
  //         navigation.navigate('ResetPassword', { email });
  //       }
  //     } catch (err) {
  //       setError('Invalid OTP or OTP expired');
  //     }
  //   } else {
  //     setError('OTP must be 5 digits');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter 5-digit OTP"
        maxLength={5}
        keyboardType="numeric"
      />
    <TouchableOpacity 
  style={styles.button} 
  onPress={() => navigation.navigate('ResetPasswordScreen')}
>
  <Text style={styles.buttonText}>Verify OTP</Text>
</TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}
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
  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default OTPScreen;
