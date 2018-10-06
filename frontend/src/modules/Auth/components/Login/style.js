import { StyleSheet } from 'react-native'

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
        },
        buttonLogin: {
            width: "25%",
            margin: "2%",
            alignSelf: "center",
        },
        viewReg: {
            flexDirection: "column",
            width: "60%",
            alignSelf: "center",
            margin: "10%",
            padding: "5%"
        },
        text: {
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            alignSelf: "center",
            backgroundColor:"#FFFFF0",
            borderRadius:15,
        },
        inputs: {
            width: "80%",
            backgroundColor: "#ffffff",
            margin: "5%",
            justifyContent: "space-between",
            borderRadius: 15,
            alignSelf: "center",
            flexDirection: "column",
        },
        button:
        {
            width: "40%",
            alignSelf: "center",
            margin: "5%"
        }
    }
)

export default styles
