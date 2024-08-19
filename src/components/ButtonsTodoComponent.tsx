import { useTodos } from "@/store/useTodos";
import { themeIcons } from "@/theme/icons";
import { Task } from "@/types/Objects";
import { IonButton, IonIcon } from "@ionic/react";
import { FC } from "react";

interface Props {
  task: Task;
}

export const ButtonsTodoComponent: FC<Props> = ({ task }) => {
  const toggleRemoveTodo = useTodos((state) => state.toggleRemoveTodo);
  const clearTodo = useTodos((state) => state.clearTodo);
  const toggleCompleteTodo = useTodos((state) => state.toggleCompleteTodo);

  const removeTodo = () => {
    task.deleted ? clearTodo(task.id) : toggleRemoveTodo(task.id);
  };
  return (
    <div className="flex gap-2 justify-center mt-2">
      <IonButton
        fill="outline"
        disabled={task.completed}
        onClick={() => toggleCompleteTodo(task.id)}
      >
        Выполнить
        <IonIcon color="success" slot="end" icon={themeIcons.check}></IonIcon>
      </IonButton>
      <IonButton fill="outline" onClick={removeTodo}>
        Удалить
        <IonIcon color="danger" slot="end" icon={themeIcons.remove}></IonIcon>
      </IonButton>
    </div>
  );
};
