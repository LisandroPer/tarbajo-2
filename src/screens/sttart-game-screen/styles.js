import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,    
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#6460e6'
    },

    inputContainer: {
        flex: 1,
        flexGrow: 0.6,
        marginHorizontal: 20,
    },

    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1d93fd',
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    input: {
        height: 51,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        marginBottom: 15,
        fontSize: 30,
        alignSelf: 'center', //crecerá según el tamaño del input. 
        color: 'blue', 
    },

    buttonContainer: {
        flex: 1,
        flexGrow: 0.20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        marginTop:30,
        paddingTop: 1,
    }
})