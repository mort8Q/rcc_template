import React, { Component } from 'react';
import { Image } from 'react-native-elements';
import { View, Text } from 'react-native';


export default class Landing extends Component {
  render() {
    return (
      <View
        style={{ justifyContent: "center", alignContent: "center"}}
      >
      <Image
        source={{ uri: "https://pbs.twimg.com/profile_images/1118987753025351681/oq-X0Bzu_400x400.jpg" }}
        style={{ width: 200, height: 200 }}
      />
      </View>
    )
  }
}


