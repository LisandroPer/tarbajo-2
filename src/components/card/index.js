import React from "react";
import { View, Text } from 'react-native';
import { styles } from "./styles";

const Card = ( {children} ) =>{
    return(
        <View style={styles.card}>
            {children}
        </View>
    );
}

export default Card;