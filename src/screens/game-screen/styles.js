import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    confirmedText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        textAlign: 'center',
        marginBottom: 10
    },

    subText: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    buttonContainer: {
        flex: 1,
        flexGrow: 0.10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        marginTop:20,
        paddingTop: 1,
    },

})