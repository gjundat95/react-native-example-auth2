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
  View, Linking,
  TouchableOpacity,
} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  _facebookLogin() {
    Linking.openURL([
      'https://graph.facebook.com/oauth/authorize',
      '?response_type=token',
      '&scope=email',
      '&client_id='+'978659365579905',
      '&redirect_uri=fb978659365579905://authorize',
    ].join(''));

  }

  componentDidMount() {
    Linking.addEventListener('url', (event) => {
      var facebookToken = event.url.split('#')[1].split('=')[1].split('&')[0];
      console.warn(event);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={this._facebookLogin}>
          <Text>Login Facebook</Text>
        </TouchableOpacity>
        
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
});
