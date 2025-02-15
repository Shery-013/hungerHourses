import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

// TabBarIcon component with optional style for icon customization
export function TabBarIcon({ style, ...rest }) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
