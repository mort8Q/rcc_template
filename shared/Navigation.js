import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

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
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}