import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
//import SN from './src/StackNavigator'
//import Login from './src/modules/Auth/components/Login/Index'
import Register from './src/modules/Auth/components/Register/Index'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Register />
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
});
