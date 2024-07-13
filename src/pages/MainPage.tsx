import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { TodoList } from "../components/todoList/TodoList";
import { useTodos } from "../store/useTodos";
import { CreateTodoModal } from "../components/createTodo/CreateTodoModal";
import { Fab } from "../components/ui/Fab";

const Home: React.FC = () => {
  const tasks = useTodos((state) => state.todos);

  return (
    <IonPage className="h-full">
      <IonHeader>
        <IonToolbar>
          <IonTitle>TODO List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {tasks.length > 0 ? (
            <TodoList tasks={tasks} />
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-center">
              У вас пока нет задач, самое время добавить!
            </p>
          </div>
        )}
        <CreateTodoModal />
        <Fab id="open-modal-create" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
