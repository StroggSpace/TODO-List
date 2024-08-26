import { FC } from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";

interface Props {
  id: string;
  icon: string;
}

export const Fab: FC<Props> = ({ id, icon }) => {
  return (
    <IonFab vertical="bottom" horizontal="end" className="mb-20 mr-5">
      <IonFabButton id={id}>
        <IonIcon icon={icon}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};
