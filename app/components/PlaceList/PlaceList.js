import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';

import ListItem from './../ListItem/ListItem';

const PlaceList = ({ places, onItemPressed, onItemSelected }) => {
  return (
    // <ScrollView style={styles.listContainer}>
    //   {places.map((place, i) => (
    //     <ListItem key={i} placeName={place} onItemPressed={() => onItemDeleted(i)} />
    //   ))}
    // </ScrollView>
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={info => (
        <ListItem
          key={info.key}
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

export default PlaceList;
