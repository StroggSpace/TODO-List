import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { TodoList } from "../components/todoList/TodoList";
import { useTodos } from "../store/useTodos";
import { CreateTodoModal } from "../components/createTodo/CreateTodoModal";
import { Fab } from "../components/ui/Fab";
import { themeIcons } from "../theme/icons";
import { SideMenu } from "../components/sideMenu/sideMenu";

const Lists = {
  active: "Активные",
  completed: "Завершенные",
};

export const TodosPage: React.FC = () => {
  const tasks = useTodos((state) => state.todos);
  const activeTasks = useTodos((state) => state.getActiveTodos());
  const completedTasks = useTodos((state) => state.getCompletedTodos());
  const overdueTodos = useTodos((state) => state.getOverdueTodos());

  return (
    <>
      <SideMenu id="MainPage" />
      <IonPage className="flex flex-col" id="MainPage">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Мои задачи</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          {overdueTodos.length > 0 && (
            <TodoList tasks={overdueTodos} listName="Просроченные" />
          )}
          {tasks.length > 0 ? (
            Object.keys(Lists).map((list) => (
              <TodoList
                tasks={list === "active" ? activeTasks : completedTasks}
                listName={Lists[list as keyof typeof Lists]}
                key={list}
              />
            ))
          ) : (
            <div className="grid place-items-center h-full">
              <p>У вас пока нет задач, самое время добавить!</p>
            </div>
          )}
          <CreateTodoModal />
          <Fab id="open-modal-create" icon={themeIcons.add} />
        </IonContent>
      </IonPage>
    </>
  );
};
