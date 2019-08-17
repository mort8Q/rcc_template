import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as firebase from 'firebase'; 
import 'firebase/firestore';


export default class AddEvent extends Component {

  // TODO: define the state for the currentUser, eventName & eventDescription

  componentDidMount () {
    
    // TODO: get the current user from firebase  

    // TODO: set the state of the current user
  }

  handleEvent = () => {

    console.log(this.state)

    // TODO: add the event to firebase firestore database add method

  }

  render() {
    return (
      <View>
        <Text
          style={{fontSize: 36, marginBottom: 10, marginLeft: 125}}
        >
          Add Event
        </Text>
      <TextInput
      label='Event Name'
      // TODO: set the text of the eventName to the state
      onChangeText={() => console.log('text changed')}
      // TODO: update the value of the filed value property 
    />
      <TextInput
      label='Event Description'
      multiline={true}
      numberOfLines={15}
      // TODO: set the text of the eventName to the state
      onChangeText={() => console.log('text changed')}
      // TODO: update the value of the filed value property 
      />
      // TODO: add event to firestore pass handleEvent method
      <Button mode="contained" style={{marginBottom: 10}} onPress={() => console.log('pressed')}>
      Add Event
      </Button>

      // TODO: navigate to main page if cancelled
      <Button mode="contained" onPress={() => console.log('pressed')}>
      Cancel
      </Button>
    </View>
    )
  }
}
