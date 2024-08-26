import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { MenuList } from "./MenuList";

export const SideMenu = ({ id }: { id: string }) => (
  <IonMenu contentId={id} side="end" role="menu" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Меню</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <MenuList />
    </IonContent>
  </IonMenu>
);
