import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonBackButton,
  IonPage,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { Fab } from "../components/ui/Fab";
import { useTodos } from "../store/useTodos";
import { Link, useParams } from "react-router-dom";
import { themeIcons } from "../theme/icons";
import { TodoInfo } from "../components/todoInfo/TodoInfo";
import { EditTodo } from "../components/editTodo/EditTodo";
import { SideMenu } from "../components/sideMenu/sideMenu";

export const TodoPage = () => {
  const { id }: { id: string } = useParams();
  const task = useTodos((state) => state.getTodo(id));

  if (!task) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-center mb-4">Увы, задача не загрузилась!</p>
        <IonButton>
          <Link to="/">Вернуться на главную</Link>
        </IonButton>
      </div>
    );
  }

  return (
    <>
      <SideMenu id="TodoPage" />
      <IonPage className="flex flex-col" id="TodoPage">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/"></IonBackButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>{task.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <TodoInfo task={task} />
          <EditTodo />
          <Fab id="open-modal-edit" icon={themeIcons.reader} />
        </IonContent>
      </IonPage>
    </>
  );
};
