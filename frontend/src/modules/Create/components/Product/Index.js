import React, { Component } from 'react'
import { View, Button, Text, Alert } from 'react-native'
import Input from '../../../Auth/components/Input/Index'
import Style from './Style.js'

class Product extends Component {
    state = {
        productName: '',
        price: '',
    }
    onChangeHandler = (field,value) => this.setState({ [field]: value })

    alertMsg = () => Alert.alert("Product Created Successfully!")
    
    render() {
        return (
            <View style={Style.View}>
                <Text style={Style.Text}>Create a new Product</Text>
                <Input label="Product Name" type="none" size={20} secure={false} change={productName => this.onChangeHandler("productName",productName) } />
                <Input label="Price" type="none" size={10} secure={false} change={price => this.onChangeHandler("price",price)} />
                <View style={Style.Button}>
                <Button title="Add Product" onPress={() => this.alertMsg()} color="black" /> 
                </View>
           
            </View>
        )
    }
}


export default Product