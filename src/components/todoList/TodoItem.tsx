import { IonButton, IonItem, IonLabel } from "@ionic/react";
import { FC } from "react";
import { Task } from "./types";
import { useTodos } from "../../store/useTodos";

interface Props {
  task: Task;
}

export const TodoItem: FC<Props> = ({ task }) => {
  const removeTodo = useTodos((state) => state.removeTodo);

  return (
    <IonItem>
      <IonLabel>{task.title}</IonLabel>
      <IonButton fill="clear" slot="end" onClick={() => removeTodo(task.id)}>
        Удалить
      </IonButton>
    </IonItem>
  );
};
