import {StyleSheet } from 'react-native'

const styles = StyleSheet.create(
    {
        inputs: {
            height: "15%",
            backgroundColor: "#ffffff",
            margin:"5%",
            justifyContent: "space-between"
        },
        view: {
            flexDirection: "column",
            justifyContent:"center",
            flex: 1,
        },
        viewInput: {
            flexDirection: "column",
        },
        viewReg: {
            flexDirection: "column",
            justifyContent: "space-between"
        },
        text:{
            fontSize: 14,
            fontWeight: "bold",
        }
    }
)

export default styles
