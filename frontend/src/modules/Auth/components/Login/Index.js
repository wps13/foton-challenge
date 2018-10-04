import React from 'react'
import { Button, TextInput, View, StyleSheet, Text } from 'react-native'


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
const styles = StyleSheet.create(
    {
        inputs: {
            height: "15%",
            backgroundColor: "#ffffff",
            margin:"5%",
            justifyContent: "space-between"
        },
        view: {
            flexDirection: "column",
            justifyContent:"center",
            flex: 1,
        },
        viewInput: {
            flexDirection: "column",
        },
        viewReg: {
            flexDirection: "column",
            justifyContent: "space-between"
        }

    }
)
export default Login