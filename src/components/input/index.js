import React from "react";
import { TextInput, View } from "react-native";
import { styles } from './styles';

const Input = ( {handleOnChange, ...props} ) =>{
    return(
        <View style={styles.container}>
           <TextInput style={styles.input} {...props} onChangeText={handleOnChange}/>
        </View>
    );
}

export default Input;