import { FlatList } from "react-native";
import Task from "../../interfaces/Task";

import EmptyContainer from "../../components/EmptyContainer";
import { TaskItem } from "../../components/TaskItem";

interface TasksListProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export default function TaskList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
                <TaskItem
                    removeTask={removeTask}
                    toggleTaskDone={toggleTaskDone}
                    task={item}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <EmptyContainer />
            )}
        />
    )
}