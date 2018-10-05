import React from 'react'
import { Button, View, Text } from 'react-native'
import styles from './style'
import Input from '../Input/Index'

const Login = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome back!</Text>

            <Input label="User" type="username" size={20} secure={false} />
            <Input label="Password" type="password" size={20} secure={true} />

        <View style={styles.buttonLogin} >
            <Button title="Sign In" color="black" />
        </View>

        <View style={styles.viewReg}>
            <Text style={styles.text}>New here?</Text>
            <View style={styles.button}>
                <Button title="Sign Up" color="black" onPress={() => navigation.navigate('Register')} />
            </View>

        </View>
    </View>
)

export default Login