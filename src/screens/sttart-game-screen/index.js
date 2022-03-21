import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';
const StartGameScreen = () => {
    return(
        <View style={styles.container}>
            <Header title='Adiviná el número' />
            <Card>
                <Text style={styles.cardTitle}>Empezar a jugar</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Elija un número</Text>
                    <TextInput placeholder='11' style={styles.input} maxLength={2 /*solo puedo escribir hasta 2 números*/} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='Limpiar' onPress={()=> alert("Limpiar")}/>
                    <Button title='Confirmar' onPress={()=> alert("Confirmar")}/>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen