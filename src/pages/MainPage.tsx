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
import { CreateTodoForm } from "../components/createTodo/CreateTodoForm";

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
            <IonButton id="open-modal-create" expand="block" className="mb-4">
              Добавить задачу
            </IonButton>
            <p className="text-center">
              У вас пока нет задач, самое время - добавить!
            </p>
            <CreateTodoForm />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
