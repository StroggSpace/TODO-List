import { useSettings } from "@/store/useSettings";
import { useTodos } from "@/store/useTodos";
import { themeIcons } from "@/theme/icons";
import { Task } from "@/types/Objects";
import { getDaystoDelete } from "@/utils/getDaystoDelete";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPopover,
  IonText,
} from "@ionic/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  task: Task;
  checked: boolean;
  onToggle: () => void;
  className?: string;
}

export const TodoCardItem: FC<Props> = ({ task, checked, onToggle, className }) => {
  const toggleRemoveTodo = useTodos((state) => state.toggleRemoveTodo);
  const clearTodo = useTodos((state) => state.clearTodo);
  const settings = useSettings((state) => state.settings);

  const removeTodo = () => {
    task.deleted ? clearTodo(task.id) : toggleRemoveTodo(task.id);
  };

  return (
    <IonCard className={className}>
      <div className="flex items-center justify-between">
        <IonCheckbox
          className="p-2 pl-3"
          checked={checked}
          onIonChange={onToggle}
        />
        <IonButton id={`click-trigger-${task.id}`} fill="clear" size="small">
          <IonIcon icon={themeIcons.popOver} />
        </IonButton>
      </div>
      <Link to={`/todo/${task.id}`}>
      <IonCardHeader>
        <div className="flex items-center">
          {task.priority ? (
            <IonIcon icon={themeIcons.alert} size="large" />
          ) : null}
          <IonCardTitle className={`w-full line-clamp-2 ${checked ? "line-through" : ""}`}>
            {task.title}
          </IonCardTitle>
        </div>
        {task.deadline ? (
          <IonCardSubtitle
            className={
              task.dueDate &&
              !task.completed &&
              new Date(task.dueDate) < new Date()
                ? "underline decoration-danger"
                : ""
            }
          >
            {new Date(task.dueDate as Date).toLocaleDateString()}
          </IonCardSubtitle>
        ) : null}
      </IonCardHeader>

      <IonCardContent>
        {task.note ? <p>{task.note}</p> : <p>Без описания</p>}
        {task.deleted && task.deletedAt ? (
          <IonText className="text-danger">{`До полного удаления ${getDaystoDelete(
            new Date(task.deletedAt),
            settings.deleteDays
          )} дн.`}</IonText>
        ) : null}
      </IonCardContent>
      <IonPopover trigger={`click-trigger-${task.id}`} triggerAction="click">
        <IonContent class="ion-padding">
          <IonItem button onClick={() => removeTodo()}>
            <IonIcon icon={themeIcons.remove} slot="start" />
            <IonLabel>Удалить</IonLabel>
          </IonItem>
        </IonContent>
      </IonPopover>
      </Link>
    </IonCard>
  );
};
