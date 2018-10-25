import React from 'react'
import { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import Button from './Button/Index'
import Style from './Style'

class Home extends Component {
    render() {
        return (
            <ImageBackground source={require("../Home/assets/home.jpeg")} imageStyle={
                { resizeMode: "stretch" }} style={{ width: '100%', height: '100%' }} >
                <View style={Style.container}>
                    <View style={Style.View}>
                        <Button text="Create Product" press={() => this.props.navigation.navigate('createProduct')} />
                    </View>
                    <View style={Style.View}>
                        <Button text="List Product" />
                    </View>

                </View>
            </ImageBackground>

        )
    }
}

export default Home
