import React from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'


const Login = () => (
    <View style={styles.view}>
        <View style={styles.viewInput}>
            <TextInput textContentType="username" placeholder="User" autoCapitalize = "none" style={styles.inputs} />
            <TextInput textContentType="password" placeholder="*******" secureTextEntry={true}  autoCapitalize = "none" style={styles.inputs} />
            <Button title="Sign In"  color= "black" />
        </View>
       
       
        {/* <Button onPress={navigation.navigate('Register')} /> */}
    </View>
)

// Login.navigationOptions = {
//     title: 'Login',
// }
const styles = StyleSheet.create(
    {
        inputs:{
            height:"18%",
            width:"100%",
            margin:10,
            backgroundColor: "#ffffff",
            flexDirection:"row",
            flex:0.6,
        },
        view :{
            alignSelf: "center",
        },
        viewInput:{
            flexDirection: "column",
            flex:0.5,
            alignSelf: "center",
        }
           
    }
)
export default Login