import React from 'react'
import { TextInput, Text, View } from 'react-native'
import styles from './style'

const Input = ({label, type, size, secure, change}) => (
    <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <TextInput textContentType={type} autoCapitalize="none" maxLength={size} secureTextEntry={secure} style={styles.input} onChangeText={change} />
    </View>

)

export default Input