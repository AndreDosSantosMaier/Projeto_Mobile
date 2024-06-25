import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../config/firebaseconfig';
import { LinearGradient } from 'expo-linear-gradient';

export default function Voos() {
    const [Voos, setVoos] = useState([]);

    useEffect(() => {
        const VoosCollection = collection(database, 'Voos');
        const unsubscribe = onSnapshot(VoosCollection, (querySnapshot) => {
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setVoos(list);
        });

        return () => unsubscribe();
    }, []);

    return (
        <LinearGradient
        start={{x:0,y:1}}
	end={{x:1,y:0}}
	colors={['#B6FFFA','#687EFF']}>
        <View style={styles.container}>
            <Text style={styles.txtVoos}>Voos</Text>
            <FlatList
                data={Voos}
                renderItem={({ item }) => (
                    <View style={styles.Voos}>
                        <View style={styles.column}>
                            <Text style={styles.Voostxt}>Companhia: {item.Companhia_aerea}</Text>
                            <Text style={styles.Voostxt}>Data/Hora: {item.Data_Hora}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.Voostxt}>Localização: {item.Localizacao}</Text>
                            <Text style={styles.Voostxt}>Destino: {item.Destino}</Text>
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
    txtVoos: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 20,
    },
    Voos: {
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
    Voostxt: {
        color: 'Black',
        marginBottom:25,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
});
