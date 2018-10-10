import React from 'react'
import { Component } from 'react'
import { View, Button, Text, ImageBackground } from 'react-native'
import styles from './style'
import Input from '../Input/Index'

class Register extends Component({ navigation }) {
    render() {
        return (
            <ImageBackground source={require("../../assets/images/raindrops.jpg")} imageStyle={{ resizeMode: "stretch" }} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Create a new account!</Text>
                    <View style={styles.viewReg}>
                        <Input label="Full Name" type="name" size={40} secure={false} />
                        <Input label="Email" type="email" size={30} secure={false} />
                        <Input label="Username" type="username" size={20} secure={false} />
                        <Input label="Password" type="password" size={15} secure={true} />

                        <View style={styles.button}>
                            <Button title="Sign Up" color="black" />
                        </View>

                    </View>
                </View>
            </ImageBackground>
        )

    }
}


export default Register