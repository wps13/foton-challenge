import React from 'react'
import { Component } from 'react'
import { View, Button, Text, ImageBackground } from 'react-native'
import styles from './style'
import Input from '../Input/Index'

class Register extends Component{
    state={
        fullName: '',
        email: '',
        username: '',
        password:''
    }
    
    onChangeHandler = (field,value) => this.setState({[field]:value})
    
    render() {
        return (
            <ImageBackground source={require("../../assets/images/raindrops.jpg")} imageStyle={{ resizeMode: "stretch" }} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Create a new account!</Text>
                    <View style={styles.viewReg}>
                        <Input label="Full Name" type="name" size={40} secure={false} change={data => this.onChangeHandler("fullName",data)} />
                        <Input label="Email" type="email" size={30} secure={false} change={data => this.onChangeHandler("email",data)}/>
                        <Input label="Username" type="username" size={20} secure={false} change={data => this.onChangeHandler("username",data)}/>
                        <Input label="Password" type="password" size={15} secure={true} change={data => this.onChangeHandler("password",data)}/>

                        <View style={styles.button}>
                            <Button title="Sign Up" color="black" onPress={() => this.props.navigate('Home')} />
                        </View>

                    </View>
                </View>
            </ImageBackground>
        )

    }
}


export default Register