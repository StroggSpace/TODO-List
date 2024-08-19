import {
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  IonBadge,
} from "@ionic/react";
import { themeIcons } from "../../theme/icons";
import { useDarkMode } from "../../store/useDarkMode";
import { useTodos } from "@/store/useTodos";

export const MenuList = () => {
  const { darkMode, toggleThemeMode } = useDarkMode();
  const trashCount = useTodos((state) => state.getDeletedTodos().length);
  return (
    <IonList>
      <IonItem>
        <IonIcon icon={themeIcons.today} slot="start" />
        <IonToggle
          checked={darkMode}
          onIonChange={() => toggleThemeMode(!darkMode)}
          enableOnOffLabels
        >
          Темная тема
        </IonToggle>
      </IonItem>
      <IonItem button routerLink="/todo/trash">
        <IonIcon icon={themeIcons.remove} slot="start" />
        <IonLabel>Недавно удаленные</IonLabel>
        <IonBadge slot="end">{trashCount}</IonBadge>
      </IonItem>
      <IonItem button routerLink="/settings">
        <IonIcon icon={themeIcons.settings} slot="start" />
        <IonLabel>Настройки</IonLabel>
      </IonItem>
    </IonList>
  );
};
