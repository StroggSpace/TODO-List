import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { TodoList } from "../components/todoList/TodoList";
import { useTodos } from "../store/useTodos";
import { CreateTodoModal } from "../components/createTodo/CreateTodoModal";
import { Fab } from "../components/ui/Fab";
import { themeIcons } from "../theme/icons";

export const MainPage: React.FC = () => {
  const tasks = useTodos((state) => state.todos);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Мои задачи</IonTitle>
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
        <Fab id="open-modal-create" icon={themeIcons.add} />
      </IonContent>
    </>
  );
};
