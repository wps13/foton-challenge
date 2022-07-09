import React from 'react';
import {View} from 'react-native';
import Button from './Button/Index';
import Style from './Style';

const Home = props => {
  const {navigation} = props;
  return (
    <View style={Style.container}>
      <View style={Style.View}>
        <Button
          text="Create Product"
          press={() => navigation.navigate('createProduct')}
        />
      </View>
      <View style={Style.View}>
        <Button text="List Product" />
      </View>
    </View>
  );
};

export default Home;
