import React from 'react'
import { Component } from 'react'
import { Button, View, Text, ImageBackground } from 'react-native'
import styles from './style'
import Input from '../Input/Index'

class Login extends Component{
    state={
        username: '',
        password:''
    }
    onChangeHandler = ({field,value}) => this.setState={[field]:value}

    render() {
        return (

             <ImageBackground source={require("../../assets/images/rocks.jpg")} imageStyle={
                 { resizeMode: "stretch" }} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Welcome back!</Text>

                    <Input label="User" type="username" size={20} secure={false} change={data => this.onChangeHandler("username",data)}/>
                    <Input label="Password" type="password" size={20} secure={true} />
                    
                    <View style={styles.buttonLogin} >
                        <Button title="Sign In" color="black" />
                    </View>
                    <Text>{this.username}</Text>
                    <View style={styles.viewReg}>
                        <Text style={styles.text}>New here?</Text>
                        <View style={styles.button}>
                            <Button title="Sign Up" color="black" onPress={() => this.props.navigation.navigate('Register')} />
                        </View>

                    </View>
                </View >
             </ImageBackground>
        )
    }
}

export default Login