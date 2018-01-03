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

  _googleLogin() {
    Linking.openURL([
      'https://accounts.google.com/o/oauth2/v2/auth',
      '?client_id=920496582675-vvrhnaakak4bgp5fiv2b5euqsjd23sge.apps.googleusercontent.com',
      '&response_type=code',
      '&scope=openid%20email',
      '&redirect_uri=com.demoauth2:/oauth2redirect',
      '&state=security_token%3D138r5719ru3e1%26url%3Dhttps://oauth2-login-demo.example.com/myHome',
      '&nonce=0394852-3190485-2490358',
    ].join(''));

  }

  componentDidMount() {
    Linking.addEventListener('url', (event) => {
      //var facebookToken = event.url.split('#')[1].split('=')[1].split('&')[0];
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
          <Text style={{ fontSize: 30, color: 'red' }}>Login Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._googleLogin}>
          <Text style={{ fontSize: 30, color: 'red' }}>Login Google</Text>
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
