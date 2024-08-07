import {
  IonItem,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonIcon,
  IonRow,
} from "@ionic/react";
import { themeIcons } from "../theme/icons";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FC } from "react";
import { Task } from "./todoList/types";

interface Props {
  register: UseFormRegister<Task>;
  errors: FieldErrors<Task>;
}

export const TodoForm: FC<Props> = ({ register, errors }) => {
  return (
    <form>
      <IonItem>
        <IonInput
          placeholder="Укажите название задачи"
          label="Название"
          type="text"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <small className="text-red-500">Введите название</small>
        )}
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
            <IonRow>
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
                    className="grid items-center cursor-pointer
                   hover:scale-110 peer-checked:outline peer-checked:outline-1 
                    peer-checked:rounded-full m-1
                    peer-checked:animate-bounce
                    "
                  >
                    <IonIcon icon={icon} size="large" />
                  </label>
                </div>
              ))}
            </IonRow>
          ) : null}
        </IonLabel>
      </IonItem>
    </form>
  );
};
