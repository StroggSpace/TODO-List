import { IonItem, IonLabel } from "@ionic/react";
import { FC } from "react";
import { Task } from "./types";

interface Props {
  task: Task;
}

export const TodoItem: FC<Props> = ({ task }) => {
  return (
    <IonItem>
      <IonLabel>{task.title}</IonLabel>
    </IonItem>
  );
};
