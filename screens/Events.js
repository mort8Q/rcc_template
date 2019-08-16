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
          <FAB.Group
            open={this.state.open}
            icon={this.state.open ? 'today' : 'add'}
            actions={[
              { icon: 'event', label: 'Add Event', onPress: () => console.log('Pressed event') },
              { icon: 'polymer', label: 'Add Project', onPress: () => console.log('Pressed notifications') },
            ]}
            onStateChange={({ open }) => this.setState({ open })}
            onPress={() => {
              if (this.state.open) {
                // do something if the speed dial is open
              }
            }}
          />
      </Portal>
   </Provider>

    )
  }
}
