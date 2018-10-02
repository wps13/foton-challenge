import React,{ Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'


class Product extends Component {
    state = {
        
    }
    render(){
        return (
            <View>
            <Text>Create a new Product</Text>
            <TextInput onChange={} placeholder="Product Name" />
            <TextInput onChange={} placeholder="Price" />
            <Button value="Add Product" onPress={} />
        </View>
        )
    }
}


export default Product