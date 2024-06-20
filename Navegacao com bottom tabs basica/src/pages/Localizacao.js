import { Text, View, TouchableOpacity } from "react-native";

export default function Localizacao ({navigation}){

    return(
        
           <View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}>
                <Text>Tp to Hub</Text>
            </TouchableOpacity>
           </View>
  
    );
}