import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { FAB, Portal, Provider } from 'react-native-paper';


import Events from '../screens/Events';
import Profile from '../screens/Profile';
import Projects from '../screens/Projects';

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'events', title: 'Events', icon: 'event' },
      { key: 'projects', title: 'Projects', icon: 'polymer' },
      { key: 'profile', title: 'Profile', icon: 'account-circle' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    events: Events,
    projects: Projects,
    profile: Profile,
  });

  render() {
    return (
      <Provider>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
        <FAB.Group
        style={{marginBottom: 50}}
        open={this.state.open}
        icon={this.state.open ? 'today' : 'add'}
        actions={[

          // TODO: navigate to AddEvent onPress
          // TODO: navigate to AddProject onPress 
          { icon: 'event', label: 'Add Event', onPress: () => console.log('pressed') },
          { icon: 'polymer', label: 'Add Project', onPress: () => console.log('pressed')},
        ]}
        onStateChange={({ open }) => this.setState({ open })}
        onPress={() => {
          if (this.state.open) {
            // do something if the speed dial is open
          }
        }}
      />
      </Provider>
    );
  }
}