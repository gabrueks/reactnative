/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

// class Greeting extends Component {
//   render(){
//     return (
//       <Text>Hello {this.props.name}</Text>
//     )
//   }
// }


export default class App extends Component<Props> {

  constructor(Props){
    super(Props);
    this.state = { text: '' };
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Text>
      //     Hello
      //   </Text>
      // </View>
      <View style={styles.middle}>
        <TextInput style={styles.input}
        placeholder="Escreva aqui para traduzir"
        onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.middle}>
          { this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  middle: {
    padding: 10,
  },
  font: {
    fontSize: 42
  },
  input: {
    height: 40
  }
});
