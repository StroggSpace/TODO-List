import { IonList, IonItem, IonIcon, IonLabel, IonToggle } from "@ionic/react";
import { themeIcons } from "../../theme/icons";
import { useDarkMode } from "../../store/useDarkMode";

export const MenuList = () => {
  const { darkMode, toggleThemeMode } = useDarkMode();
  return (
    <IonList>
      <IonItem>
        <IonIcon icon={themeIcons.today} slot="start" />
        <IonToggle
          checked={darkMode}
          onIonChange={() => toggleThemeMode(!darkMode)}
        >
          Темная тема
        </IonToggle>
      </IonItem>
      <IonItem button routerLink="/settings">
        <IonIcon icon={themeIcons.settings} slot="start" />
        <IonLabel>Настройки</IonLabel>
      </IonItem>
    </IonList>
  );
};
