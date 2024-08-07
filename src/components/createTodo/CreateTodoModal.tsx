import {
  IonButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";
import { useTodos } from "../../store/useTodos";
import { useForm } from "react-hook-form";
import { Task } from "../todoList/types";
import { v4 } from "uuid";
import { themeIcons } from "../../theme/icons";
import { TodoForm } from "../TodoForm";

export const CreateTodoModal = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const addTodo = useTodos((state) => state.addTodo);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      priority: "3",
      completed: false,
      deleted: false,
      icon: themeIcons.fileTrayFull,
    },
  });

  const onWillDismiss = () => {
    setValue("title", "");
    setValue("description", "");
    setValue("icon", themeIcons.fileTrayFull);
    setValue("priority", "3");
  };

  const onSubmit = handleSubmit((data) => {
    addTodo({ ...data, createdAt: new Date(), id: v4() });
    modal.current?.dismiss(null, "confirm");
  });

  return (
    <IonModal
      ref={modal}
      trigger="open-modal-create"
      onWillDismiss={onWillDismiss}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss(null, "cancel")}>
              Отмена
            </IonButton>
          </IonButtons>
          <IonTitle className="text-center">Добавить задачу</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={onSubmit}>
              Готово
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <TodoForm register={register} errors={errors} />
      </IonContent>
    </IonModal>
  );
};
