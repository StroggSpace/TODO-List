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
import { IonReactRouter } from "@ionic/react-router";
import { TodosPage } from "./pages/TodosPage";
import { TodoDetailPage } from "./pages/TodoDetailPage";

/* Theme variables */
import "./theme/variables.css";
import "@ionic/react/css/palettes/dark.class.css";
import { useDarkMode } from "./store/useDarkMode";
import { themeIcons } from "./theme/icons";

setupIonicReact();
// todo: fix double render component
export const App: React.FC = () => {
  const { darkMode } = useDarkMode();
  return (
    <IonApp className={darkMode ? `ion-palette-dark` : ""}>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/todo" component={TodosPage} />
            <Route exact path="/todo/:id" component={TodoDetailPage} />
            <Redirect exact path="/" to="/todo" />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="todo" href="/todo">
              <IonIcon icon={themeIcons.today} />
              <IonLabel>Задачи</IonLabel>
            </IonTabButton>
            <IonTabButton tab="notes" href="/notes">
              <IonIcon icon={themeIcons.skull} />
              <IonLabel>Заметки</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};
