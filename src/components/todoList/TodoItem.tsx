import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPopover,
} from "@ionic/react";
import { FC } from "react";
import { Task } from "./types";
import { useTodos } from "../../store/useTodos";
import { themeIcons } from "../../theme/icons";

interface Props {
  task: Task;
  checked: boolean;
  onToggle: () => void;
}

export const TodoItem: FC<Props> = ({ task, checked, onToggle }) => {
  const toggleRemoveTodo = useTodos((state) => state.toggleRemoveTodo);

  return (
    <div className="flex items-center gap-1">
      <IonCheckbox
        className="p-2 pl-3"
        checked={checked}
        onIonChange={onToggle}
      />
      <IonItem className="w-full" routerLink={`/todo/${task.id}`}>
        {task.priority ? <IonIcon icon={themeIcons.alert} /> : null}
        <IonLabel>{task.title}</IonLabel>
      </IonItem>
      <IonButton id={`click-trigger-${task.id}`} fill="clear" size="small">
        <IonIcon icon={themeIcons.popOver} />
      </IonButton>
      <IonPopover trigger={`click-trigger-${task.id}`} triggerAction="click">
        <IonContent class="ion-padding">
          <IonItem button onClick={() => toggleRemoveTodo(task.id)}>
            <IonIcon icon={themeIcons.remove} slot="start" />
            <IonLabel>Удалить</IonLabel>
          </IonItem>
        </IonContent>
      </IonPopover>
    </div>
  );
};
