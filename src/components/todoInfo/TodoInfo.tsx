import { FC } from "react";
import { Task } from "../todoList/types";
import { IonItem, IonLabel } from "@ionic/react";

interface Props {
  task: Task;
}

export const TodoInfo: FC<Props> = ({ task }) => {
  return (
    <>
      <IonItem>
        <IonLabel>
          <h2>{task.note ? "Описание" : "Описание задачи отсутствует"}</h2>
          {task.note ? <p>{task.note}</p> : null}
        </IonLabel>
      </IonItem>
      {task.dueDate ? (
        <IonItem>
          <IonLabel>
            <h2>Срок выполнения</h2>
            {task.dueDate ? (
              <p
                className={
                  task.dueDate && new Date(task.dueDate) < new Date()
                    ? "underline decoration-danger"
                    : ""
                }
              >
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            ) : null}
          </IonLabel>
        </IonItem>
      ) : null}
      <IonItem>
        <IonLabel>
          <h2>Статус</h2>
          <p>
            {task.completed
              ? `Выполнено ${new Date(
                  task.completedAt || new Date()
                ).toLocaleDateString()}`
              : "Не выполнено"}
          </p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Дата создания</h2>
          <p>{new Date(task.createdAt).toLocaleDateString()}</p>
        </IonLabel>
      </IonItem>
      {task.updatedAt ? (
        <IonItem>
          <IonLabel>
            <h2>Дата обновления</h2>
            <p>{new Date(task.updatedAt).toLocaleDateString()}</p>
          </IonLabel>
        </IonItem>
      ) : null}
    </>
  );
};
