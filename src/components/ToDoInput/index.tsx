import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

interface TodoInputProps {
    addTask: (task: string) => void;
}

export default function ToDoInput({ addTask }: TodoInputProps) {
    const [task, setTask] = useState('');

    function handleAddNewTask() {
        if (task !== undefined &&
            task !== null &&
            task !== '') {
            addTask(task);
            setTask('');
        }
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleAddNewTask}
            >
            </TextInput>
            <TouchableOpacity
                style={styles.button}
                onPress={handleAddNewTask}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}