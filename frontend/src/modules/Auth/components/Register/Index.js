import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import styles from './style';
import Input from '../Input/Index';

const Register = props => {
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
  });

  const onChangeHandler = (field, value) =>
    setRegisterData(previousState => ({...previousState, [field]: value}));

  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create a new account!</Text>
      <View style={styles.viewReg}>
        <Input
          label="Full Name"
          type="name"
          size={40}
          secure={false}
          change={data => onChangeHandler('fullName', data)}
        />
        <Input
          label="Email"
          type="email"
          size={30}
          secure={false}
          change={data => onChangeHandler('email', data)}
        />
        <Input
          label="Username"
          type="username"
          size={20}
          secure={false}
          change={data => onChangeHandler('username', data)}
        />
        <Input
          label="Password"
          type="password"
          size={15}
          secure={true}
          change={data => onChangeHandler('password', data)}
        />

        <View style={styles.button}>
          <Button
            title="Sign Up"
            color="black"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </View>
  );
};

export default Register;
