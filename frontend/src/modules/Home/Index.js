import React from 'react'
import { Component } from 'react'
import { View } from 'react-native'
import Button from './Button/Index'

class Home extends Component {
    render() {
        return (
            <View>
                <Button text="Create Product" press={() => this.props.navigation.navigate('createProduct')} />
            </View>
        )
    }
}

export default Home
