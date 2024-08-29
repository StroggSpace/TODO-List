import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";

/* Theme variables */
import "@/theme/variables.css";
import "@ionic/react/css/palettes/dark.class.css";
import { useDarkMode } from "@/store/useDarkMode";
import { themeIcons } from "@/theme/icons";
import { TodosOutlet } from "@/pages/todosOutlet/TodosOutlet";
import { useEffect, useState } from "react";
import { getObject } from "./utils/getObject";
import { useTodos } from "./store/useTodos";
import { Settings, Task } from "./types/Objects";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { useSettings } from "./store/useSettings";
import { getDaystoDelete } from "./utils/getDaystoDelete";
import axios from 'axios';

setupIonicReact();

const apiCall = async () => {
  await axios.get('http://0.0.0.0:8080/')
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
}

apiCall();

export const App: React.FC = () => {
  const { darkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const setTodos = useTodos((state) => state.setTodos);
  const settings = useSettings((state) => state.settings);
  const { setDefaultSettings, setSettings } = useSettings((state) => state);

  useEffect(() => {
    getObject("todos")
      .then((value) => {
        const filteredTodos = (value as Task[]).filter((t) => {
          if (t.deletedAt) {
            return (
              getDaystoDelete(new Date(t.deletedAt), settings.deleteDays) > 0
            );
          }
          return true;
        });
        setTodos(filteredTodos);
      })
      .catch(() => setTodos([]))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getObject("settings")
      .then((value) => {
        setSettings(value as Settings);
      })
      .catch(() => setDefaultSettings());
  }, []);

  if (isLoading) {
    console.log("Loading...");
    return null;
  }

  return (
    <IonApp className={darkMode ? `ion-palette-dark` : ""}>
      <IonTabs>
        <IonRouterOutlet>
          <TodosOutlet />
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
          <Redirect exact path="/" to="/todo" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="todo" href="/todo">
            <IonIcon icon={themeIcons.today} />
            <IonLabel>Задачи</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notes" href="/notes">
            <IonIcon icon={themeIcons.reader} />
            <IonLabel>Заметки</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonApp>
  );
};
