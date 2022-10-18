import { Text, View, TouchableHighlight } from "react-native";
import { styles } from './styles';

import Task from "../../interfaces/Task";

interface CounterContainerProps {
    tasks: Task[]
}

export default function CounterContainer({ tasks }: CounterContainerProps) {
    const countTaskDone = tasks.reduce(function (n, val) {
        return n + (val.done === true ? 1 : 0);
    }, 0);

    return (
        <View style={styles.container}>
            <View style={styles.containerCounter}>
                <Text style={styles.createdText}>Criadas</Text>
                <TouchableHighlight style={styles.counter}>
                    <Text style={styles.counterText}>{tasks.length}</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.containerCounter}>
                <Text style={styles.doneText}>Concluídas</Text>
                <TouchableHighlight style={styles.counter}>
                    <Text style={styles.counterText}>{countTaskDone}</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}