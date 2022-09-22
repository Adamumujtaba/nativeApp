import  {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Record from './screen/record';
import { GlobalStyle } from './style/globalStyle';

function HomeScreen({navigation}) {
    const [data, setData] = useState([
      { key: 1, name: "Muhammad"},
      { key: 2, name: "Khalid"},
      { key: 3, name: "Walid"},
      { key: 4, name: "Ibrahim"}
    ])

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>User</Text>
      <Text style={GlobalStyle.msg}>How to solve
            navigation.getParam is not a function {"\n\n"}
            Click on the names below for navigation{"\n"}
      </Text>
      <View>
        <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=> navigation.navigate('record',item ) }>
            <Text style={GlobalStyle.list}>{"\u2B24" + "   " + item.name} </Text>
          </TouchableOpacity>
        )}
        />
      </View>
        
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="record" component={Record} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;