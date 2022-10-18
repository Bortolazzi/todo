import { View, Image, Text } from 'react-native';
import { styles } from './styles';

export default function Header(){
    return (
        <View style={styles.container}>  
            <Image style={styles.imageRocket} source={require('@../../../assets/rocket.png')} />
            <Text style={styles.textTo}>to</Text>
            <Text style={styles.textDo}>do</Text>
        </View>
    )
}