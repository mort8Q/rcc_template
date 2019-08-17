import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { FAB, Portal, Provider } from 'react-native-paper';
import * as firebase from 'firebase';

export default class Profile extends Component {
  state = {
    open: false,
    currentUser: null
  };

  componentDidMount () {
    // TODO: get the current user from firebase 

    // TODO: set the state of the current user
  }

  handleLogout = () => {
    // TODO: log user out signOut method

  }

  render() {


    return (
      <Provider>
        <Portal>
          <Appbar.Header>
            <Appbar.Content
            title="Profile"
            />
          </Appbar.Header>
          <View
            style={{justifyContent: "center", alignContent: "center", marginTop: 200}}
          >
            <Text
              style={{fontSize: 36, fontStyle: "bold"}}
            >
            // TODO: show the user id of the current user

            </Text>
            // TODO: log the user out pass the handleLogout method
            <Button mode="contained" onPress={() => console.log('pressed')}>
            Log Out
            </Button>
          </View>
      </Portal>
   </Provider>

    )
  }
}
