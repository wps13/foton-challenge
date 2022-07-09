import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';
import styles from './style';
import Input from '../Input/Index';

const Login = props => {
  const [loginData, setLoginData] = useState({username: '', password: ''});

  const onChangeHandler = (value1, value2) =>
    setLoginData(previousState => ({...previousState, [value1]: value2}));

  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome back!</Text>
      <Input
        label="User"
        type="username"
        size={20}
        secure={false}
        change={data => onChangeHandler('username', data)}
      />
      <Input
        label="Password"
        type="password"
        size={20}
        secure={true}
        change={data => onChangeHandler('password', data)}
      />
      <View style={styles.buttonLogin}>
        <Button
          title="Sign In"
          color="black"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.viewReg}>
        <Text style={styles.text}>New here?</Text>
        <View style={styles.button}>
          <Button
            title="Sign Up"
            color="black"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
