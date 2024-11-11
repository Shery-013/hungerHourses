import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';

// Functional component to display a waving animation
export function HelloWave() {
  // Shared value to control rotation animation
  const rotationAnimation = useSharedValue(0);

  // Configure the repeating sequence for the rotation animation
  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }), // Rotate 25 degrees
      withTiming(0, { duration: 150 })   // Return to initial position
    ),
    4 // Repeat the animation sequence 4 times
  );

  // Apply animated style to rotate the view based on rotationAnimation value
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <ThemedText style={styles.text}>👋</ThemedText>
    </Animated.View>
  );
}

// Styles for the text
const styles = StyleSheet.create({
  text: {
    fontSize: 28,       // Font size for emoji text
    lineHeight: 32,     // Line height for emoji text
    marginTop: -6,      // Adjust position slightly
  },
});
