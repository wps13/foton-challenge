import React from 'react'
import { TextInput, Text, View } from 'react-native'
import styles from './style'

const Input = props => (
    <View style={styles.container}>
        <Text style={styles.text}>{props.label}</Text>
        <TextInput textContentType={props.type} autoCapitalize="none" maxLength={props.size} secureTextEntry={props.secure} style={styles.input} />
    </View>

)

export default Input