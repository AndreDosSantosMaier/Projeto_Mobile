import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../config/firebaseconfig';
import { LinearGradient } from 'expo-linear-gradient';

export default function Hoteis() {
    const [Hoteis, setHoteis] = useState([]);

    useEffect(() => {
        const HoteisCollection = collection(database, 'Hoteis');
        const unsubscribe = onSnapshot(HoteisCollection, (querySnapshot) => {
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setHoteis(list);
        });

        return () => unsubscribe();
    }, []);

    return (
        <LinearGradient
        start={{x:0,y:1}}
	end={{x:1,y:0}}
	colors={['#B6FFFA','#687EFF']}>
        <View style={styles.container}>
            <Text style={styles.txtHoteis}>Hotéis</Text>
            <FlatList
                data={Hoteis}
                renderItem={({ item }) => (
                    <View style={styles.Hoteis}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.HoteisTxt}>{item.nome}</Text>
                            <Text style={styles.HoteisTxt}>{item.endereco}</Text>
                        </View>
                        <View style={styles.extraInfo}>
                            <Text style={styles.HoteisTxt}>Preço: {item.preco}</Text>
                            <Text style={styles.HoteisTxt}>Avaliação: {item.avaliacao}</Text>
                        </View>
                        <Image style={styles.image} source={{ uri: item.imagem }} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    style:{
        height: 45, 
        width: 100, 
        marginTop: 15, 
        borderRadius: 5
    },
    txtHoteis: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 25,
    },
    Hoteis: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#80B3FF',
        padding: 11,
        marginBottom: 10,
        borderRadius: 8,
    },
    infoContainer: {
        flex: 2,
    },
    extraInfo: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    HoteisTxt: {
        color: 'black',
        marginBottom: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
});
