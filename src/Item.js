import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { $text } from './style/fragments';
import {
  itemColorChecked,
  itemColor,
  itemBorderColorChecked,
  itemBorderColor,
} from './variables';

export const Item = ({ item, clickDelete, clickElement }) => {
  const styleElement = item.checked
    ? style.checkedElement
    : style.defaultElement;
  return (
    <TouchableOpacity
      onPress={clickElement.bind(null, item.id)}
      activeOpacity={0.5}
      style={{ ...style.component, ...styleElement }}
    >
      <Text
        style={{
          fontSize: $text.small.fontSize,
          color: style.defaultElement.borderColor,
          paddingHorizontal: 3,
          maxWidth: '90%',
        }}
      >
        {item.text}
      </Text>
      <TouchableOpacity onPress={clickDelete.bind(null, item.id)}>
        <Image
          style={{ width: 30, height: 30 }}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/complete-common-version-6-4/1024/trash-512.png',
          }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    paddingHorizontal: 5,
    borderStyle: 'solid',
    marginVertical: 2,
    borderWidth: 1,
  },
  checkedElement: {
    backgroundColor: itemColorChecked,
    borderColor: itemBorderColorChecked,
  },
  defaultElement: {
    backgroundColor: itemColor,
    borderColor: itemBorderColor,
  },
});
