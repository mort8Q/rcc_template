/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Landing from './screens/Landing';
import Signin from './screens/SignIn';
import Signup from './screens/Signup';
import Navigation from './shared/Navigation';
import AddEvent from './screens/AddEvent';
import AddProject from './screens/AddProject';
import Events from './screens/Events';
import Projects from './screens/Projects';

// create our app's navigation stack
export default createAppContainer(createSwitchNavigator(
  {
    Landing: Landing,
    Signin: Signin,
    Signup: Signup,
    Navigation: Navigation,
    Events: Events,
    Projects: Projects,
    AddEvent: AddEvent,
    AddProject: AddProject
  },
  {
    initialRouteName: 'Landing',
  }
));  
