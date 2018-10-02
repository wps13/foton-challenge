import React from 'react'
import { Button, TextInput, View } from 'react-native'
import styles from '../Login/style.css'

const Login = ({ navigation }) => (
    <View>
        <TextInput type="text" placeholder="User" style={styles} />
        <TextInput type="password" placeholder="*******" />
        <Button value="Sign In" />
        <Button onPress={navigation.navigate('Register')} />
    </View>
)

Login.navigationOptions = {
    title: 'Login',
}

export default Login