import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignSelf: "center",
        width: "80%",
        margin: "10%",
    },
    viewReg: {
        flexDirection: "column",
        margin:"5%",
    },
    text:{
        fontWeight:"bold",
        color:"black",
        fontSize:24,
        alignSelf:"center",
    },
    input:{
        backgroundColor: "white",
        margin: "2%",
        padding:"3%",
    }
})

export default styles