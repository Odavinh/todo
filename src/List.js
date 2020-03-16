import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { $List } from './style/components';

import { Item } from './Item';

export const List = (props) => {
  const deleteElement = (id) => {
    props.deleteItem(id);
  };

  const changeElement = (id) => {
    props.setCheckedItem(id);
  };
  return (
    <SafeAreaView style={$List.list}>
      <FlatList
        data={props.state()}
        eyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            key={item.id}
            item={item}
            clickElement={changeElement}
            clickDelete={deleteElement}
          />
        )}
      />
    </SafeAreaView>
  );
};
