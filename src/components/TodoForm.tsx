import { IonItem, IonInput, IonTextarea, IonToggle } from "@ionic/react";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { FC } from "react";
import { Task } from "./todoList/types";

interface Props {
  register: UseFormRegister<Task>;
  errors: FieldErrors<Task>;
  setValue: UseFormSetValue<Task>;
  getValues: UseFormGetValues<Task>;
}

export const TodoForm: FC<Props> = ({
  register,
  errors,
  getValues,
  setValue,
}) => {
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
          rows={20}
          placeholder="Укажите примечание"
          label="Примечание"
          {...register("note")}
        ></IonTextarea>
      </IonItem>
      <IonItem>
        <IonToggle
          enableOnOffLabels
          checked={getValues("priority")}
          onIonChange={() => setValue("priority", !getValues("priority"))}
          {...register("priority")}
        >
          Важное
        </IonToggle>
      </IonItem>
    </form>
  );
};
