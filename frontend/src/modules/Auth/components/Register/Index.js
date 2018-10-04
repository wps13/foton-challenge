import React from 'react'
import { TextInput, View, Button, Text, StyleSheet } from 'react-native'

//{navigation}
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
            <Button title="Login"  onPress= {navigation.navigate('Login')}/>
        </View>
    </View>
)

Register.navigationOptions = {
    title: 'Register',
}
const styles = StyleSheet.create({
    viewNames: {
        flexDirection: "row",
    },
    viewLogin: {
        justifyContent: "space-between",
        margin: 20,
        padding: "10%"
    },
    view: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    viewReg:{
        flexDirection: "column",
        justifyContent: "space-around",
        margin:10
    }
})
export default Register