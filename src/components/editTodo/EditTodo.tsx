import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import { Task } from "../todoList/types";
import { useParams } from "react-router";
import { useTodos } from "../../store/useTodos";
import { themeIcons } from "../../theme/icons";
import { useRef } from "react";

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
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      ...currentTodo,
    },
  });

  const onWillDismiss = () => {
    reset();
  };

  const onSubmit = handleSubmit((data) => {
    updateTodo(data);
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
          <IonTitle className="text-center">Добавить задачу</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={onSubmit}>
              Готово
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form>
          <IonItem>
            <IonInput
              placeholder="Укажите название задачи"
              label="Название"
              type="text"
              {...register("title", { required: true })}
            />
            {errors.title && <p>Введите название</p>}
          </IonItem>
          <IonItem>
            <IonTextarea
              rows={15}
              placeholder="Укажите описание задачи"
              label="Описание"
              {...register("description")}
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <IonSelect
              label="Приоритет"
              interface="action-sheet"
              {...register("priority")}
            >
              <IonSelectOption value={"1"}>Высокий</IonSelectOption>
              <IonSelectOption value={"2"}>Средний</IonSelectOption>
              <IonSelectOption value={"3"}>Низкий</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>
              Выберите иконку задачи
              {themeIcons ? (
                <div className="flex items-center flex-row flex-wrap m-2">
                  {Object.values(themeIcons).map((icon) => (
                    <div key={icon}>
                      <input
                        className="hidden peer"
                        type="radio"
                        value={icon}
                        id={icon}
                        {...register("icon")}
                      />
                      <label
                        key={icon}
                        htmlFor={icon}
                        className="grid items-center cursor-pointer hover:scale-110 peer-checked:outline peer-checked:outline-2 peer-checked:rounded-full p-1"
                      >
                        <IonIcon icon={icon} size="large" />
                      </label>
                    </div>
                  ))}
                </div>
              ) : null}
            </IonLabel>
          </IonItem>
        </form>
      </IonContent>
    </IonModal>
  );
};
