import {StyleSheet } from 'react-native'

const styles = StyleSheet.create(
    {
        inputs: {
            height: "10%",
            width: "60%",
            backgroundColor: "#ffffff",
            margin: "2%",
            justifyContent: "space-between",
            borderRadius: 10,
            padding: "2%",
            alignSelf:"center",
            flexDirection: "column",
        },
        view: {
            flexDirection: "column",
            justifyContent:"center",
            flex: 1,
        },
        buttonLogin: {
            width: "60%",
            margin: "2%",
            borderRadius: 20,
            alignSelf:"center",
        },
        viewReg: {
            flexDirection: "column",
            width: "60%",
            alignSelf: "center",
            margin:"10%",
            padding:"5%"
        },
        text:{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            alignSelf:"center",
        }
    }
)

export default styles
