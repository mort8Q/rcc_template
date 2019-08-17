import React, { Component } from 'react';
import { Image } from 'react-native-elements';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

// TODO: import environmnet configuration file 

// TODO: define firebase config variables




export default class Landing extends Component {

  componentDidMount() {

    // TODO: intialize firebase app initializeApp method

    // TODO: navigate to main page (Navigation) or Signup onAuthStateChange method

    console.log('success')
  }

  render() {
    return (
      <View
        style={{ justifyContent: "center", alignContent: "center"}}
      >
      <Image
        source={{ uri: "https://pbs.twimg.com/profile_images/1118987753025351681/oq-X0Bzu_400x400.jpg" }}
        style={{ width: 200, height: 200, marginTop: 200, marginLeft: 100 }}
      />
      </View>
    )
  }
}


