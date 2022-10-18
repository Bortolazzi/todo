
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        alignContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#333333',
        paddingTop: 48,
        marginLeft: 20,
        marginTop: 20,
        flex: 1
    },
    imageClipboard: {
        width: 56,
        height: 56
    },
    listEmptyTextBold: {
        marginTop: 16,
        color: '#808080',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    listEmptyText: {
        marginTop: 5,
        color: '#808080',
        fontSize: 16,
        textAlign: 'center'
    }
});