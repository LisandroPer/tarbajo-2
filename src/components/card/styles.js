import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        flexGrow: 0.6,
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: 'white', //es necesario para que se vea la elevación...
        marginHorizontal: 20,
        marginTop: 20,
    },
});