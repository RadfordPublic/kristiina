import React from "react";
import {
    IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent, IonGrid, IonRow,
} from "@ionic/react";
import { useHistory } from "react-router";

const Tab1: React.FC = () => {
  const history = useHistory();

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
                              <IonCardTitle>profile page 1</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                              {/*<IonButton*/}
                              {/*    expand="full"*/}
                              {/*    onClick={() => history.push("/page/Profile/tabs/tab1-detail")}*/}
                              {/*>*/}
                              {/*    NEXT PAGE*/}
                              {/*</IonButton>*/}
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
              </IonRow>
          </IonGrid>
        </IonContent>
  );
};

export default Tab1;
