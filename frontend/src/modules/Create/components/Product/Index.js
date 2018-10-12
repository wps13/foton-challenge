import React, { Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import Input from '../../../Auth/components/Input/Index'

class Product extends Component {
    state = {
        productName: '',
        price: '',
    }
    onChangeHandler = ({ field, value }) => this.setState = { [field]: value }

    render() {
        return (
            <View>
                <Text>Create a new Product</Text>
                <Input label="Product Name" type="none" size={20} secure={false} change={} />
                <Input label="Price" type="none" size={10} secure={false} change={} />
                <Button value="Add Product" onPress={} />
            </View>
        )
    }
}


export default Product