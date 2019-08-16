import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default class Signup extends Component {
  render() {
    return (
      <View
        style={{alignContent: "center", justifyContent: "center"}}
      >
      <Text>
        Sign Up to the Riyadh Coding Club
      </Text>
      <TextInput
        label='Email'
      />
      <TextInput
        label='Password'
        value={this.state.text}
      />
      <Button icon="email" mode="contained" onPress={() => console.log('Pressed')}>
        Sign Up
      </Button>
      <Button mode="text" onPress={() => console.log('Pressed')}>
        Already have an Account? Log In
      </Button>
      </View>
    )
  }
}