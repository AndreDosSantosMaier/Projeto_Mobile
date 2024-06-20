import { Text,View,TouchableOpacity,StyleSheet,FlatList,Image} from "react-native";
import{React, useState,useEffect} from 'react';
import { collection,deleteDoc,doc,onSnapshot, query } from "firebase/firestore";
import { database } from "../config/firebaseconfig";

export default function Localizacao({navigation}){
    const [local,setLocal] = useState([])
    useEffect(()=>{
        const localCollection = collection(database,"Localizacao")
        //conecta na database Local
        const listen = onSnapshot(localCollection, (query)=> {
            //sempre que muda algo no banc atualiza o use effect
            const list = []
            query.forEach((doc) => {
                //percorre a query interia
                 list.push({...doc.data(),id: doc.id})
                 //bota as infos na array
            })
            setLocal(list)
            //add os itens da array para o setLocal
        })
        return () => listen()
    },[])

/*     function deleteLocal(id){
        const localDocRef = doc(database, 'Localizacao', id)
        //                 vai acessar a database Local, e usar o parametro ID
        deleteDoc(localDocRef)
        //deletar o bagulho com o id selecionado
    } */
    return(
        <View style={styles.container}>
            <Text style={styles.txtLocal}>Localização</Text>
            <FlatList
            data = {local}
            renderItem={({item}) =>{
                return(
                    <View style= {styles.Local}>
                        <Text style= {styles.LocalTxt}
                        onPress={()=> {navigation.navigate("Hub" )
                    }}>{item.nome}{item.codigo}
                        </Text>
                        <Image style={{width:100, height:100}}source={{uri: item.imagem}}/>

                    </View>
                )
            }} 
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },       
    txtLocal:{       
        fontSize: 25,       
        fontWeight: 'bold',       
        alignSelf: 'center',       
        padding: 20       
        
    },
    Local:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#8A5D42',
        padding: 10
    },
    LocalTxt:{
        color: 'white'
    }
})