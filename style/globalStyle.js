import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
    container:{
        padding:40,
    },
    title:{
        fontSize:20,
        textAlign:"center",
        marginBottom:10,
        backgroundColor:'#103979',
        padding: 8,
        color:'#fff'
    },
    list:{
        padding: 10,
        marginBottom:4,
        borderRadius:5,
        color: '#103940',
        borderWidth:1,
        borderStyle:"dashed"
    },
    msg:{
        color:'red',
    }
})
