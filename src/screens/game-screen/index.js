import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import Card from "../../components/card";
import Header from "../../components/header";

const generateRandomBetween = (min, max, exclude) =>{ //FUNCIÓN PARA GENERAR NÚMEROS ALEATORIOS.
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max, exclude);
    }
    else{
        return rndNum;
    } 
}

const GameScreen = ( {userOptions} ) =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions));

    
    return(
        <View style={styles.container}>
            <Header title='Juego iniciado'/>
            <Card>
                <Text style={styles.subText}>La suposición del opoente es:</Text>
                <Text style={styles.confirmedText}>{currentGuess}</Text>
                <View style={styles.buttonContainer}>
                    <Button title='menor' onPress={()=>null}/> 
                    <Button title='mayor' onPress={()=>null}/> 
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;