import React, { useState } from 'react';
import { Text, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';
import Input from '../../components/input';


const StartGameScreen = ( {onStartGame} ) => {
    const [inputValue, setInputValue] = useState(''); //el valor entrante será un sting, por eso las comillas.
    const [confirm, setConfirm] = useState(false); //el estado debe ser falso hasta que confirmemos el número que vamos a seleccioanr.
    const [selectNumber, setSelectNumber] = useState(''); //guarda el valor del número seleccionado.
    
    const handleOnChange = (text) =>{
        setInputValue(text.replace(/[^0-9]/g, '')); //FUNCIÓN: si el usuario ingresa un caracter que no sea númerico, este se convertirá en un espacio vacío.
    }

    const handleOnClear = () =>{
        alert("Se limpiaron los números ingresados.");
        setInputValue(''); 
        setConfirm(false); //vuelve el estado de la confirmación a falso.
    }

    const handleConfirmInput = () =>{
        const choserNumber = parseInt(inputValue);
        if(isNaN(choserNumber) || choserNumber <= 0 || choserNumber > 100){
            return;
        }
        setConfirm(true);
        setSelectNumber(choserNumber);
        setInputValue('');
    }

    const confirmedOutput = confirm ? (
        <View style={styles.containerConfirm}>
          <Text style={styles.cardTitle}>El número que eligió es:</Text>
          <Text style={styles.confirmedText}>{selectNumber}</Text>
          <Button title='Comenzar juego' onPress={onStartGame(selectNumber)}/>
        </View>
    ) : null; //si se confirma se renderiza el número seleccionado, sino tira null.

    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() /*EL touchable + Keyboard le da un efecto a los botones cuando son presionados*/}>
            <View style={styles.container}>
                <Header title='Adiviná el número' />
                <Card>
                    <Text style={styles.cardTitle}>Empezar a jugar</Text>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Elija un número</Text>
                        <Input handleOnChange={(value)=> handleOnChange(value)} 
                            placeholder='EJ: 11' 
                            style={styles.input} 
                            maxLength={2 /*solo puedo escribir hasta 2 números*/} 
                            blurOnsubmit
                            autoCapitalization='none'
                            autoCorrect={false}
                            keyboardType='numeric'
                            returnKeyType='done'
                            value={inputValue}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title='Limpiar'   onPress={handleOnClear}/>
                        <Button title='Confirmar' onPress={handleConfirmInput}/>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen;