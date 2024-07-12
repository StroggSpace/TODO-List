import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MainPage from './pages/MainPage';

/* Theme variables */
import './theme/variables.css';
import '@ionic/react/css/palettes/dark.always.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/main">
          <MainPage />
        </Route>
        <Redirect exact path="/" to="/main" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
