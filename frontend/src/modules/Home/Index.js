import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import Button from './Button/Index';
import Style from './Style';

class Home extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.View}>
          <Button
            text="Create Product"
            press={() => this.props.navigation.navigate('createProduct')}
          />
        </View>
        <View style={Style.View}>
          <Button text="List Product" />
        </View>
      </View>
    );
  }
}

export default Home;
