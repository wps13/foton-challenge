import React from 'react'
import { Button, TextInput, View, Text } from 'react-native'
import styles from './style'

const Login = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome back!</Text>

        <View style={styles.inputs}>
            <TextInput textContentType="username" placeholder="User" autoCapitalize="none" maxLength={20} />
            <TextInput textContentType="password" placeholder="*******" secureTextEntry={true} autoCapitalize="none" maxLength={20} />
        </View>

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