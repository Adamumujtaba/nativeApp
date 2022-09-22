import { View, Text, Button } from "react-native"
import { GlobalStyle } from "../style/globalStyle"


export default function Record({navigation, route}){  
    return(
        <View style={GlobalStyle.container}>
            <Text style={GlobalStyle.title}>User details</Text>
                <Text>Username : {route.params.name} </Text>
             <Button title="Go to Home" onPress={() => navigation.goBack()} />
        </View>
    )
}

 