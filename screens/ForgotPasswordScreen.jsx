// Import necessary libraries  
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';  
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';  

// Define ForgotPassword screen component  
export default function ForgotPasswordScreen() {  
    const [email, setEmail] = useState('');  
    const navitagion = useNavigation();

    const handleForgotPassword = async () => {  
        try {  
            const response = await fetch('http://localhost:5000/api/auth/forgot-password', {  
                method: 'POST',  
                headers: { 'Content-Type': 'application/json' },  
                body: JSON.stringify({ email }),  
            });  

            const data = await response.json();  

            if (response.ok) {
                Alert.alert('Success', data.message);  
            } else {
                Alert.alert('Error', data.message || 'An error occurred');
            }
        } catch (error) {  
            Alert.alert('Error', error.message);  
        }  
    };  

    return (  
        <View style={styles.background}>  
            <Text style={styles.title}>Forgot Password</Text>  
            <TextInput  
                style={styles.input}  
                placeholder="Enter your email"  
                placeholderTextColor="#888"  
                value={email}  
                onChangeText={setEmail}  
                keyboardType="email-address"  
            />  

            {/* Forgot Password Button */}  
            <TouchableOpacity style={styles.button} onPress={()=>navitagion.navigate('OTPScreen')}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>  
    );  
}  

const styles = StyleSheet.create({  
    background: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#BAACCD',  
        paddingHorizontal: 20,  
    },  
    title: {  
        fontSize: 24,  
        fontWeight: 'bold',  
        color: '#fff',  
        marginBottom: 20,  
    },  
    input: {  
        backgroundColor: '#fff',  
        width: '100%',  
        height: 50,  
        borderRadius: 25,  
        paddingHorizontal: 20,  
        marginBottom: 20,  
        fontSize: 16,  
    },
    button: {
        backgroundColor: '#4948A6',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 25,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});  
