import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },
    containerTask:{
        width: '90%',
        height: 64,
        backgroundColor: '#262626',
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 8,
        
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    textTask:{
        color: '#F2F2F2',
        marginLeft: 10,
        width: '80%'
    },
    textDoneTask:{
        color: '#808080',
        textDecorationLine: 'line-through',
        marginLeft: 10,
        width: '80%'
    },
    imageCheck:{
        width: 24,
        height: 24
    }
});