import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../config/firebaseconfig';
import { LinearGradient } from 'expo-linear-gradient';

export default function Voos() {
    const [Pontos, setPontos] = useState([]);

    useEffect(() => {
        const PontosCollection = collection(database, 'Pontos Turísticos');
        const unsubscribe = onSnapshot(PontosCollection, (querySnapshot) => {
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setPontos(list);
        });

        return () => unsubscribe();
    }, []);

    return (
        <LinearGradient
        start={{x:0,y:1}}
	end={{x:1,y:0}}
	colors={['#B6FFFA','#687EFF']}>
        <View style={styles.container}>
            <Text style={styles.txtPontos}>Pontos Turísticos</Text>
            <FlatList
                data={Pontos}
                renderItem={({ item }) => (
                    <View style={styles.Pontos}>
                        <View style={styles.column}>
                            <Text style={styles.Pontostxt}>Endereço: {item.Endereco}</Text>
                            <Text style={styles.Pontostxt}>Localizacao: {item.Localizacao}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.Pontostxt}>Nome: {item.Nome}</Text>
                            <Text style={styles.Pontostxt}>Descrição: {item.Descricao}</Text>
                        </View>
                        <Image style={styles.image} source={{ uri: item.Imagem }} />
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
    txtPontos: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 20,
    },
    Pontos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#80B3FF',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    column: {
        flex: 1,
        marginRight: 10, 
    },
    Pontostxt: {
        color: 'Black',
        marginBottom:25,
    },
    image: {
        width: 300,
        height: 250,
        borderRadius: 8,
    },
});
