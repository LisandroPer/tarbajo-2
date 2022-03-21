import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        margin: 100,
        height: 80
    },

    input: {
        height: 'auto',
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        marginBottom: 15,
        fontSize: 50,
        alignSelf: 'center', //crecerá según el tamaño del input. 
        color: 'blue', 
    },
})