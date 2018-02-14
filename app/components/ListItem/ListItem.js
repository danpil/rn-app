import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ placeName, onItemPressed, placeImage }) => {
  return (
    <TouchableOpacity onPress={onItemPressed}>
      <View style={styles.listItem}>
        <Image source={placeImage} style={styles.placeImage} resizeMode="cover" />
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    margin: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
});

export default ListItem;
