import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { FAB, Portal, Provider } from 'react-native-paper';

export default class Projects extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Provider>
        <Portal>
          <Appbar.Header>
            <Appbar.Content
            title="Projects"
            />
          </Appbar.Header>
          <Text>
            Projects
          </Text>
      </Portal>
   </Provider>

    )
  }
}
