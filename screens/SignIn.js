import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default class SignIn extends Component {

  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  logIn = () => {
    // TODO: firebase login
    console.log('login')
  }

  render() {

    return (
      <View
        style={{alignContent: "center", justifyContent: "center"}}
      >
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
      <TextInput
        label='Email'
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={email => this.setState({ email })}
        value={this.state.email}
      />
      <TextInput
        secureTextEntry
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={password => this.setState({ password })}
        value={this.state.password}
      />
      <Button icon="email" mode="contained" onPress={() => console.log('Pressed')}>
        Sign Up
      </Button>
      <Button mode="text" onPress={() => console.log('Pressed')}>
        Dont have an account? Sign Up
      </Button>
      </View>
    )
  }
}