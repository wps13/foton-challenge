import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create(
    {
        View: {
            flexDirection: "column",
            borderColor: "gray",
            borderWidth: 1,
            backgroundColor: "#ded7c6",
            margin: "3%",
            padding:"2%",
        },
        container: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center"
        }
    }
)

export default Styles