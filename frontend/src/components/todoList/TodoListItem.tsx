import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPopover,
  IonText,
} from "@ionic/react";
import { FC } from "react";
import { Task } from "../../types/Objects";
import { useTodos } from "../../store/useTodos";
import { themeIcons } from "../../theme/icons";
import { useSettings } from "@/store/useSettings";
import { getDaystoDelete } from "@/utils/getDaystoDelete";

interface Props {
  task: Task;
  checked: boolean;
  onToggle: () => void;
}

export const TodoListItem: FC<Props> = ({ task, checked, onToggle }) => {
  const toggleRemoveTodo = useTodos((state) => state.toggleRemoveTodo);
  const clearTodo = useTodos((state) => state.clearTodo);
  const settings = useSettings((state) => state.settings);

  const removeTodo = () => {
    task.deleted ? clearTodo(task.id) : toggleRemoveTodo(task.id);
  };

  return (
    <div className="flex items-center gap-1">
      <IonCheckbox
        className="p-2 pl-3"
        checked={checked}
        onIonChange={onToggle}
      />
      <IonItem routerLink={`/todo/${task.id}`} className="w-full">
        {task.priority ? <IonIcon icon={themeIcons.alert} /> : null}
        <IonLabel>
          <h2 className={`w-full ${checked ? "line-through" : ""}`}>
            {task.title}
          </h2>
          {task.deadline ? (
            <p
              className={
                task.dueDate &&
                !task.completed &&
                new Date(task.dueDate) < new Date()
                  ? "underline decoration-danger"
                  : ""
              }
            >
              {new Date(task.dueDate as Date).toLocaleDateString()}
            </p>
          ) : null}
        </IonLabel>
        {task.deleted && task.deletedAt ? (
          <IonText className="text-danger">{`До полного удаления ${getDaystoDelete(
            new Date(task.deletedAt),
            settings.deleteDays
          )} дн.`}</IonText>
        ) : null}
      </IonItem>
      <IonButton id={`click-trigger-${task.id}`} fill="clear" size="small">
        <IonIcon icon={themeIcons.popOver} />
      </IonButton>
      <IonPopover trigger={`click-trigger-${task.id}`} triggerAction="click">
        <IonContent class="ion-padding">
          <IonItem button onClick={() => removeTodo()}>
            <IonIcon icon={themeIcons.remove} slot="start" />
            <IonLabel>Удалить</IonLabel>
          </IonItem>
        </IonContent>
      </IonPopover>
    </div>
  );
};
