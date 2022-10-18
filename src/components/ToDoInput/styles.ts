import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        marginTop: -28,
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        flex: 1,
        backgroundColor: '#333333',
        height: 56,
        borderRadius: 5,
        color: '#FFF',
        fontSize: 16,
        marginRight: 12,
        paddingLeft: 12
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 24,
        color: '#fff'
    }
});