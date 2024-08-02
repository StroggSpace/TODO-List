import { FC } from "react";
import { Task } from "../todoList/types";
import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import { PRIORITIES } from "../../utils/const";
import { getStatusColor } from "../../utils/helpers";

interface Props {
  task: Task;
}

export const TodoInfo: FC<Props> = ({ task }) => {
  return (
    <>
      <IonItem>
        <IonLabel>
          <h2>
            {task.description ? "Описание" : "Описание задачи отсутствует"}
          </h2>
          {task.description ? <p>{task.description}</p> : null}
        </IonLabel>
      </IonItem>
      {task.dueDate ? (
        <IonItem>
          <IonLabel>
            <h2>Срок выполнения</h2>
            {task.dueDate ? <p>{task.dueDate.toLocaleDateString()}</p> : null}
          </IonLabel>
        </IonItem>
      ) : null}

      <IonItem>
        <IonIcon
          slot="end"
          icon={task.icon}
          color={getStatusColor(task.priority)}
        />
        <IonLabel>
          <h2>Приоритет</h2>
          <p>{PRIORITIES[task.priority as keyof typeof PRIORITIES]}</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Статус</h2>
          <p>{task.completed ? "Выполнено" : "Не выполнено"}</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Дата создания</h2>
          <p>{task.createdAt.toLocaleDateString()}</p>
        </IonLabel>
      </IonItem>
      {task.updatedAt ? (
        <IonItem>
          <IonLabel>
            <h2>Дата обновления</h2>
            <p>{task.updatedAt.toLocaleDateString()}</p>
          </IonLabel>
        </IonItem>
      ) : null}
    </>
  );
};
