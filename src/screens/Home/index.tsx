import { useState } from "react";
import { Alert, View } from "react-native";
import { styles } from './styles';

import Task from "../../interfaces/Task";

import Header from "../../components/Header";
import ToDoInput from "../../components/ToDoInput";
import CounterContainer from "../../components/CounterContainer";
import TaskList from "../../components/TaskList";

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function handleAddTask(newTaskTitle: string) {
        
        const foundTask = tasks.find(task => task.title === newTaskTitle);

        if (foundTask) {
            return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome');
        }

        const taskAdd = {
            id: new Date().getTime(),
            title: newTaskTitle,
            done: false
        }

        setTasks(allTasks => [...allTasks, taskAdd]);
    }

    function handleToggleTaskDone(id: number) {
        const updatedTasks = tasks.map(task => ({ ...task }));

        const taskUpdate = updatedTasks.find(task => task.id === id);
        if (!taskUpdate)
            return;

        taskUpdate.done = !taskUpdate.done;
        setTasks(updatedTasks);
    }

    function handleRemoveTask(id: number) {
        Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?', [
            {
                style: 'cancel',
                text: 'Não'
            },
            {
                style: 'destructive',
                text: 'Sim',
                onPress: () => {
                    setTasks(allTasks => allTasks.filter(
                        task => task.id !== id
                    ));
                }
            }]);
    }

    return (
        <View style={styles.container}>
            <Header />
            <ToDoInput addTask={handleAddTask} />
            <CounterContainer tasks={tasks} />

            <TaskList
                tasks={tasks}
                removeTask={handleRemoveTask}
                toggleTaskDone={handleToggleTaskDone}
            />
        </View>
    )
}