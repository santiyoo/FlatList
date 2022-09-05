import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { jugadores } from '../../data/Jugadores';

export default function HomeScreen(){
    const navigation = useNavigation();

    const ListaScreen = () => {
        navigation.navigate('Lista')
    }

    const agregar = () => {
        console.log(data)
        jugadores.push(data)
        console.log(jugadores)
    }

    const [ data, setData ] = useState({
        Nombre: undefined,
        Apellido: undefined,
    });

    const handleInput = (e, name) => {
        setData({
            ...data,
            [name]: e,
        });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
            style={styles.input}
            onChangeText={(e) => handleInput(e, 'Nombre')}
            placeholder='Ingrese Nombre'
            />
            <TextInput
            style={styles.input}
            onChangeText={(e) => handleInput(e, 'Apellido')}
            placeholder='Ingrese Apellido'
            />
            <TouchableOpacity style={[styles.button, styles.yellow]} onPress={agregar}>
                <Text style={[styles.text]}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.yellow]} onPress={ListaScreen}>
                <Text style={[styles.text]}>Ver Lista</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20, 
        width: 180,
        height: 50, 
        padding: 10, 
        alignItems: 'center', 
        borderRadius: 5
    },
    yellow: {
        backgroundColor:'#FFAE03', 
    },
    blue: {
        backgroundColor:'blue'
    },
    green: {
        backgroundColor:'green'
    },
    text: {
        color: 'white', 
        fontSize: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    box: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
});