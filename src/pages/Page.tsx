import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import DashboardContainer from "../components/DashboardContainer";
import TabRoot from "./TabRoot";
import MarketPlaceContainer from "../components/MarketPlaceContainer";

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
            <img alt={'profile'} style={{
                display: "block",
                marginLeft: "0",
                marginRight: "0",
                height: "100px",
                width: "200px",
            }}
                 src="https://i.imgur.com/o1cmaC7.jpg"/>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
          {name === 'dashboard' &&
          <DashboardContainer name={name} />}
          {name === 'marketplace' &&
          <MarketPlaceContainer name={name} />}
          {name === 'profile' &&
          <TabRoot />}
          {name !== 'dashboard' && name !== 'profile' && name !== 'marketplace' &&
        <ExploreContainer name={name} />}
      </IonContent>
    </IonPage>
  );
};

export default Page;
