import React from 'react';
import { Text, View } from 'react-native';

import { $Navbar } from './style/components';
import { $text } from './style/fragments';

export const Navbar = (props) => {
  return (
    <View style={$Navbar.Navbar}>
      <Text style={$text.large}>Todo</Text>
    </View>
  );
};
