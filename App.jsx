import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Async storage for managing user authentication state
import HomeScreen from './screens/HomeScreen';
import PlayToEarnScreen from './screens/PlayToEarnScreen';
import GameScreen from './screens/GameScreen';
import BuyNFTScreen from './screens/BuyNFTScreen'; 
import WinnerScreen from './screens/WinnerScreen'; 
import YoureDeadScreen from './screens/YoureDeadScreen'; 
import DonateScreen from './screens/DonateScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OTPScreen from './screens/OTPScreen'; // Import OTP Screen
import ResetPasswordScreen from './screens/ResetPasswoardScreen'; // Import Reset Password Screen

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track if user is authenticated

  // Check authentication status when the app loads
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken'); // Retrieve auth token from storage
        setIsAuthenticated(!!token); // Set authentication status based on presence of token
      } catch (error) {
        console.error('Error fetching auth token', error);
      }
    };
    checkAuthStatus();
  }, []);

  // Function to handle user login
  const handleLogin = async (token) => {
    await AsyncStorage.setItem('authToken', token); // Save token in storage
    setIsAuthenticated(true); // Update state to authenticated
  };

  // Function to handle user logout
  const handleLogout = async () => {
    await AsyncStorage.removeItem('authToken'); // Remove token from storage
    setIsAuthenticated(false); // Update state to unauthenticated
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "HomeScreen" : "SignIn"}>
        {isAuthenticated ? (
          <>
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Donate" 
              component={DonateScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="PlayToEarn" 
              component={PlayToEarnScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Game" 
              component={GameScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="BuyNFT" 
              component={BuyNFTScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="WinnerScreen" 
              component={WinnerScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="YoureDeadScreen" 
              component={YoureDeadScreen} 
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen 
              name="SignIn" 
              component={SignInScreen} 
              options={{ headerShown: false }}
              initialParams={{ onLogin: handleLogin }} // Pass handleLogin function to SignIn screen
            />
             <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="SignUp" 
              component={SignUpScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="ForgotPasswordScreen" 
              component={ForgotPasswordScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="OTPScreen" 
              component={OTPScreen} // Add OTP Screen
              options={{ headerShown: false }}
            />

            <Stack.Screen 
              name="ResetPasswordScreen" 
              component={ResetPasswordScreen} // Add Reset Password Screen
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
