import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import React from 'react';
import { Platform } from 'react-native';

// Functional component for handling external links with in-app browser support
export function ExternalLink({ href, ...rest }) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of opening the link in the default browser on native platforms
          event.preventDefault();
          // Open the link in an in-app browser
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
