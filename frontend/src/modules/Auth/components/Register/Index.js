import React from 'react'
import { TextInput, View, Button, Text} from 'react-native'
import styles from './style'

const Register = ({navigation}) => (
    <View style={styles.view}>
        <View style={styles.viewReg}>
            <View style={styles.viewNames}>
                <TextInput typeContentType="name" placeholder="full name" autoCapitalize="none" />
                <TextInput typeContentType="emailAddress" placeholder="email" autoCapitalize="none" />
            </View>
            <TextInput typeContentType="username" autoCapitalize="none" placeholder="username" />
            <TextInput typeContentType="password" placeholder="******" secureTextEntry={true} autoCapitalize="none" />
            <Button title="Sign Up" color="black" />
        </View>
        <View style={styles.viewLogin}>
            <Text>Already have a account?</Text>
            <Button title="Login"  onPress={() => navigation.navigate('Login')}/>
        </View>
    </View>
)

Register.navigationOptions = {
    title: 'Register',
}

export default Register