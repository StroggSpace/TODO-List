import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";
import { useTodos } from "../../store/useTodos";
import { useForm } from "react-hook-form";
import { Task } from "../../types/Objects";
import { v4 } from "uuid";
import { TodoForm } from "../TodoForm";

export const CreateTodoModal = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const addTodo = useTodos((state) => state.addTodo);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      priority: false,
      completed: false,
      deleted: false,
      deadline: false,
    },
  });

  const onWillDismiss = () => {
    setValue("title", "");
    setValue("note", "");
    setValue("priority", false);
    setValue("deadline", false);
  };

  const onSubmit = handleSubmit((data) => {
    addTodo({
      ...data,
      createdAt: new Date(),
      id: v4(),
      dueDate: data.deadline ? data.dueDate : null,
    });
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
        <TodoForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          watch={watch}
        />
      </IonContent>
    </IonModal>
  );
};
