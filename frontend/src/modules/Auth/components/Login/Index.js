import React from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'


const Login = () => (
    <View style={styles.view}>
        <TextInput textContentType="username" placeholder="User" autoCapitalize = "none" style={styles.inputs} />
        <TextInput textContentType="password" placeholder="*******" secureTextEntry={true}  autoCapitalize = "none" style={styles.inputs} />
        {/* <Button value="Sign In" /> */}
        {/* <Button onPress={navigation.navigate('Register')} /> */}
    </View>
)

// Login.navigationOptions = {
//     title: 'Login',
// }
const styles = StyleSheet.create(
    {
        inputs:{
            height:"15%",
            width:"80%",
            margin:10,
        },
        view :{
            alignSelf: "center",
        }
    }
)
export default Login