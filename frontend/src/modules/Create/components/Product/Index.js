import React, {useState} from 'react';
import {View, Button, Text, Alert} from 'react-native';
import Input from '../../../Auth/components/Input/Index';
import Style from './Style.js';

const Product = () => {
  const [product, setProduct] = useState({
    productName: '',
    price: '',
  });

  const onChangeHandler = (field, value) =>
    setProduct(previousState => ({...previousState, [field]: value}));

  const alertMsg = () => Alert.alert('Product Created Successfully!');

  return (
    <View style={Style.View}>
      <Text style={Style.Text}>Create a new Product</Text>
      <Input
        label="Product Name"
        type="none"
        size={20}
        secure={false}
        change={productName => onChangeHandler('productName', productName)}
      />
      <Input
        label="Price"
        type="none"
        size={10}
        secure={false}
        change={price => onChangeHandler('price', price)}
      />
      <View style={Style.Button}>
        <Button title="Add Product" onPress={() => alertMsg()} color="black" />
      </View>
    </View>
  );
};

export default Product;
