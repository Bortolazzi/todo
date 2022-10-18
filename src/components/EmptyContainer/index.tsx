import { Image, Text, View } from "react-native";
import { styles } from './styles';

export default function EmptyContainer() {
    return (
        <View style={styles.container}>
            <Image style={styles.imageClipboard} source={require('@../../../assets/clipboard.png')} />
            <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}