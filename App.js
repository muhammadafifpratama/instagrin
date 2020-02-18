import React, { Component } from 'react';
import { View } from 'react-native';
import Ssd from './src/component/loginform';
class App extends Component {
  state = {}
  render() {
    return (
    <View style={{flex:1}}>
      <Ssd/>
    </View>
    );
  }
}

export default App;
