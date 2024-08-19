import { SideMenu } from "@/components/sideMenu/sideMenu";
import { TodoList } from "@/components/todoList/TodoList";
import { useTodos } from "@/store/useTodos";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonBackButton,
} from "@ionic/react";

export const TodosTrash: React.FC = () => {
  const deletedTasks = useTodos((state) => state.getDeletedTodos());
  return (
    <>
      <SideMenu id="TodosPage" />
      <IonPage className="flex flex-col" id="TodosPage">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className="flex justify-center">
              Недавно удаленные
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <TodoList tasks={deletedTasks} />
        </IonContent>
      </IonPage>
    </>
  );
};
