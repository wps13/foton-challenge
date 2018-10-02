import React from 'react'
import { TextInput, View, Button, Text } from 'react-native'

const Register = ({navigation}) => (
    <View>
    <TextInput type="text" placeholder="full name" />
    <TextInput type="text" placeholder="email" />
    <TextInput type="password" placeholder="******" />
    <Text>Doesn't have a account?</Text>
    <Button onPress= {navigation.navigate('Login')} />
</View>
)

Register.navigationOptions = {
    title: 'Register',
}

export default Register