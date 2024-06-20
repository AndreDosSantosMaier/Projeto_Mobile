import {SafeAreaView, Text, View, TouchableOpacity,FlatList, StyleSheet} from 'react-native';
const [data, setData] = useState([
    {
    id: '1',
    title: 'First Item',
    },
    {
    id: '2',
    title: 'Second Item',
    },
   ])


<FlatList
    showsVerticalScrollIndicator={false}
    data={data}    
    renderItem={({ item }) => (
        <View>
            <Text>{item.title}</Text>
        </View>
    )}
    keyExtractor={item => item.id} 
/>
 

