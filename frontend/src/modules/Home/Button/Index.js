import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Styles from './Style'

const Button = (props) => (
    <View>
        <TouchableHighlight onPress={props.press}>
            <View>
                <Text style={Styles.TextButton}> {props.text} </Text>
            </View>
        </TouchableHighlight>
    </View>
)

export default Button