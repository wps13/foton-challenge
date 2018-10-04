import React from 'react'
import { Button, TextInput, View, Text } from 'react-native'
import styles from './style'

const Login = ({navigation}) => (
    <View className={styles.view}>

        <View className={styles.viewInput}>
            <TextInput textContentType="username" placeholder="User" autoCapitalize="none" className={styles.inputs} />
            <TextInput textContentType="password" placeholder="*******" secureTextEntry={true} autoCapitalize="none" className={styles.inputs} />
            <Button title="Sign In" color="black" />

        </View>
        <View className={styles.viewReg}>
            <Text>New here?</Text>
            <Button title="Sign Up" color="black" onPress={() => navigation.navigate('Register')} />
        </View>
    </View>
)

export default Login