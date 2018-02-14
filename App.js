// import App from './app';

// export default App;

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native';

import PlaceList from './app/components/PlaceList/PlaceList';
import PlaceInput from './app/components/PlaceInput/PlaceInput';
import placeImage from './app/assets/beautiful-place.jpg';
import PlaceDetail from './app/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  state = {
    // placeName: '',
    places: [],
    selectedPlace: null,
  };

  // placeNameChangedHandler = val => {
  //   this.setState({
  //     placeName: val,
  //   });
  // };

  // placeSubmitHandler = () => {
  //   if (this.state.placeName.trim() === '') {
  //     return;
  //   }

  //   this.setState(prevState => {
  //     return { places: prevState.places.concat(prevState.placeName) };
  //   });
  // };

  placeAddedHandler = placeName => {
    if (placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage,
        }),
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        }),
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    });
  };

  render() {
    // const placeOutput = this.state.places.map((place, i) => <ListItem key={i} placeName={place} />);
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  // imputContainer: {
  //   //flex: 1,
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // placeInput: {
  //   width: '70%',
  // },
  // placeButton: {
  //   width: '30%',
  // },
  // listContainer: {
  //   width: '100%',
  // },
});
