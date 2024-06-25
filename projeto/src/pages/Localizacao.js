import { Text,View,TouchableOpacity,StyleSheet,FlatList,Image} from "react-native";
import{React, useState,useEffect} from 'react';
import { collection,deleteDoc,doc,onSnapshot, query, where } from "firebase/firestore";
import { database } from "../config/firebaseconfig";
import { LinearGradient } from "expo-linear-gradient";

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
        <LinearGradient
        start={{x:0,y:1}}
	end={{x:1,y:0}}
	colors={['#B6FFFA','#687EFF']}>
        <View style={styles.container}>
            <Text style={styles.txtLocal}>Localização</Text>
                <FlatList
                data = {local}
                renderItem={({item}) =>{
                    return(
                        <View style= {styles.Local}>
                            <Text style= {styles.LocalTxt}
                            onPress={()=> {navigation.navigate("HomeTabs" )
                        }}>{item.nome}
                            </Text>
                            <Image style={{width:300, height:150}}source={{uri: item.imagem}}/>

                        </View>
                    )
                }} 
                />
        </View>
       </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
    },       
    txtLocal:{       
        fontSize: 25,       
        fontWeight: 'bold',       
        alignSelf: 'center',       
        padding: 20       
        
    },
    style:{
        height: 45, 
        width: 100, 
        marginTop: 15, 
        borderRadius: 5
    },
    Local:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#80B3FF',
        padding: 10
    },
    LocalTxt:{
        color: 'Black',
        fontSize:25,
    }
})