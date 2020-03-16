import React, { useCallback, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { $Form } from './style/components';
import { $text } from './style/fragments';

export const Form = (props) => {
  const [text, setText] = useState('');

  const submit = useCallback(() => {
    const finalText = text.trim();
    if (finalText) {
      props.onPress(finalText);
      setText('');
    }
  });

  return (
    <View style={$Form.Form}>
      <TextInput
        style={$Form.input}
        placeholder="New todo"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <TouchableOpacity style={$Form.button} onPress={submit}>
        <Text style={$text.medium}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
