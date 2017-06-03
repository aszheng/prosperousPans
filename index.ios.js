import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

import configureStore from './iosClient/src/configureStore';
import Login from './iosClient/src/components/Login';
import Main from './iosClient/src//components/Main';


const PursumeIOSApp = () => (
  <Provider store = { store }>
    <Main />
  </Provider>    
)

const store = configureStore();

AppRegistry.registerComponent('PursumeIOSApp', () => PursumeIOSApp);

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: '#111111'
//   }
// });
//     <NavigatorIOS
//       style={styles.container}
//       initialRoute={{
//         title: 'Pursumé',
//         component: Login
//       }} />
