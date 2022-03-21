import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 0.2, //IMPORTANTEEEEEEEEEEEEEEEEEEE. Indico cuanto espacio quiero que ocupe el contenedor
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        backgroundColor: 'blue',
       
        
    },
    title: {
        fontSize: 20,
        color: '#fff',
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})