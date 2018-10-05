import React from 'react'
import { TextInput, Text, View } from 'react-native'

const Input = props => (
    <View>
        <Text>{props.label}</Text>
        <TextInput textContentType={props.type} autoCapitalize="none" maxLength={props.size} secureTextEntry={props.secure} />
    </View>

)

export default Input