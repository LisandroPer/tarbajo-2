import { StyleSheet } from 'react-native'
import { colors, fontSize } from '../../constantes/temasApp'

export const styles = StyleSheet.create({
    container: {
        flex: 1,    
    },

    cardTitle: {
        fontSize: fontSize.titleSize,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: colors.titleColor,
    },

    inputContainer: {
        flex: 1,
        flexGrow: 0.6,
        marginHorizontal: 20,
    },

    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.labelColor,
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    buttonContainer: {
        flex: 1,
        flexGrow: 0.20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        marginTop:20,
        paddingTop: 1,
    },

    confirmedText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
    },

    containerConfirm: {
        flex: 1,
        flexGrow: 0.2,
        justifyContent: 'center',
        marginVertical: 10,
        alignItems: 'center',
    }
})