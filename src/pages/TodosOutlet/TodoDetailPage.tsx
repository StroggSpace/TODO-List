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
  IonIcon,
} from "@ionic/react";
import { Fab } from "@/components/ui/Fab";
import { useTodos } from "@/store/useTodos";
import { Link, useParams } from "react-router-dom";
import { themeIcons } from "@/theme/icons";
import { TodoInfo } from "@/components/todoInfo/TodoInfo";
import { EditTodo } from "@/components/editTodo/EditTodo";
import { SideMenu } from "@/components/sideMenu/sideMenu";
import { ButtonsTodoComponent } from "@/components/ButtonsTodoComponent";

export const TodoDetailPage = () => {
  const { id }: { id: string } = useParams();
  const task = useTodos((state) => state.getTodo(id));

  if (!task) {
    return (
      <IonPage>
        <IonContent fullscreen className="ion-padding">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-center mb-4">Увы, задача не загрузилась!</p>
            <IonButton>
              <Link to="/">Вернуться на главную</Link>
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <>
      <SideMenu id="TodoDetailPage" />
      <IonPage className="flex flex-col" id="TodoDetailPage">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <div className="flex justify-center">
              {task.priority ? (
                <IonIcon icon={themeIcons.alert} size="large" />
              ) : null}
              <IonTitle className="flex justify-center">{task.title}</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <TodoInfo task={task} />
          <ButtonsTodoComponent task={task} />
          <EditTodo />
          <Fab id="open-modal-edit" icon={themeIcons.reader} />
        </IonContent>
      </IonPage>
    </>
  );
};
