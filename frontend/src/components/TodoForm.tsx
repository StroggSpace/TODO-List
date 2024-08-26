import {
  IonItem,
  IonInput,
  IonTextarea,
  IonToggle,
  IonDatetime,
} from "@ionic/react";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { FC } from "react";
import { Task } from "../types/Objects";

interface Props {
  register: UseFormRegister<Task>;
  errors: FieldErrors<Task>;
  setValue: UseFormSetValue<Task>;
  getValues: UseFormGetValues<Task>;
  watch: UseFormWatch<Task>;
}

export const TodoForm: FC<Props> = ({
  register,
  errors,
  getValues,
  setValue,
  watch,
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
          rows={10}
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
      <IonItem>
        <IonToggle
          enableOnOffLabels
          checked={getValues("deadline")}
          onIonChange={() => setValue("deadline", !getValues("deadline"))}
          {...register("deadline")}
        >
          Дедлайн
        </IonToggle>
      </IonItem>
      {watch("deadline") && (
        <IonItem>
          <IonInput
            label="Срок выполнения"
            type="date"
            {...register("dueDate")}
          />
        </IonItem>
      )}
    </form>
  );
};
