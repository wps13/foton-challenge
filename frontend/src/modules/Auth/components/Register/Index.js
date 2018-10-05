import React from 'react'
import { TextInput, View, Button, Text } from 'react-native'
import styles from './style'

const Register = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.text}>Create a new account!</Text>
        <View style={styles.viewReg}>
            <TextInput 
            typeContentType="name" placeholder="full name" autoCapitalize="none" style={styles.input} maxLength={30} />
            <TextInput 
            typeContentType="emailAddress" placeholder="email" autoCapitalize="none" style={styles.input} maxLength={30}/>
            <TextInput 
            typeContentType="username" autoCapitalize="none" placeholder="username" style={styles.input} maxLength={20} />
            <TextInput 
            typeContentType="password" placeholder="******" secureTextEntry={true} autoCapitalize="none" style={styles.input}
            maxLength={15} />
            <Button title="Sign Up" color="black" />
        </View>
    </View>
)

export default Register