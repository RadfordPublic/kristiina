import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import DashboardContainer from "../components/DashboardContainer";
import TabRoot from "./TabRoot";
import MarketPlaceContainer from "../components/MarketPlaceContainer";
import ModelContainer from "../components/ModelContainer";
import BankContainer from "../components/BankContainer";
import CalendarContainer from "../components/CalendarContainer";
import CampaignContainer from "../components/CampaignContainer";

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
          {name === 'model' &&
          <ModelContainer name={name} />}
          {name === 'banking' &&
          <BankContainer name={name} />}
          {name === 'campaign' &&
          <CampaignContainer name={name} />}
          {name === 'calendar' &&
          <CalendarContainer name={name} />}
          {name !== 'dashboard' && name !== 'profile' && name !== 'marketplace' && name !== 'model' && name !== 'banking' && name !== 'calendar' && name !== 'campaign' &&
        <ExploreContainer name={name} />}
      </IonContent>
    </IonPage>
  );
};

export default Page;
