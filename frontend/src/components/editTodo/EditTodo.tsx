import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import { Task } from "../../types/Objects";
import { useParams } from "react-router";
import { useTodos } from "../../store/useTodos";
import { useRef } from "react";
import { TodoForm } from "../TodoForm";

export const EditTodo = () => {
  const { id }: { id: string } = useParams();
  if (!id) {
    return null;
  }
  const modal = useRef<HTMLIonModalElement>(null);

  const currentTodo = useTodos((state) => state.getTodo(id));

  const updateTodo = useTodos((state) => state.updateTodo);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      ...currentTodo,
      updatedAt: new Date(),
    },
  });

  const onWillDismiss = () => {
    reset({ ...currentTodo });
  };

  const onSubmit = handleSubmit((data) => {
    updateTodo({
      ...data,
      dueDate: data.deadline ? data.dueDate : null,
    });
    modal.current?.dismiss(null, "confirm");
  });

  return (
    <IonModal
      ref={modal}
      trigger="open-modal-edit"
      onWillDismiss={onWillDismiss}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss(null, "cancel")}>
              Отмена
            </IonButton>
          </IonButtons>
          <IonTitle className="text-center">Редактирование</IonTitle>
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
          getValues={getValues}
          setValue={setValue}
          watch={watch}
        />
      </IonContent>
    </IonModal>
  );
};
