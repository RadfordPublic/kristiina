import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import {
  briefcaseOutline, briefcaseSharp,
  calculatorOutline, calculatorSharp,
  ellipse,
  homeOutline, homeSharp,
  peopleOutline, peopleSharp,
  square,
  triangle
} from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab1Detail from './Tab1Detail';
import Tab4 from "./Tab4";
// import Tab1Detail from './Tab1Detail';


const TabRoot: React.FC = () => (
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/page/profile/tabs/tab1" component={Tab1} exact={true} />
          <Route path="/page/profile/tabs/tab1-detail" component={Tab1Detail} />
          <Route path="/page/profile/tabs/tab2" component={Tab2} exact={true} />
          <Route path="/page/profile/tabs/tab3" component={Tab3} />
          <Route path="/page/profile/tabs/tab4" component={Tab4} />
          <Route path="/page/profile/tabs" render={() => <Redirect to="/page/profile/tabs/tab1" />} exact={true} />
          <Route path="/page/profile/" render={() => <Redirect to="/page/profile/tabs/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/page/profile/tabs/tab1">
            <IonIcon icon={homeSharp} />
            <IonLabel>Overview</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/page/profile/tabs/tab2">
            <IonIcon icon={peopleSharp} />
            <IonLabel>Audience</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/page/profile/tabs/tab3">
            <IonIcon icon={briefcaseSharp} />
            <IonLabel>Campaigns</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/page/profile/tabs/tab4">
            <IonIcon icon={calculatorSharp} />
            <IonLabel>Banking</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
);

export default TabRoot;
