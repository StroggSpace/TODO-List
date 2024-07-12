import { OverlayEventDetail } from "@ionic/core";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef } from "react";
import { useTodos } from "../../store/useTodos";

export const CreateTodoForm = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const addTodo = useTodos((state) => state.addTodo);

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      addTodo({
        id: Math.random().toString(),
        title: ev.detail.data,
        completed: false,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
        deleted: false,
        description: null,
        dueDate: null,
        priority: 0,
        completedAt: null,
      });
    }
  }

  return (
    <IonModal
      ref={modal}
      trigger="open-modal-create"
      onWillDismiss={(ev) => onWillDismiss(ev)}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Отмена
            </IonButton>
          </IonButtons>
          <IonTitle className="text-center">Добавить задачу</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => confirm()}>
              Готово
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding h-dvh">
        <IonItem>
          <IonInput
            label="Название задачи"
            labelPlacement="stacked"
            ref={input}
            type="text"
            placeholder="Заголовок задачи"
            required
            maxlength={50}
            minlength={5}
          />
        </IonItem>
      </IonContent>
    </IonModal>
  );
};
