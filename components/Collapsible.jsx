import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

// Functional component for a collapsible section with title and children content
export function Collapsible({ children, title }) {
  // State to manage collapse/expand
  const [isOpen, setIsOpen] = useState(false);
  // Detect current theme (light or dark mode)
  const theme = useColorScheme() || 'light';

  return (
    <ThemedView>
      {/* Header section with a toggle button */}
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((prevValue) => !prevValue)}
        activeOpacity={0.8}>
        {/* Icon for indicating collapsed or expanded state */}
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {/* Content section displayed only when isOpen is true */}
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    gap: 6, // Gap between icon and title text
  },
  content: {
    marginTop: 6, // Space above the content
    marginLeft: 24, // Indent the content for visual hierarchy
  },
});
