import React from 'react';
import { View } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

// ThemedView component with optional styles for light and dark themes
export function ThemedView({ style, lightColor, darkColor, ...otherProps }) {
  // Apply background color based on theme mode
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
