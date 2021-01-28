import React from "react";
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton,
} from "@ionic/react";

const Tab1Detail: React.FC<any> = (props) => {
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
                              <IonCardTitle>jobs feed</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                              <IonButtons slot="start">
                                  <IonBackButton/>
                              </IonButtons>
                              <IonButton>
                                  NEXT PAGE
                              </IonButton>
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
              </IonRow>
          </IonGrid>
      </IonContent>
  );
};

export default React.memo(Tab1Detail);
