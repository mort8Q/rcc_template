import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { FAB, Portal, Provider } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Events extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Provider>
        <Portal>
          <Appbar.Header>
            <Appbar.Content
            title="Events"
            />
          </Appbar.Header>
          <Text>
            Events
          </Text>
      </Portal>
   </Provider>

    )
  }
}
