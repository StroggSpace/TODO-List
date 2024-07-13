import { FC } from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

interface Props {
  id: string;
}

export const Fab: FC<Props> = ({ id }) => {
  return (
    <IonFab vertical="bottom" horizontal="end" className="mb-20 mr-5">
      <IonFabButton id={id}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};
