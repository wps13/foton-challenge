import React from 'react'
import { Button, TextInput, View, Text } from 'react-native'
import styles from './style'

const Login = ({navigation}) => (
    <View style={styles.view}>

        <View style={styles.viewInput}>
            <TextInput textContentType="username" placeholder="User" autoCapitalize="none" style={styles.inputs} maxLength="20" />
            <TextInput textContentType="password" placeholder="*******" secureTextEntry={true} autoCapitalize="none" style={styles.inputs} maxLength="20"/>
            <Button title="Sign In" color="black" />

        </View>
        <View style={styles.viewReg}>
            <Text style={styles.text}>New here?</Text>
            <Button title="Sign Up" color="black" onPress={() => navigation.navigate('Register')} />
        </View>
    </View>
)

export default Login