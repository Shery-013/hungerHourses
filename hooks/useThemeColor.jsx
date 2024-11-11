import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

// Custom hook to get the theme-based color
export function useThemeColor(props, colorName) {
  const theme = useColorScheme() ?? 'light'; // Get the current theme ('light' or 'dark')
  const colorFromProps = props[theme]; // Check if the color is provided in the props for the current theme

  if (colorFromProps) {
    return colorFromProps; // If color is provided in props, return it
  } else {
    return Colors[theme][colorName]; // Else, return the default color from the Colors object
  }
}
