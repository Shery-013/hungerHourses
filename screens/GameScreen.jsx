import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GameScreen = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(5);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const [reward, setReward] = useState(0);
  const [level, setLevel] = useState(1); // Initialize level state

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && !isDoubleClicked) {
      // Timer has finished, add reward
      setReward(prevReward => {
        const newReward = prevReward + 1; // Add 1 to the reward

        // Check if the reward exceeds the threshold for leveling up
        if (newReward >= 15000000) {
          setLevel(prevLevel => prevLevel + 1); // Level up
        }

        return newReward;
      });
      navigation.navigate('WinnerScreen');
    }

    return () => clearInterval(interval);
  }, [timer, isDoubleClicked])

  const handleDoubleClick = () => {
    setIsDoubleClicked(true);
    navigation.navigate('YoureDeadScreen');
  };

  const handleBack = () => {
    navigation.navigate('PlayToEarn');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* First background image (bg-purple.jpg) */}
        <ImageBackground 
          source={require('../assets/HH3.png')} 
          style={styles.background}
          onTouchEnd={handleDoubleClick}
        >
          <View style={styles.extraContainer}></View>
        </ImageBackground>

        {/* Repeat the image for scrolling */}
        <ImageBackground source={require('../assets/HH2.png')} style={styles.background}>
          <View style={styles.extraContainer}></View>
        </ImageBackground>

        <ImageBackground source={require('../assets/HH2.png')} style={styles.background}>
          <View style={styles.extraContainer}></View>
        </ImageBackground>

        <ImageBackground source={require('../assets/HH2.png')} style={styles.background}>
          <View style={styles.extraContainer}></View>
        </ImageBackground>

        {/* Last image (c3.png) */}
        <ImageBackground source={require('../assets/HH2.png')} style={styles.background}>
          <View style={styles.extraContainer}></View>
        </ImageBackground>
      </ScrollView>

      {/* Fixed Info and Timer */}
      <View style={styles.infoContainer}>
        <Text style={styles.level}>Level: {level}</Text>
        <Text style={styles.backText} onPress={handleBack}>Back</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.reward}>Reward: {reward}</Text>
        <Text style={styles.username}>Username: YourName</Text>
      </View>

      {/* Steady Timer */}
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{timer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: 600, // Adjust to match screen size or desired height
    resizeMode: 'cover', // Cover the whole screen with the background image
  },
  scrollContainer: {
    flexGrow: 1,
  },
  extraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'column',  // Align items vertically
    alignItems: 'flex-start',
  },
  username: {
    fontSize: 18,
    color: '#fff',
  },
  reward: {
    fontSize: 18,
    color: '#fff',
  },
  level: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5, // Add some space between level and back text
  },
  backText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold', // Make the back text bold
  },
  timerContainer: {
    position: 'absolute',
    top: '50%', // Adjust as needed to position the timer
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 80,
    color: '#fff',
    textAlign: 'center',
  },
});

export default GameScreen;
