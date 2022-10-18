import { TouchableOpacity, Image, Text, View } from "react-native";
import { styles } from './styles';

import Task from "../../interfaces/Task";

interface TasksItemProps {
    task: Task;
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export function TaskItem({ task, toggleTaskDone, removeTask }: TasksItemProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => toggleTaskDone(task.id)}
            >
                <Image style={styles.imageCheck} source={
                    task.done ?
                        require('@../../../assets/checked.png') :
                        require('@../../../assets/check.png')
                } />
            </TouchableOpacity>
            <Text style={
                task.done ?
                    styles.textDoneTask :
                    styles.textTask}>{task.title}</Text>
            <TouchableOpacity
                onPress={() => removeTask(task.id)}
            >
                <Image source={require('@../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}