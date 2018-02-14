import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
    };
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val,
    });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          stylt={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={() => {
            this.props.onPlaceAdded(this.state.placeName);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});

export default PlaceInput;
