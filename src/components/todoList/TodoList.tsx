import { IonList } from "@ionic/react";
import { FC } from "react";
import { Task } from "./types";
import { TodoItem } from "./TodoItem";

interface Props {
  tasks: Task[];
}

export const TodoList: FC<Props> = ({ tasks }) => {
  return (
    <IonList>
      {tasks
        ? tasks.map((task) => <TodoItem key={task.id} task={task} />)
        : null}
    </IonList>
  );
};
