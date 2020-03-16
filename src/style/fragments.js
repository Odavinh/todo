import { StyleSheet } from 'react-native';
import { color, textLarge, textMedium, textSmall } from '../variables';

export const $text = StyleSheet.create({
  small: {
    color,
    fontSize: textSmall,
  },
  medium: {
    color,
    fontSize: textMedium,
  },
  large: {
    color,
    fontSize: textLarge,
  },
});
