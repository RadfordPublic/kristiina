import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import DashboardContainer from "../components/DashboardContainer";
import TabRoot from "./TabRoot";

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
          {name === 'dashboard' &&
          <DashboardContainer name={name} />}
          {name === 'profile' &&
          <TabRoot />}
          {name !== 'dashboard' && name !== 'profile' &&
        <ExploreContainer name={name} />}
      </IonContent>
    </IonPage>
  );
};

export default Page;
