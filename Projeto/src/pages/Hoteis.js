import { Text,View,TouchableOpacity,StyleSheet,FlatList,Image} from "react-native";
import{React, useState,useEffect} from 'react';
import { collection,deleteDoc,doc,onSnapshot, query } from "firebase/firestore";
import { database } from "../config/firebaseconfig";

export default function Hoteis({navigation}){
    const [Hoteis,setHoteis] = useState([])
    useEffect(()=>{
        const HoteisCollection = collection(database,"Hoteis")
        //conecta na database Hoteis
        const listen = onSnapshot(HoteisCollection, (query)=> {
            //sempre que muda algo no banc atualiza o use effect
            const list = []
            query.forEach((doc) => {
                //percorre a query interia
                 list.push({...doc.data(),id: doc.id})
                 //bota as infos na array
            })
            setHoteis(list)
            //add os itens da array para o setHoteis
        })
        return () => listen()
    },[])

    function deleteHoteis(id){
        const HoteisDocRef = doc(database, 'Hoteis', id)
        //                 vai acessar a database Hoteis, e usar o parametro ID
        deleteDoc(HoteisDocRef)
        //deletar o bagulho com o id selecionado
    }
    return(
        <View style={styles.container}>
            <Text style={styles.txtHoteis}>Hotéis</Text>
            <FlatList
            data = {Hoteis}
            renderItem={({item}) =>{
                return(
                    <View style= {styles.Hoteis}>
                        <Text style= {styles.HoteisTxt}>{item.nome}</Text>
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
    txtHoteis:{       
        fontSize: 25,       
        fontWeight: 'bold',       
        alignSelf: 'center',       
        padding: 20       
        
    },
    Hoteis:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#8A5D42',
        padding: 10
    },
    HoteisTxt:{
        color: 'white'
    }
})