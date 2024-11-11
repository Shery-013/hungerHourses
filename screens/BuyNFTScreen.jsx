import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const BuyNFTScreen = ({ navigation }) => {
  // Function to handle purchase action
  const handlePurchase = () => {
    Alert.alert('Purchase', 'You have purchased the NFT for 5000 POL!');
    // You can add navigation or other logic here
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {/* Display NFT Image with a border */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/HH1.png')} // Change this to your image path
            style={styles.image}
          />
        </View>

        {/* Price Text */}
        <Text style={styles.price}>Price: 5000 POL</Text>

        {/* Button to confirm purchase */}
        <TouchableOpacity style={[styles.button, styles.buyButton]} onPress={handlePurchase}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>

        {/* Back to Home Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#34CD6A', // Updated background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
    paddingHorizontal: 20,
  },
  imageContainer: {
    borderWidth: 2,          // Set the border width
    borderColor: '#ffffff',  // Set the border color
    borderRadius: 10,        // Rounded corners
    overflow: 'hidden',       // Ensure the image fits within the border
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#fff',
  },
  button: {
    backgroundColor: '#ED58BE', // Default button color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginVertical: 10,
    width: 300,
    height: 50,
    justifyContent: 'center',
  },
  buyButton: {
    backgroundColor: '#F4B7DE', // Change color for Buy Now button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BuyNFTScreen;
