import { IonButton, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { FC, useState } from "react";
import { Task } from "./types";
import { useTodos } from "../../store/useTodos";
import { getStatusColor } from "../../utils/helpers";

interface Props {
  task: Task;
}

export const TodoItem: FC<Props> = ({ task }) => {
  const removeTodo = useTodos((state) => state.removeTodo);
  const [ishovered, setIsHovered] = useState(false);

  return (
    <IonItem routerLink={ishovered ? undefined : `/todo/${task.id}`}>
      <IonIcon
        slot="start"
        icon={task.icon}
        color={getStatusColor(task.priority)}
      />
      <IonLabel>{task.title}</IonLabel>
      <IonButton
        fill="clear"
        slot="end"
        onTouchStart={() => setIsHovered(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => removeTodo(task.id)}
      >
        Удалить
      </IonButton>
    </IonItem>
  );
};
