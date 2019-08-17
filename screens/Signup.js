import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Image } from 'react-native-elements';
import * as firebase from 'firebase';

export default class Signup extends Component {

  // TODO: define state for email, password and errorMessage

  handleSignup = (event) => {
    event.preventDefault();

    // TODO: register user createUserWithEmailAndPassword method

  }

  handleTextChange = (event) => {
    console.log(event.target)
  }

  render() {
    return (
      <View
        style={{alignContent: "center", justifyContent: "center"}}
      >
        // TODO: show error message if register fails
      <Image
        source={{ uri: "https://pbs.twimg.com/profile_images/1118987753025351681/oq-X0Bzu_400x400.jpg" }}
        style={{ width: 200, height: 200, marginLeft: 100 }}
      />
      <TextInput
          placeholder="Email"
          autoCapitalize="none"
          // TODO: set the text of the email to the state
          onChangeText={() => console.log('text changed')}
          // TODO: update the value of the filed value property 
      />
      <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          // TODO: set the text of the password to the state
          onChangeText={() => console.log('text changed')}
          // TODO: update the value of the filed value property 

      />
      // TODO: sign up when button pressed pass the handle signup functin
      <Button icon="email" mode="contained" onPress={() => console.log('pressed')}>
        Sign Up
      </Button>
      // TODO: navigate to the Signin page 
      <Button mode="text" onPress={() => console.log('pressed')}>
        Already have an Account? Log In
      </Button>
      </View>
    )
  }
}