import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
// import { View ,Text} from 'react-native';
import Asd from './src/navigations/mainavigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import THUNK from 'redux-thunk';
class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={createStore()}>
        <NavigationContainer>
          <Asd />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
