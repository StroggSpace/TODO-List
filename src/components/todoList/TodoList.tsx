import { IonLabel, IonList } from "@ionic/react";
import { FC } from "react";
import { Task } from "../../types/Objects";
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
      <IonLabel
        className={`pl-3 ${listName === "Завершенные" && "text-success"} 
        ${listName === "Просроченные" && "text-danger"}`}
      >
        {listName}
      </IonLabel>
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
