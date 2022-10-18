
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 20,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerCounter: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    doneText: {
        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 10
    },
    createdText: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 10
    },
    counterText:{
        color: '#fff',
        fontSize: 14, 
        fontWeight: 'bold'       
    },
    counter:{
        backgroundColor: '#333333',
        borderRadius: 10,
        padding: 3,
    }
});