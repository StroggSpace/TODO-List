import { IonLabel, IonList } from "@ionic/react";
import { FC } from "react";
import { Task } from "../../types/Objects";
import { TodoListItem } from "./TodoListItem";
import { useTodos } from "../../store/useTodos";
import { useSettings } from "@/store/useSettings";
import { TodoCardItem } from "./TodoCardItem";

interface Props {
  tasks: Task[];
  listName?: string;
}

export const TodoList: FC<Props> = ({ tasks, listName }) => {
  const toggleCompleteTodo = useTodos((state) => state.toggleCompleteTodo);
  const displayMode = useSettings((state) => state.settings.displayMode);
  if (!tasks || tasks.length === 0) return null;

  return (
    <IonList>
      {listName && (
        <IonLabel
          className={`pl-3 ${listName === "Завершенные" && "text-success"} 
        ${listName === "Просроченные" && "text-danger"}`}
        >
          {listName}
        </IonLabel>
      )}
      <div
        className={
          `w-full p-2 ${displayMode === "grid"
            ? "flex flex-wrap gap-2 justify-start"
            : "flex flex-col gap-2"}`}
      >
        {tasks
          ? tasks.map((task) =>
              displayMode === "list" ? (
                <TodoListItem
                  key={task.id}
                  task={task}
                  checked={task.completed}
                  onToggle={() => toggleCompleteTodo(task.id)}
                />
              ) : (
                <TodoCardItem
                  className="flex-auto"
                  key={task.id}
                  task={task}
                  checked={task.completed}
                  onToggle={() => toggleCompleteTodo(task.id)}
                />
              )
            )
          : null}
      </div>
    </IonList>
  );
};
