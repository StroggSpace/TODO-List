import { FC } from "react";
import { Task } from "../todoList/types";
import { IonItem, IonLabel } from "@ionic/react";
import { PRIORITIES } from "../../utils/const";

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
      <IonItem>
        <IonLabel>
          <h2>
            {task.dueDate ? "Срок выполнения" : "Срок выполнения отсутствует"}
          </h2>
          {task.dueDate ? <p>{task.dueDate.toLocaleDateString()}</p> : null}
        </IonLabel>
      </IonItem>
      <IonItem>
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
      <IonItem>
        <IonLabel>
          <h2>Дата обновления</h2>
          <p>{task.updatedAt?.toLocaleDateString()}</p>
        </IonLabel>
      </IonItem>
    </>
  );
};
