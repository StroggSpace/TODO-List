import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonPage,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { MainPage } from "./pages/MainPage";

/* Theme variables */
import "./theme/variables.css";
import "@ionic/react/css/palettes/dark.always.css";
import { TodoPage } from "./pages/TodoPage";

setupIonicReact();

export const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/todo/:id" component={TodoPage} />
      <Redirect exact path="/" to="/main" />
    </IonReactRouter>
  </IonApp>
);
