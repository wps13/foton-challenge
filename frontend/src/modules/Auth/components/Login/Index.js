import React from 'react';
import {Component} from 'react';
import {Button, View, Text} from 'react-native';
import styles from './style';
import Input from '../Input/Index';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };
  onChangeHandler = (value1, value2) => this.setState({[value1]: value2});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome back!</Text>
        <Input
          label="User"
          type="username"
          size={20}
          secure={false}
          change={data => this.onChangeHandler('username', data)}
        />
        <Input
          label="Password"
          type="password"
          size={20}
          secure={true}
          change={data => this.onChangeHandler('password', data)}
        />
        <View style={styles.buttonLogin}>
          <Button
            title="Sign In"
            color="black"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.viewReg}>
          <Text style={styles.text}>New here?</Text>
          <View style={styles.button}>
            <Button
              title="Sign Up"
              color="black"
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
