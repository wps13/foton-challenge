import React,{ Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import Input from '../../../Auth/components/Input/Index'

class Product extends Component {
    state = {
        productName : '',
        price:'',
    }
    onChangeHandler = ({field,value}) => this.setState={[field]:value}

    render(){
        return (
            <View>
            <Text>Create a new Product</Text>
            <Input change={} label="Product Name" type="" size={} secure={false} />
            <TextInput onChange={} placeholder="Price" />
            <Button value="Add Product" onPress={} />
        </View>
        )
    }
}


export default Product