import React from 'react'
import { TextInput, View, Button, Text, StyleSheet } from 'react-native'

//{navigation}
const Register = () => (
    <View>
        <View style={styles.viewNames}>
        <TextInput typeContentType="name" placeholder="full name" autoCapitalize="none" />
    <TextInput typeContentType="emailAddress" placeholder="email" autoCapitalize="none"/>
        </View>
    
    <TextInput  typeContentType="username" autoCapitalize="none" />
    <TextInput typeContentType="password" placeholder="******" secureTextEntry={true} autoCapitalize="none" />
    <Button title="Sign Up" color="black" />
    <Text>Already have a account?</Text>
    {/* <Button onPress= {navigation.navigate('Login')} /> */}
</View>
)

Register.navigationOptions = {
    title: 'Register',
}
const styles = StyleSheet.create({
    viewNames:{
        flexDirection : "row",
    }
})
export default Register