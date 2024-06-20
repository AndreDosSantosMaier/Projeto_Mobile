import { Text, View } from "react-native";
import {useRoute} from '@react-navigation/native'
export default function Hub (){
    const route = useRoute();
    const id = route.params?.id
    return(
        <View>
        <Text>
            {codigo}
        </Text>
      </View>
    );
}