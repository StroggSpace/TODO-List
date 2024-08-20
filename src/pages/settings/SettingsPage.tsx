import { useSettings } from "@/store/useSettings";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";

export const SettingsPage = () => {
  const {
    setDeleteDays,
    getDeleteDays,
    toggleHiddenCompleted,
    setDisplayMode,
    setDefaultSettings,
    settings,
  } = useSettings((state) => state);

  return (
    <IonPage className="flex flex-col">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Настройки</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList>
          <IonItem>
            <IonInput
              label="Дней до полного удаления"
              labelPlacement="stacked"
              onIonChange={(e) => {
                setDeleteDays(Number(e.detail.value));
              }}
              type="number"
              placeholder="30"
              value={getDeleteDays()}
              min={0}
              max={30}
            />
          </IonItem>
          <IonItem>
            <IonToggle
              enableOnOffLabels
              checked={settings.hiddenCompletedTodos}
              onIonChange={toggleHiddenCompleted}
            >
              Скрыть выполнённые задачи
            </IonToggle>
          </IonItem>
          <IonItem>
            <IonSelect
              label="Отображать задачи"
              value={settings.displayMode}
              onIonChange={(e) => setDisplayMode(e.detail.value)}
            >
              <IonSelectOption value="list">Списком</IonSelectOption>
              <IonSelectOption value="grid">Сеткой</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <div className="mt-2 w-full flex justify-center">
          <IonButton fill="outline" onClick={setDefaultSettings}>
            Сбросить настройки
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
