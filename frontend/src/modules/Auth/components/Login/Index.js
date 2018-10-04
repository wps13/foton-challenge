import React from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'


const Login = () => (
    <View style={styles.view}>

        <View style={styles.viewInput}>
            <TextInput textContentType="username" placeholder="User" autoCapitalize="none" style={styles.inputs} />
            <TextInput textContentType="password" placeholder="*******" secureTextEntry={true} autoCapitalize="none" style={styles.inputs} />
            <Button title="Sign In" color="black" />
            <View style={styles.viewButton}>
                <Button title="Sign Up" color="black" />
            </View>
        </View>



        {/* <Button onPress={navigation.navigate('Register')} /> */}
    </View>
)

// Login.navigationOptions = {
//     title: 'Login',
// }
const styles = StyleSheet.create(
    {
        inputs: {
            height: "18%",
            width: "100%",
            backgroundColor: "#ffffff",
            flex: 0.1,
        },
        view: {
            flexDirection: "column",
            flex: 1,
            alignSelf : "center",
            justifyContent:"space-between"
        },
        viewInput: {
            flexDirection: "column",
            flex: 0.4,
            justifyContent:"space-around"
        },
        viewButton: {
            flexDirection: "column",
            flex: 0.5,
           justifyContent: "flex-end",
        }

    }
)
export default Login