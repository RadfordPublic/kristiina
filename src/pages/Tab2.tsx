import React from 'react';
import {
    IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonRow,
} from '@ionic/react';

const Tab2: React.FC = () => {
  return (
      <IonContent>
          <IonGrid>
              <IonRow>
                  <IonCol size={"12"}>
                      <IonCard>
                          <IonCardHeader>
                              <IonCardTitle>Welcome</IonCardTitle>
                              <IonCardSubtitle>Kristiina</IonCardSubtitle>
                          </IonCardHeader>
                      </IonCard>
                  </IonCol>
              </IonRow>
              <IonRow>
                  <IonCol size={"6"}>
                      <IonCard>
                          <IonCardHeader>
                              <IonCardTitle>tab 2 page</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
              </IonRow>
          </IonGrid>
      </IonContent>
  );
};

export default Tab2;
