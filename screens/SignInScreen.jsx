import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle sign-in
  // const handleSignIn = async () => {
  //   if (!email || !password) {
  //     Alert.alert("Error", "Please fill in all fields.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch('mongodb://localhost:27017/hungerHorses/api/signin', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
      
  //     const data = await response.json();
      
  //     if (response.ok) {
  //       await AsyncStorage.setItem('authToken', data.token); // Store token
  //       navigation.navigate('Home'); // Navigate to Home on successful sign-in
  //     } else {
  //       Alert.alert("Error", data.message || "Invalid credentials");
  //     }
  //   } catch (error) {
  //     console.error("Sign In Error", error);
  //     Alert.alert("Error", "An error occurred during sign-in");
  //   }
  // };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail} // Update email state
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword} // Update password state
        />

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Go to Sign Up screen */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>

        {/* Forgot Password link */}
        <TouchableOpacity onPress={() =>navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#BAACCD',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
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
  linkText: {
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
