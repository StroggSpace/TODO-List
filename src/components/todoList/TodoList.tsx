import { IonLabel, IonList } from "@ionic/react";
import { FC } from "react";
import { Task } from "./types";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../../store/useTodos";

interface Props {
  tasks: Task[];
  listName: string;
}

export const TodoList: FC<Props> = ({ tasks, listName }) => {
  const toggleCompleteTodo = useTodos((state) => state.toggleCompleteTodo);
  if (!tasks || tasks.length === 0) return null;
  return (
    <IonList>
      <IonLabel className="pl-3">{listName}</IonLabel>
      {tasks
        ? tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            checked={task.completed}
            onToggle={() => toggleCompleteTodo(task.id)}
          />
        ))
      : null}
  </IonList>
);
};
