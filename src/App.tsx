import { Redirect, Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { MainPage } from "./pages/MainPage";
import { TodoPage } from "./pages/TodoPage";

/* Theme variables */
import "./theme/variables.css";
import "@ionic/react/css/palettes/dark.class.css";
import { useDarkMode } from "./store/useDarkMode";

setupIonicReact();

export const App: React.FC = () => {
  const { darkMode } = useDarkMode();
  return (
    <IonApp className={darkMode ? `ion-palette-dark` : ""}>
      <IonReactRouter>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/todo/:id" component={TodoPage} />
        <Redirect exact path="/" to="/main" />
      </IonReactRouter>
    </IonApp>
  );
};
