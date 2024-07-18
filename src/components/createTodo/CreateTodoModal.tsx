import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonRadio,
  IonRadioGroup,
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
      priority: 3,
      completed: false,
      deleted: false,
      icon: themeIcons.menu,
    },
  });

  const onWillDismiss = () => {
    setValue("title", "");
    setValue("description", "");
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
      <IonContent className="ion-padding h-dvh">
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
              rows={20}
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
              <IonSelectOption value={1}>Высокий</IonSelectOption>
              <IonSelectOption value={2}>Средний</IonSelectOption>
              <IonSelectOption value={3}>Низкий</IonSelectOption>
            </IonSelect>
          </IonItem>
          {themeIcons ? (
            <div className="flex items-center justify-around flex-row flex-wrap m-2">
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
                    className="grid items-center cursor-pointer hover:opacity-70 hover:scale-110 peer-checked:outline peer-checked:outline-2 peer-checked:rounded-full p-1"
                  >
                    <IonIcon icon={icon} />
                  </label>
                </div>
              ))}
            </div>
          ) : null}
        </form>
      </IonContent>
    </IonModal>
  );
};
