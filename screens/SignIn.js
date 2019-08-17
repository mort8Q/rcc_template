import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Image } from 'react-native-elements';
import * as firebase from 'firebase';

export default class SignIn extends Component {

  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  handleLogIn = () => {
    const { email, password } = this.state

    // TODO: log user in signInWithEmailAndPassword method

  }

  render() {

    return (
      <View
        style={{alignContent: "center", justifyContent: "center"}}
      >
      <Image
        source={{ uri: "https://pbs.twimg.com/profile_images/1118987753025351681/oq-X0Bzu_400x400.jpg" }}
        style={{ width: 200, height: 200, marginLeft: 100, marginTop: 0 }}
      />
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
      // TODO: log user in pass the handleLogIn method
      <Button icon="email" mode="contained" onPress={this.handleLogIn}>
        Log In
      </Button>
      <Button mode="text" onPress={() => this.props.navigation.navigate('Signup')}>
        Dont have an account? Sign Up
      </Button>
      </View>
    )
  }
}