import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonBackButton,
  IonPage,
} from "@ionic/react";
import { Fab } from "../components/ui/Fab";
import { useTodos } from "../store/useTodos";
import { Link, useParams } from "react-router-dom";
import { themeIcons } from "../theme/icons";
import { TodoInfo } from "../components/todoInfo/TodoInfo";
import { EditTodo } from "../components/editTodo/EditTodo";

export const TodoPage = () => {
  const { id }: { id: string } = useParams();
  const task = useTodos((state) => state.getTodo(id));

  return (
    <IonPage className="flex flex-col">
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start">
            <IonBackButton defaultHref="/" />
          </IonButton>
          <IonTitle>{task?.title || "Мои задачи"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {task ? (
          <>
            <TodoInfo task={task} />
            <EditTodo />
            <Fab id="open-modal-edit" icon={themeIcons.reader} />
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-center mb-4">Увы, задача не загрузилась!</p>
            <IonButton>
              <Link to="/">Вернуться на главную</Link>
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};
