import React, { useState } from 'react';
import { View } from 'react-native';

import { Navbar } from './src/NavBar';
import { Form } from './src/Form';
import { List } from './src/List';

import { backgroundColor } from './src/variables';

export default App = () => {
  const [state, setState] = useState([]);

  const addItem = (text) => {
    setState([{ id: Date.now().toString(), text, checked: false }, ...state]);
  };
  const getState = () => state;

  const setChecked = (id) => {
    setState((oldState) =>
      oldState.map((value) => {
        if (value.id === id) value.checked = !value.checked;
        return value;
      }),
    );
  };

  const deleteItem = (id) => {
    setState((oldState) => oldState.filter((item) => item.id !== id));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
      }}
    >
      <Navbar />
      <View
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <Form onPress={addItem} />
        <List
          state={getState}
          setCheckedItem={setChecked}
          deleteItem={deleteItem}
        />
      </View>
    </View>
  );
};
