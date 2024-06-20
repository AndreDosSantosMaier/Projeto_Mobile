import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';
export default function Login({navigation}){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
      

    function SignIn(){
        if (username==='11' && password === '11'){
            navigation.navigate("Localizacao")
            setPassword	('')
            setUsername('')
        } 
        else{
            alert("Fica esperto ai")
        }
    };

    return(
        <View>
            
            <TextInput 
              placeholder="Login"
              value={username}
              onChangeText={setUsername}
            />
            <View>
            <TextInput 
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
            </View>
            <TouchableOpacity onPress={SignIn}>
                <Text >login</Text>
            </TouchableOpacity>
        </View>
    )
}; 
