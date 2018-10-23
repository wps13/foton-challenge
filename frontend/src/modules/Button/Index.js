import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

const Button = (props) => (
    <View>
        <TouchableHighlight onPress={props.press}>
            <View>
                <Text> {props.text} </Text>
            </View>
        </TouchableHighlight>
    </View>
)

export default Button