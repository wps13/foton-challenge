import React from 'react'
import { Button, TextInput, View } from 'react-native'
//import styles from './style.css'

const Login = () => (
    <View>
        <TextInput textContentType="username" placeholder="User" autoCapitalize = "none" />
        <TextInput textContentType="password" placeholder="*******" secureTextEntry={true}  autoCapitalize = "none"/>
        {/* <Button value="Sign In" /> */}
        {/* <Button onPress={navigation.navigate('Register')} /> */}
    </View>
)

// Login.navigationOptions = {
//     title: 'Login',
// }

export default Login