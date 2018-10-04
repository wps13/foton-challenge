import React from 'react'
import { Button, TextInput, View, Text } from 'react-native'
import styles from './style'

const Login = ({navigation}) => (
    <View style={styles.view}>

        <View style={styles.viewInput}>
            <TextInput textContentType="username" placeholder="User" autoCapitalize="none" style={styles.inputs} />
            <TextInput textContentType="password" placeholder="*******" secureTextEntry={true} autoCapitalize="none" style={styles.inputs} />
            <Button title="Sign In" color="black" />

        </View>
        <View style={styles.viewReg}>
            <Text>New here?</Text>
            <Button title="Sign Up" color="black" onPress={() => navigation.navigate('Register')} />
        </View>
    </View>
)

export default Login