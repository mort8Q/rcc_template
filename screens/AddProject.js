import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as firebase from 'firebase'; 
import 'firebase/firestore';


export default class AddProject extends Component {

  state = {
    currentUser: null,
    projectName: '',
    projectDescription: ''
  }

  componentDidMount () {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser: currentUser.email });
  }

  handleProject = () => {

    console.log(this.state)

    firebase.firestore().collection('projects').add({
      name: this.state.projectName,
      user: this.state.currentUser,
      description: this.state.projectDescription
    })
    .then(() => this.props.navigation.navigate('Navigation'))
    .catch((error) => console.log(error))
  }

  render() {
    return (
      <View>
        <Text
          style={{fontSize: 36, marginBottom: 10, marginLeft: 125}}
        >
          Add Project
        </Text>
      <TextInput
      label='Project Name'
      value={this.state.projectName}
      onChangeText={projectName => this.setState({ projectName })}
    />
      <TextInput
      label='Project Description'
      value={this.state.projectDescription}
      onChangeText={projectDescription => this.setState({ projectDescription })}
      multiline={true}
      numberOfLines={15}
      />
      <Button mode="contained" style={{marginBottom: 10}} onPress={() => this.handleProject()}>
      Add Project
      </Button>
      <Button mode="contained" onPress={() => this.props.navigation.navigate('Navigation')}>
      Cancel
      </Button>
    </View>
    )
  }
}

